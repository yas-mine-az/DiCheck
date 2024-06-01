import joblib
import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import logging
import requests
import numpy as np

# Inisialisasi FastAPI
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

def is_valid_value(value):
    return not (np.isnan(value) or np.isinf(value))

def sanitize_prediction_result(result):
    if isinstance(result, dict):
        return {k: sanitize_prediction_result(v) for k, v in result.items()}
    elif isinstance(result, list):
        return [sanitize_prediction_result(x) for x in result]
    elif isinstance(result, float):
        return 0 if not is_valid_value(result) else result
    return result

def predict_disease(symptoms: list[str]):
    try:
        psymptoms = preprocess_symptoms(symptoms)
        prediction = model.predict([psymptoms])[0]
        
        description_row = discrp[discrp['Disease'] == prediction]
        if description_row.empty:
            description = "Description for this disease is not available yet, please consult to a doctor for more information. We will update the description as soon as possible."
        else:
            description = description_row['Description'].values[0]

        matching_rows = ektra7at[ektra7at['Disease'] == prediction]
        if matching_rows.empty:
            recommendations = ["go see a doctor", "get some rest", "avoid drinking alcohol"]
        else:
            recommendations = matching_rows.values[0][1:]

        meds_row = medicine[medicine['Disease'] == prediction]
        if meds_row.empty:
            meds = ["No specific first-aid medication", "better to consult a doctor"]
        else:
            meds = meds_row['Medications'].values[0].split(', ')

        result = {
            "disease": prediction,
            "description": description,
            "medications": meds,
            "recommendations": list(recommendations)
        }
        return sanitize_prediction_result(result)
    except Exception as e:
        logger.error(f"Error in predicting disease: {e}")
        raise HTTPException(status_code=500, detail="Prediction failed")

@app.post("/predict")
def predict(symptom_data: SymptomData, user_id: str):
    symptoms = symptom_data.symptoms
    if not symptoms:
        raise HTTPException(status_code=400, detail="Symptoms list cannot be empty")
    try:
        result = predict_disease(symptoms)
        # Create data to be sent to the record API
        data = {
            "user_id": user_id,
            "symptoms": symptoms,
            **result
        }
        # Send data to the record API
        response = requests.post("http://localhost:8080/api/record/", json=data)
        if response.status_code != 200:
            logger.error(f"Error in /api/record/ endpoint: {response.text}")
            raise HTTPException(status_code=500, detail="Could not record prediction")
        
        # Extract record_id from the response
        record_id = response.json()['Record'].get('_id')
        
        # Return result along with user_id and record_id
        return {
            "user_id": user_id,
            "record_id": record_id,
            "result": result
        }
    except Exception as e:
        logger.error(f"Error in /predict endpoint: {e}")
        raise HTTPException(status_code=500, detail="Prediction could not be made")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
