const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "email field is required"]
  },
  name: {
    type: String,
    required: [true, "name field is required"]
  },
  password: {
    type: String,
    required: [true, "password field is required"]
  },
  avaliable: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
