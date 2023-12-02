const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Resident = require("../models/residentModel");
const Household = require("../models/householdRecordModel");

// @desc   CREATE Resident
// @route  CREATE /api/residents
// @access Private
const createResident = asyncHandler(async (req, res) => {
  const {
    barangayname,
    nationalid,
    firstname,
    middlename,
    lastname,
    alias,
    email,
    birthplace,
    birthday,
    age,
    civilstatus,
    gender,
    status,
    singleparent,
    seniorcitizen,
    pwd,
    religion,
    citizenship,
    contact,
    occupation,
    relation,
    registeredvoter,
    purok,
    pet,
    household,
  } = req.body;

  const user = await User.findOne({ name: barangayname });
  const hnumber = await Household.findOne({ householdnumber: household });

  if (
    !barangayname ||
    !nationalid ||
    !firstname ||
    !middlename ||
    !lastname ||
    !alias ||
    !email ||
    !birthplace ||
    !birthday ||
    !age ||
    !civilstatus ||
    !gender ||
    !status ||
    !singleparent ||
    !seniorcitizen ||
    !pwd ||
    !religion ||
    !citizenship ||
    !contact ||
    !occupation ||
    !relation ||
    !registeredvoter ||
    !purok ||
    !pet ||
    !household
  ) {
    res.status(400);
    throw new Error("Fill out all the fields");
  }

  if (!user) {
    res.status(400);
    throw new Error("No Barangay Name Registered");
  }
  if (!hnumber) {
    res.status(404);
    throw new Error("No Household Number Registered");
  }

  const resident = await Resident.create({
    user: [user._id, req.user.id],
    nationalid,
    firstname,
    middlename,
    lastname,
    alias,
    email,
    birthplace,
    birthday,
    age,
    civilstatus,
    gender,
    status,
    singleparent,
    seniorcitizen,
    pwd,
    religion,
    citizenship,
    contact,
    occupation,
    relation,
    registeredvoter,
    purok,
    pet,
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
  const resident = await Resident.find({ user: req.user._id });
  res.status(200).json(resident);
});

// @desc   update Household Record
// @route  UPDATE /api/householdrecords/:id
// @access Private
const updateResident = asyncHandler(async (req, res) => {
  const resident = await Resident.findById(req.params.id);

  if (!resident) {
    res.status(404);
    throw new Error("Not found");
  }
  const user = await User.findById(req.user.id);
  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //make sure only the log in user matches the household user
  if (!resident.user.map((u) => u.toString()).includes(user.id)) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedResident = await Resident.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedResident);
});

// @desc   delete Household Record
// @route  DELETE /api/householdrecords/:id
// @access Private
const deleteResident = asyncHandler(async (req, res) => {
  const resident = await Resident.findById(req.params.id);

  if (!resident) {
    res.status(404);
    throw new Error("Not found");
  }
  const user = await User.findById(req.user.id);
  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //make sure only the log in user matches the household user
  if (!resident.user.map((u) => u.toString()).includes(user.id)) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await resident.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  createResident,
  getResidents,
  updateResident,
  deleteResident,
};
