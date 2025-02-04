const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  questions: [
    {
      questionText: { type: String, required: true },
      type: {
        type: String,
        enum: ["mcq", "short_text", "dropdown", "long_text"],
        required: true,
      },
      options: [{ type: String }], // Only used if type is MCQ or dropdown
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
