const Eclasses = require("../models/class.model");

const getClasses = (req, res) => {
  Eclasses.find()
    .then((resp) => res.json(resp))
    .catch((err) => res.json(err));
};

const getClas = (req, res) => {
  Eclasses.findById(req.params.id)
    .populate("student")
    .then((resp) => res.json(resp))
    .catch((err) => res.json(err));
};

const addClas = (req, res) => {
  Eclasses.create(req.body)
    .then((resp) => res.json(resp))
    .catch((err) => res.json(err));
};

const updateClas = (req, res) => {
  Eclasses.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((resp) => res.json(resp))
    .catch((err) => res.json(err));
};

const deleteClas = (req, res) => {
  Eclasses.findByIdAndDelete(req.params.id)
    .then((resp) => res.json(resp))
    .catch((err) => res.json(err));
};

module.exports = {
  getClas,
  getClasses,
  addClas,
  updateClas,
  deleteClas,
};
