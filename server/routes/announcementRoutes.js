const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getAnnouncements,
  createAnnouncement,
  deleteAnnouncement,
} = require("../controllers/announcementsController");
const router = express.Router();

router
  .route("/")
  .get(protect, getAnnouncements)
  .post(protect, createAnnouncement);
router.route("/:id").put(protect).delete(protect, deleteAnnouncement);

module.exports = router;
