const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
    reuired: true,
  },
  password: {
    type: String,
    reuired: true,
  },
  data: {
    type: Date,
    reuired: true,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
