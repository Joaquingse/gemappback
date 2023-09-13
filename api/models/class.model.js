const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
    required: [true, "Debe tener un estudiante para la clase"],
  },
  date: {
    type: Date,
    required: [true, "Debe tener una fecha para la clase"],
  },
  subject: {
    type: String,
    required: [true, "Debe indicar que lección dará"],
  },
  paid: {
    type: Boolean,
    default: false,
  },
  comments: {
    type: String,
    default: "",
  },
});

const classModel = mongoose.model("class", classSchema);
module.exports = classModel;
