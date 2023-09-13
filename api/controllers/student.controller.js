const Students = require("../models/student.model");

const getStudents = (req, res) => {
  Students.find()
    .then((stds) => res.json(stds))
    .catch((err) => res.json(err));
};

const getStud = (req, res) => {
  Students.findById(req.params.id)
    .populate("classes")
    .then((stud) => res.json(stud))
    .catch((err) => res.json(err));
};

const createStud = (req, res) => {
  Students.create(req.body)
    .then((stud) => res.json(stud))
    .catch((err) => res.json(err));
};

const updateStud = (req, res) => {
  Students.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((stud) => res.json(stud))
    .catch((err) => res.json(err));
};

const deleteStud = (req, res) => {
  Students.findByIdAndDelete(req.params.id)
    .then((stud) => res.json(stud))
    .catch((err) => res.json(err));
};

module.exports = {
  getStud,
  getStudents,
  createStud,
  updateStud,
  deleteStud,
};
