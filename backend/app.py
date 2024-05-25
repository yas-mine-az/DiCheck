from flask import Flask, request, jsonify
import joblib
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier

app = Flask(__name__)

# Load the pre-trained models
rnd_forest = joblib.load("random_forest.joblib")
tree = DecisionTreeClassifier(criterion='gini', random_state=42, max_depth=13)

@app.route('/train', methods=['GET'])
def train_model():
    # Include your training logic here
    return "Model trained successfully!"

@app.route('/predict', methods=['POST'])
def predict_disease():
    data = request.json  # Assuming you're sending symptoms as JSON
    symptoms = data['symptoms']  # Extract symptoms from JSON
    # Preprocess symptoms (similar to what you did in predd function)
    pred = rnd_forest.predict([symptoms])  # Make prediction
    return jsonify({'predicted_disease': pred.tolist()})

@app.route('/decision-tree-predict', methods=['POST'])
def decision_tree_predict():
    data = request.json  # Assuming you're sending symptoms as JSON
    symptoms = data['symptoms']  # Extract symptoms from JSON
    # Preprocess symptoms (similar to what you did in predd function)
    pred = tree.predict([symptoms])  # Make prediction
    return jsonify({'predicted_disease': pred.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
