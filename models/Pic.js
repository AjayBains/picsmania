const mongoose = require("mongoose");

const PicsSchema = new mongoose.Schema({
  // address: String,
  // name: String,
  // by: String,

  address: {
    type: String,
    required: [true, "provide a link for your fav pic"],
    trim: true,
  },
  name: {
    type: String,
    trim: true,
    maxlength: [60, "name can not be more than 40 characters"],
  },
  by: {
    type: String,
    trim: true,
    maxlength: [20, "author name couldnt be more than 20 characters"],
    default: "someone",
  },
});

module.exports = mongoose.model("Pic", PicsSchema);
