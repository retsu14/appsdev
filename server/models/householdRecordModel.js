const mongoose = require("mongoose");

const householdRecordSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  householdnumber: {
    type: Number,
    required: [true, "Please enter household number"],
  },
  householdheadname: {
    type: String,
    required: [true, "Please enter household's head name"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Household", householdRecordSchema);
