const router = require("express").Router();

const userRoute = require("./user.route");
const studentRoute = require("./student.route");
const classRoute = require("./classes.route");

router.use("/users", userRoute);
router.use("/students", studentRoute);
router.use("/classes", classRoute);

module.exports = router;
