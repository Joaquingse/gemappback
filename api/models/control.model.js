const mongoose = require("mongoose");

const controlSchema = new mongoose.Schema({
  paid: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"eclass"
    },
  ],
  pending: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"eclass"
    },
  ],
});

const controlModel = mongoose.model("control", controlSchema);
module.exports = controlModel;
