const mongoose = require("mongoose");

const residentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    barangayname: {
      type: String,
      required: [true, "Please input barangay name"],
    },
    household: {
      type: String,
      required: [true, "Please input your household number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resident", residentSchema);
