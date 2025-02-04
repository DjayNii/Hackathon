const express = require("express");
const usermodel = require("../models/user.model");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await usermodel.create({
      name,
      email,
      password: hashPassword,
    });
    console.log("user Found");
    res.json(user);
  } catch (err) {
    console.error("Error creating user:", err.message);
    res
      .status(500)
      .json({ error: "Error creating user", details: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await usermodel.findOne({
      name,
    });

    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: " username or password is incorrect",
      });
    }

    const token = jwt.sign(
      {
        userID: user._id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token).status(200).json({
      message: "Login successful",
      token, // Optional: for debugging or front-end usage
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
