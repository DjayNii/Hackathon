const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  questions: [
    {
      question: { type: String, required: true },
      questionType: {
        type: String,
        enum: ["multipleChoice", "shortAnswer", "dropdown", "checkboxes"],
        required: true,
      },
      options: [{ type: String }], // Only used if type is MCQ or dropdown
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
