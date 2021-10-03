const express = require("express");
const { signUp, addUser } = require("../controllers/authController");
const router = express.Router();

router.route("/addUser").get(addUser);

router.route("/signup").post(signUp);

module.exports = router;
