const mongoose = require('mongoose');

const MedicalRecordSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  symptoms: {
    type: [String],
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  medications: {
    type: [String],
    required: true,
  },
  recommendations: {
    type: [String],
    required: true,
  },
  record_date: {
    type: Date,
    default: Date.now,
    required: true,
  }
});

const MedicalRecord = mongoose.model('MedicalRecord', MedicalRecordSchema);

module.exports = MedicalRecord;