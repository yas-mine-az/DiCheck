import joblib
import pandas as pd
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import logging

# Inisialisasi FastAPI
app = FastAPI()

# Inisialisasi logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Muat model yang sudah dilatih
try:
    model = joblib.load("random_forest.joblib")
    logger.info("Model loaded successfully")
except Exception as e:
    logger.error(f"Error loading model: {e}")
    raise HTTPException(status_code=500, detail="Model could not be loaded")

# Muat dataset yang diperlukan
try:
    df1 = pd.read_csv('Symptom-severity.csv')
    discrp = pd.read_csv("symptom_Description.csv")
    ektra7at = pd.read_csv("symptom_precaution.csv")
    medicine = pd.read_csv('symptoms-medicine.csv', delimiter=';')
except Exception as e:
    logger.error(f"Error loading datasets: {e}")
    raise HTTPException(status_code=500, detail="Datasets could not be loaded")

# Struktur data untuk input API
class SymptomData(BaseModel):
    symptoms: list[str]

def preprocess_symptoms(symptoms: list[str]):
    try:
        psymptoms = []
        for symptom in symptoms:
            if symptom in df1['Symptom'].values:
                weight = df1[df1['Symptom'] == symptom]['weight'].values[0]
                psymptoms.append(weight)
            else:
                psymptoms.append(0)
        while len(psymptoms) < 17:
            psymptoms.append(0)
        return psymptoms
    except Exception as e:
        logger.error(f"Error in preprocessing symptoms: {e}")
        raise

def predict_disease(symptoms: list[str]):
    try:
        psymptoms = preprocess_symptoms(symptoms)
        prediction = model.predict([psymptoms])[0]
        description = discrp[discrp['Disease'] == prediction]['Description'].values[0]
        matching_rows = ektra7at[ektra7at['Disease'] == prediction]
        if matching_rows.shape[0] > 0:
            recommendations = matching_rows.values[0][1:]
        else:
            recommendations = ["go see a doctor", "get some rest", "avoid drinking alcohol"]
        meds = medicine[medicine['Disease'] == prediction]['Medications'].values[0].split(', ')
        return {
            "disease": prediction,
            "description": description,
            "medications": meds,
            "recommendations": list(recommendations)  # Convert to list if not already
        }
    except Exception as e:
        logger.error(f"Error in predicting disease: {e}")
        raise HTTPException(status_code=500, detail="Prediction failed")

@app.post("/predict")
def predict(symptom_data: SymptomData):
    symptoms = symptom_data.symptoms
    if not symptoms:
        raise HTTPException(status_code=400, detail="Symptoms list cannot be empty")
    try:
        result = predict_disease(symptoms)
        return result
    except Exception as e:
        logger.error(f"Error in /predict endpoint: {e}")
        raise HTTPException(status_code=500, detail="Prediction could not be made")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)