const asyncHandler = require("express-async-handler");
const Household = require("../models/householdRecordModel");
const User = require("../models/userModel");

// @desc   Get Household Record
// @route  GET /api/householdrecords
// @access Private
const getHousehold = asyncHandler(async (req, res) => {
  const household = await Household.find({ user: req.user.id });
  res.status(200).json(household);
});

// @desc   set Household Record
// @route  GET /api/householdrecords
// @access Private
const setHousehold = asyncHandler(async (req, res) => {
  const { barangayname, householdnumber, householdheadname, status } = req.body;

  if (!barangayname || !householdnumber || !householdheadname || !status) {
    res.status(400);
    throw new Error("Error");
  }

  const user = await User.findOne({ name: barangayname });

  const household = await Household.create({
    user: [user._id, req.user.id],
    barangayname,
    householdnumber,
    householdheadname,
    status,
  });

  res.status(200).json(household);
});

// @desc   update Household Record
// @route  UPDATE /api/householdrecords/:id
// @access Private
const updateHousehold = asyncHandler(async (req, res) => {
  const household = await Household.findById(req.params.id);

  if (!household) {
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
  if (!household.user.map((u) => u.toString()).includes(user.id)) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedHousehold = await Household.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedHousehold);
});

// @desc   delete Household Record
// @route  DELETE /api/householdrecords/:id
// @access Private
const deleteHousehold = asyncHandler(async (req, res) => {
  const household = await Household.findById(req.params.id);

  if (!household) {
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
  if (!household.user.map((u) => u.toString()).includes(user.id)) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await household.deleteOne();
  res.status(200).json({ id: req.params.id });
});

// @desc   Get Household Record by Household Number
// @route  GET /api/householdrecords/search/:householdnumber
// @access Private
const getHouseholdByNumber = asyncHandler(async (req, res) => {
  const { householdnumber } = req.params;

  if (!householdnumber) {
    res.status(400);
    throw new Error("Missing household number");
  }

  const household = await Household.findOne({
    householdnumber,
  });

  if (!household) {
    res.status(404);
    throw new Error("Household not found");
  }

  res.status(200).json(household);
});

module.exports = {
  getHousehold,
  setHousehold,
  updateHousehold,
  deleteHousehold,
  getHouseholdByNumber,
};
