const Announcement = require("../models/announementModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

//create
const createAnnouncement = asyncHandler(async (req, res) => {
  const { title, date, description } = req.body;

  if (!title || !date || !description) {
    res.status(400);
    throw new Error("Fill out all fields");
  }

  const users = await User.find({
    name: { $nin: ["IBABAO", "DAPITAN"] },
  });

  if (!users || users.length === 0) {
    res.status(400).json({ error: "No eligible users found" });
    return;
  }

  const announcements = await Promise.all(
    users.map(async (user) => {
      const announcement = await Announcement.create({
        user: [user._id, req.user.id],
        title,
        date,
        description,
      });
      return announcement;
    })
  );

  res.status(201).json(announcements);
});

//get
const getAnnouncements = asyncHandler(async (req, res) => {
  const userAnnouncements = await Announcement.find({ user: req.user.id });

  const uniqueTitles = Array.from(
    new Set(userAnnouncements.map((announcement) => announcement.title))
  );

  const uniqueAnnouncements = uniqueTitles
    .map((title) => {
      // Find the first announcement with the matching title
      const matchingAnnouncement = userAnnouncements.find(
        (announcement) => announcement.title === title
      );

      return matchingAnnouncement;
    })
    .filter(Boolean); // Filter out any undefined values

  res.status(200).json(uniqueAnnouncements);
});

//delete

const deleteAnnouncement = asyncHandler(async (req, res) => {
  const announcement = await Announcement.findById(req.params.id);
  if (!announcement) {
    res.status(404);
    throw new Error("Not found");
  }

  await announcement.deleteOne();
  res.status(200).json({ id: req.params.id });
});

//update

const updateAnnouncement = asyncHandler(async (req, res) => {
  const announcement = await Announcement.findById(req.params.id);

  if (!announcement) {
    res.status(404);
    throw new Error("Not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (announcement.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedAnnouncement = await Announcement.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedAnnouncement);
});

module.exports = {
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
  updateAnnouncement,
};
