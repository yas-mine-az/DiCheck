const mongoose = require('mongoose');

const MedicalRecordSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  symptomps: {
    type: [String],
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  treatment_advice: {
    type: [String],
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
  record_date: {
    type: Date,
    default: Date.now,
    required: true,
  }
});

const MedicalRecord = mongoose.model('MedicalRecord', MedicalRecordSchema);

module.exports = MedicalRecord;