const User = require("../models/userModel");
const mongoose = require("mongoose");

// Find All User
const findAllUser = async (req, res) => {
    try {
      const userList = await User.find();
      res.status(200).json(userList);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
};

// Create/Register User
const createUser = async (req, res) => {
    const {first_name, last_name, username, email, password, age, gender} = req.body;
    try {
        const checkUsername = await User.findOne({ username });
        if (checkUsername) {
        return res.status(400).json({ error: "Username tidak tersedia" });
        }
        const user = await User.create({
        first_name,
        last_name,
        username,
        email,
        password,
        age,
        gender,
        });
        
        res
            .status(200)
            .json({ message: "User berhasil dibuat", User: user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete User by Id
const deleteUserById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Tidak ada user dengan ID tersebut" });
    }
  
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(400).json({ error: "Tidak ada user dengan ID tersebut" });
      }
      res.status(200).json({ message: "User berhasil dihapus" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
// Update User by id
const updateUserById = async (req, res) => {
    const { id } = req.params;
    const {first_name, last_name, username, email, password, age, gender} = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
        id,
        {
            first_name,
            last_name,
            username,
            email,
            password,
            age,
            gender,
        },
        { new: true }
        );

        if (!updatedUser) {
        return res.status(404).json({ error: "User tidak ditemukan" });
        }

        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    findAllUser,
    createUser,
    deleteUserById,
    updateUserById
};