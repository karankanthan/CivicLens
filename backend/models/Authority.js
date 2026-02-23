const mongoose = require("mongoose");

const authoritySchema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("Authority", authoritySchema);