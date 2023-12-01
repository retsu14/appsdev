const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getResidents,
  createResident,
} = require("../controllers/residentController");

router.route("/").post(protect, createResident).get(protect, getResidents);

module.exports = router;
