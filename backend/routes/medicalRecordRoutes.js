const express = require('express');
const {getRecordsByUserId, createRecord, getTotalRecordsByUserId, getTotalRecordsTodayByUserId, getLatestRecordTime, getRecordsByRecordId} = require("../controllers/medicalRecordController");
const { get } = require('mongoose');

const router = express.Router();

// API GET RECORDS BY USER ID
router.get("/:user_id", getRecordsByUserId);

// API GET RECORDS BY RECORD ID
router.get("/record/:_id", getRecordsByRecordId);

// API CREATE RECORD
router.post("/", createRecord);

// API GET TOTAL RECORDS BY USER ID
router.get("/total/:user_id", getTotalRecordsByUserId);

// API GET TOTAL RECORDS TODAY BY USER ID
router.get("/total_today/:user_id", getTotalRecordsTodayByUserId);

// API GET LATEST RECORD TIME
router.get("/latest_record/:user_id", getLatestRecordTime);

module.exports = router;