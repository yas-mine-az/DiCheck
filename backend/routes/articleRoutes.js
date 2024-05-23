const express = require('express');
const {getArticleByTitle} = require("../controllers/articleController");

const router = express.Router();

// API GET RECORDS BY USER ID
router.get("/:title", getArticleByTitle);

module.exports = router;