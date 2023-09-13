const Users = require("../models/user.model");
const bcrypt = require("bcryptjs");

const getUser = (req, res) => {
  Users.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};

const getUsers = (req, res) => {
  Users.find(req.query)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};

const createUser = (req, res) => {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }
  Users.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};

const updateUser = (req, res) => {
  Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

const deleteUser = (req, res) => {
  Users.findByIdAndDelete(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

const updatePassword = async (req, res) => {
  const { currentP, newP } = req.body;
  const user = await Users.findById(req.params.id);
  const match = await bcrypt.compare(currentP, user.password);
  if (!match) {
    return res.status(401).json({ message: "El password no existe" });
  }
  user.password = bcrypt.hashSync(newP, 10);
  user.save();
  res.json({ message: "¡Password actualizado!" });
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  updatePassword,
};
