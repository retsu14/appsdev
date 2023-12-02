const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getResidents,
  createResident,
  updateResident,
  deleteResident,
} = require("../controllers/residentController");

router.route("/").post(protect, createResident).get(protect, getResidents);
router
  .route("/:id")
  .put(protect, updateResident)
  .delete(protect, deleteResident);
module.exports = router;
