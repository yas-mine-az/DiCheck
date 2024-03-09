const mongoose = require('mongoose');

const TreatmentAdviceSchema = new mongoose.Schema({
  prediction_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Prediction',
    required: true,
  },
  treatment_advice: {
    type: String,
    required: true,
  },
  treatment_advice_date: {
    type: Date,
    default: () => Date.now(),
    required: true,
  }
});

const TreatmentAdvice = mongoose.model('Treatment', TreatmentAdviceSchema);

module.exports = TreatmentAdvice;