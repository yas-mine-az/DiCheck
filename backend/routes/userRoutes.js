const express = require('express');
const {findAllUser, createUser, deleteUserById, updateUserById, loginUser} = require("../controllers/userController");

const router = express.Router();

// API LOGIN
router.post("/login", loginUser);

// API GET ALL USER
router.get("/", findAllUser);

// API CREATE USER
router.post("/", createUser);

// API DELETE USER BY ID
router.delete("/:id", deleteUserById);

// API UPDATE USER BY ID
router.put("/:id", updateUserById);

module.exports = router;