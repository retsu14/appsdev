const mongoose = require("mongoose");

const residentSchema = mongoose.Schema(
  {
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    nationalid: {
      type: Number,
      required: [true, "Please enter your national id number"],
    },
    firstname: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    middlename: {
      type: String,
      required: [true, "Please enter your middle name"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter your lastname"],
    },
    alias: {
      type: String,
      required: [true, "Please enter your alias"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    birthplace: {
      type: String,
      required: [true, "Please enter your birthplace"],
    },
    birthday: {
      type: Date,
      required: [true, "Please enter your birthday"],
    },
    age: {
      type: Number,
      required: [true, "Please enter your birthplace"],
    },
    civilstatus: {
      type: String,
      required: [true, "Please enter civil status"],
    },
    gender: {
      type: String,
      required: [true, "Please enter gender"],
    },
    status: {
      type: String,
      required: [true, "Please enter your status"],
    },
    singleparent: {
      type: String,
      required: [true, "Please enter if you are a single parent"],
    },
    seniorcitizen: {
      type: String,
      required: [true, "Please enter if you are a senior citizen"],
    },
    pwd: {
      type: String,
      required: [true, "Please enter if you are a PWD"],
    },
    religion: {
      type: String,
      required: [true, "Please enter your faith"],
    },
    citizenship: {
      type: String,
      required: [true, "Please enter your citizenship"],
    },
    contact: {
      type: Number,
      required: [true, "Please enter your contact number"],
    },
    occupation: {
      type: String,
      required: [true, "Please enter your occupation"],
    },
    relation: {
      type: String,
      required: [true, "Please enter your relation to the head"],
    },
    registeredvoter: {
      type: String,
      required: [true, "Please enter if you are a registered voter"],
    },
    purok: {
      type: Number,
      required: [true, "Please enter your purok"],
    },
    pet: {
      type: Number,
      required: [true, "Please enter how many your pets are"],
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
