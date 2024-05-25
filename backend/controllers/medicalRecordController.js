const Record = require("../models/medicalRecordModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

// Get Prediction by UserId
const getRecordsByUserId = async (req, res) => {
    const { user_id } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;

    try {
        const recordList = await Record.find({ user_id })
            .sort({ record_date: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        const totalRecords = await Record.countDocuments({ user_id });

        if (recordList.length === 0) {
            return res.status(404).json({ error: "Tidak ada medical record yang ditemukan untuk user tersebut" });
        }

        res.status(200).json({
            totalPages: Math.ceil(totalRecords / limit),
            currentPage: page,
            records: recordList
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getRecordsByRecordId = async (req, res) => {
    const { _id } = req.params;
    try {
        const recordList = await Record.find({ _id });
        if (recordList.length === 0) {
            return res.status(404).json({ error: "Tidak ada medical record yang ditemukan" });
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

const getTotalRecordsByUserId = async (req, res) => {
    const { user_id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ error: 'Invalid user_id' });
    }
    try {
        const recordCount = await Record.countDocuments({ user_id });
        res.status(200).json({ totalRecords: recordCount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getTotalRecordsTodayByUserId = async (req, res) => {
    const { user_id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ error: 'Invalid user_id' });
    }
    try {
        const start = new Date();
        start.setHours(0,0,0,0);

        const end = new Date();
        end.setHours(23,59,59,999);

        const recordCount = await Record.countDocuments({
            user_id,
            record_date: {
                $gte: start,
                $lt: end
            }
        });
        res.status(200).json({ totalRecords: recordCount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getLatestRecordTime = async (req, res) => {
    try {
        const record = await Record.findOne().sort({record_date: -1});
        if (!record) {
            return res.status(404).json({ error: "No records found" });
        }
        res.status(200).json({ latestRecordTime: record.record_date });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {getRecordsByUserId, createRecord, getTotalRecordsByUserId, getTotalRecordsTodayByUserId, getLatestRecordTime, getRecordsByRecordId};