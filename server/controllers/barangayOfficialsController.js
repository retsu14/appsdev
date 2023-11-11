const asyncHandler = require("express-async-handler");
const bOfficials = require("../models/barangayOfficialsModel");
const User = require("../models/userModel");

// @desc   Get BarangayOfficials
// @route  GET /api/barangayofficials
// @access Private
const getBarangayOfficials = asyncHandler(async (req, res) => {
  const officials = await bOfficials.find({ user: req.user.id });
  res.status(200).json(officials);
});

// @desc   set BarangayOfficlas
// @route  POST /api/barangayofficials
// @access Private
const setBarangayOfficials = asyncHandler(async (req, res) => {
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
  const official = await bOfficials.create({
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

// @desc   update BarangayOfficials
// @route  GET /api/barangayofficials/:id
// @access Private
const updateBarangayOfficials = asyncHandler(async (req, res) => {
  const official = await bOfficials.findById(req.params.id);

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
  const updatedOfficials = await bOfficials.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedOfficials);
});

// @desc   delete barangayofficials
// @route  delete /api/barangayofficials/:id
// @access Private
const deleteBarangayOfficials = asyncHandler(async (req, res) => {
  const official = await bOfficials.findById(req.params.id);
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
  getBarangayOfficials,
  setBarangayOfficials,
  updateBarangayOfficials,
  deleteBarangayOfficials,
};
