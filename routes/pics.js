const express = require("express");
const router = express.Router();
const {
  getAllPics,
  addPic,
  getAPic,
  deletePic,
  addPicForm,
} = require("../controllers/pics");

router.route("/add").get(addPicForm);

router.route("/").get(getAllPics).post(addPic);
router.route("/:id").get(getAPic).delete(deletePic);

module.exports = router;
