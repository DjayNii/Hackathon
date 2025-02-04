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

module.exports = router;
