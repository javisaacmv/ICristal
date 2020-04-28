const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  title: {
    type: String,
    required: [true, "title field is required"],
  },
  description: {
    type: String,
    required: [true, "description field is required"],
  },
  deadline: {
    type: Date,
    required: [true, "deadline field is required"],
  },
  userId: {
    type: String,
    required: [true, "userId field is required"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  emails: {
    type: [String],
  },
  lastSend: {
    type: Date,
  },
});

const Notification = mongoose.model("notification", NotificationSchema);

module.exports = Notification;
