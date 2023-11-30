const mongoose = require("mongoose");

const skSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  fname: {
    type: String,
    required: [true, "Enter first name"],
  },
  lname: {
    type: String,
    required: [true, "Enter last name"],
  },
  isActive: {
    type: String,
    required: [true, "Enter status"],
  },
  term: {
    type: Date,
    required: [true, "Enter term of office"],
  },
  position: {
    type: String,
    required: [true, "Enter position"],
  },
  age: {
    type: Number,
    required: [true, "Enter age"],
  },
  gender: {
    type: String,
    required: [true, "Enter gender"],
  },
  birthday: {
    type: Date,
    required: [true, "Enter birthday"],
  },
  phonenumber: {
    type: Number,
    required: [true, "Enter phone number"],
  },
  birthplace: {
    type: String,
    required: [true, "Enter birthplace"],
  },
  email: {
    type: String,
    required: [true, "Enter email"],
  },
  purok: {
    type: String,
    required: [true, "Enter purok no."],
  },
});

module.exports = mongoose.model("SKMembers", skSchema);
