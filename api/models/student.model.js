const mongoose = require("mongoose");
require("mongoose-type-email");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El alumno debe tener nombre"],
  },
  address: {
    type: String,
    required: [true, "Es necesario saber la dirección del alumno"],
  },
  father: {
    name: {
      type: String,
      required: [true, "Debe tener nombre"],
    },
    phone: {
      type: String,
      required: [true, "Debe tener un teléfono para contactar"],
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      //unique: [true, "Este email ya está registrado"],
    },
  },
  mother: {
    name: {
      type: String,
      required: [true, "Debe tener nombre"],
    },
    phone: {
      type: String,
      required: [true, "Debe tener un teléfono para contactar"],
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      //unique: [true, "Este email ya está registrado"],
    },
  },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
    },
  ],
});

const studentModel = mongoose.model("student", studentSchema);
module.exports = studentModel;
