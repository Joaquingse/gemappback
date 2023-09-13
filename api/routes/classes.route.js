const router = require("express").Router();

const {
  getClas,
  getClasses,
  addClas,
  updateClas,
  deleteClas,
} = require("../controllers/class.controller");

router.get("/", getClasses);
router.get("/:id", getClas);
router.post("/new", addClas);
router.put("/update/:id", updateClas);
router.delete("/:id", deleteClas);

module.exports = router;
