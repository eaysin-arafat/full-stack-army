const router = require("express").Router();
const { loginController, registerController } = require("../controller/auth");

router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
