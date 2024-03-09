const mongoose = require('mongoose');

const PredictionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  prediction_result: {
    type: String,
    required: true
  },
  prediction_date: {
    type: Date,
    default: () => Date.now(),
    required: true,
  }
});

const Prediction = mongoose.model('Prediction', PredictionSchema);

module.exports = Prediction;