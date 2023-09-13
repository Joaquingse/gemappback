const mongoose = require("mongoose");
require("mongoose-type-email");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Los "],
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: [true, "Email required"],
    unique: [true, "Este email ya está registrado"],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "teacher"],
    default: "teacher",
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
