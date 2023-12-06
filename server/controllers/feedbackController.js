const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Feedback = require("../models/feedbackModel");

const createFeedback = asyncHandler(async (req, res) => {
  const { barangayname, name, email, contact, feedback, message } = req.body;

  if (!barangayname || !name || !email || !feedback || !message) {
    res.status(401).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ name: barangayname });

  const feedback1 = await Feedback.create({
    user: [user._id, req.user.id],
    barangayname,
    name,
    email,
    contact,
    feedback,
    message,
  });

  res.status(201).json(feedback1);
});

const getFeedbacks = asyncHandler(async (req, res) => {
  const barangay = await Feedback.find({ user: req.user.id });
  res.status(200).json(barangay);
});

const deleteFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    res.status(404);
    throw new Error("Error");
  }

  const user = await User.findById(req.user.id);
  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //make sure only the log in user matches the household user
  if (!feedback.user.map((u) => u.toString()).includes(user.id)) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await feedback.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  createFeedback,
  getFeedbacks,
  deleteFeedback,
};
