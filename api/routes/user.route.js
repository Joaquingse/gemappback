const router = require("express").Router();
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  updatePassword,
} = require("../controllers/user.controller");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/new", createUser);
router.post("/:id", updatePassword);
router.put("/update/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
