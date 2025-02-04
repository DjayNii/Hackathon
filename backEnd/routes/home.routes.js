const express = require("express");
const router = express.Router();
const AuthMiddleWare = require("../middleWare/auth");
const formModel = require("../models/form.model");

router.get("/files", AuthMiddleWare, async (req, res) => {
  try {
    const forms = await formModel.find({
      createdBy: req.user._id,
    });

    res.json(forms);
  } catch (err) {
    console.error("Error finding forms:", err.message);
    res
      .status(500)
      .json({ error: "Error finding forms", details: err.message });
  }
});

router.post("/forms", AuthMiddleWare, async (req, res) => {
  try {
    const { title, questions } = req.body.formData;

    const newForm = new formModel({
      title,
      createdBy: req.user._id,
      questions,
    });

    await newForm.save();

    res
      .status(201)
      .json({ message: "Form created successfully", form: newForm });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
