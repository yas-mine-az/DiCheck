const express = require('express');
const {findAllUser, createUser, deleteUserById, updateUserById, loginUser, getUserById, checkUsername} = require("../controllers/userController");

const router = express.Router();

// API LOGIN
router.post("/login", loginUser);

// API CHECK USERNAME
router.post("/check_username", checkUsername);

// API GET ALL USER
router.get("/", findAllUser);

// API GET ALL USER
router.get("/one/:id", getUserById);

// API CREATE USER
router.post("/", createUser);

// API DELETE USER BY ID
router.delete("/:id", deleteUserById);

// API UPDATE USER BY ID
router.put("/:id", updateUserById);

module.exports = router;