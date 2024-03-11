const express = require('express');
const {getRecordsByUserId, createRecord} = require("../controllers/medicalRecordController");

const router = express.Router();

// API GET RECORDS BY USER ID
router.get("/:id", getRecordsByUserId);

// API CREATE RECORD
router.post("/", createRecord);

module.exports = router;