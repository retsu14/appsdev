const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Resident = require("../models/residentModel");

// @desc   CREATE Resident
// @route  CREATE /api/residents
// @access Private
const createResident = asyncHandler(async (req, res) => {
  const { barangayname, household } = req.body;

  const user = await User.findOne({ name: barangayname });

  if (!barangayname || !household) {
    res.status(400);
    throw new Error("Fill out all the fields");
  }

  if (!user) {
    res.status(400);
    throw new Error("No Barangay Name Registered");
  }

  const existingResident = await Resident.findOne({ user: user._id });
  if (existingResident) {
    res.status(400);
    throw new Error("Resident already exists for this user");
  }

  const resident = await Resident.create({
    user: user._id,
    barangayname,
    household,
  });

  if (resident) {
    res.status(201).json(resident);
  }
});

// @desc   Get resident
// @route  GET /api/resident
// @access Private
const getResidents = asyncHandler(async (req, res) => {
  const resident = await Resident.find({ user: req.user.id });
  res.status(200).json(resident);
});

module.exports = {
  createResident,
  getResidents,
};
