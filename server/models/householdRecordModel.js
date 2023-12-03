const mongoose = require("mongoose");

const householdRecordSchema = mongoose.Schema({
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],
  householdnumber: {
    type: Number,
    required: [true, "Please enter household number"],
    unique: true,
  },
  householdheadname: {
    type: String,
    required: [true, "Please enter household's head name"],
  },
  status: {
    type: String,
    required: [true, "Please enter status"],
  },
});

module.exports = mongoose.model("Household", householdRecordSchema);
