const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema({
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    requierd: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Announcement", announcementSchema);
