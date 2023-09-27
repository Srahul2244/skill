const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  pass: String,
});

const userModel = mongoose.model("skill", userSchema);

module.exports = { userModel };
