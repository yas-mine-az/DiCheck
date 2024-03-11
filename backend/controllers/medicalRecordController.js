const Record = require("../models/medicalRecordModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

// Get Prediction by UserId
const getRecordsByUserId = async (req, res) => {
    const { user_id } = req.params;
    try {
        const recordList = await Record.find({ user_id });
        if (recordList.length === 0) {
            return res.status(404).json({ error: "Tidak ada medical record yang ditemukan untuk user tersebut" });
        }
        res.status(200).json(recordList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create Prediction
const createRecord = async (req, res) => {
    const {user_id, symptomps, disease, treatment_advice, medicine_name, medicine_desc, record_date} = req.body;
    try {
        const user = await User.findById(user_id);

        if (!user) {
        return res.status(404).json({ error: "User tidak ditemukan" });
        }

        const record = await Record.create({
            user_id, 
            symptomps, 
            disease, 
            treatment_advice, 
            medicine_name, 
            medicine_desc, 
            record_date,
        });
        
        res
            .status(200)
            .json({ message: "Medical record berhasil dibuat", Record: record });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {getRecordsByUserId, createRecord};