const User = require("../models/userModel");

const addUser = (req, res) => {
  res.render("addUser");
};

const signUp = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    res.status(200).json({
      status: "ok",
      message: "userCreated",
    });
  } catch (error) {
    console.log(err);
  }
};

module.exports = { signUp, addUser };
