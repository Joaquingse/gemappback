const router = require("express").Router();

const {
  getStud,
  getStudents,
  createStud,
  updateStud,
  deleteStud,
} = require("../controllers/student.controller");

router.get("/", getStudents);
router.get("/:id", getStud);
router.post("/new", createStud);
router.put("/update/:id", updateStud);
router.delete("/:id", deleteStud);

module.exports = router;
