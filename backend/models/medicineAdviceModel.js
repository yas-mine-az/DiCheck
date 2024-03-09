const mongoose = require('mongoose');

const MedicineAdviceSchema = new mongoose.Schema({
  prediction_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Prediction',
    required: true,
  },
  medicine_name: {
    type: [String],
    required: true,
  },
  medicine_desc: {
    type: [String],
    required: true,
  },
  medicine_date: {
    type: Date,
    default: () => Date.now(),
    required: true,
  }
});

const MedicineAdvice = mongoose.model('Medicine', MedicineAdviceSchema);

module.exports = MedicineAdvice;