const asyncHandler = require("express-async-handler");
const SKMembers = require("../models/skModel");
const User = require("../models/userModel");

// @desc   Get Skmembers
// @route  GET /api/skmembers
// @access Private
const getSkmembers = asyncHandler(async (req, res) => {
  const officials = await SKMembers.find({ user: req.user.id });
  res.status(200).json(officials);
});

// @desc   set Skmembers
// @route  POST /api/skmembers
// @access Private
const setSkmembers = asyncHandler(async (req, res) => {
  const {
    fname,
    lname,
    isActive,
    term,
    position,
    age,
    gender,
    birthday,
    phonenumber,
    birthplace,
    email,
    purok,
  } = req.body;
  if (
    !fname ||
    !lname ||
    !isActive ||
    !term ||
    !position ||
    !age ||
    !gender ||
    !birthday ||
    !phonenumber ||
    !birthplace ||
    !email ||
    !purok
  ) {
    res.status(400);
    throw new Error("Error");
  }
  const official = await SKMembers.create({
    user: req.user.id,
    fname,
    lname,
    isActive,
    term,
    position,
    age,
    gender,
    birthday,
    phonenumber,
    birthplace,
    email,
    purok,
  });
  res.status(200).json(official);
});

// @desc   update Skmembers
// @route  GET /api/skmembers/:id
// @access Private
const updateSkmembers = asyncHandler(async (req, res) => {
  const official = await SKMembers.findById(req.params.id);

  if (!official) {
    res.status(400);
    throw new Error("Not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (official.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedOfficials = await SKMembers.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedOfficials);
});

// @desc   delete skmembers
// @route  delete /api/skmembers/:id
// @access Private
const deleteSkmembers = asyncHandler(async (req, res) => {
  const official = await SKMembers.findById(req.params.id);
  if (!official) {
    res.status(400);
    throw new Error("Not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  if (official.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await official.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  setSkmembers,
  getSkmembers,
  updateSkmembers,
  deleteSkmembers,
};
