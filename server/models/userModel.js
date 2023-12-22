const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your full name"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
    role: {
      type: String,
      enum: ["user", "admin", "resident"],
      default: "resident",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
