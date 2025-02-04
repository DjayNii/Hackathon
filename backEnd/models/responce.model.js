const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  form: { type: mongoose.Schema.Types.ObjectId, ref: "Form", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
      response: { type: String, required: true }, // User's answer
    },
  ],
  submittedAt: { type: Date, default: Date.now },
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
