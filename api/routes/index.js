const router = require("express").Router();

const userRoute = require("./user.route");
const studentRoute = require("./student.route")

router.use("/users", userRoute);
router.use("/students", studentRoute)

module.exports = router;
