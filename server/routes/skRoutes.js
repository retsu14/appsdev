const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getSkmembers,
  setSkmembers,
  updateSkmembers,
  deleteSkmembers,
} = require("../controllers/skController");
const router = express.Router();

router.route("/").get(protect, getSkmembers).post(protect, setSkmembers);
router
  .route("/:id")
  .put(protect, updateSkmembers)
  .delete(protect, deleteSkmembers);

module.exports = router;
