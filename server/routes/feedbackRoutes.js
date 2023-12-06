const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getFeedbacks,
  createFeedback,
  deleteFeedback,
} = require("../controllers/feedbackController");
const router = express.Router();

router.route("/").get(protect, getFeedbacks).post(protect, createFeedback);
router.route("/:id").delete(protect, deleteFeedback);

module.exports = router;
