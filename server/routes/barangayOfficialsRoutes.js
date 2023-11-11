const express = require("express");
const {
  getBarangayOfficials,
  setBarangayOfficials,
  updateBarangayOfficials,
  deleteBarangayOfficials,
} = require("../controllers/barangayOfficialsController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router
  .route("/")
  .get(protect, getBarangayOfficials)
  .post(protect, setBarangayOfficials);
router
  .route("/:id")
  .put(protect, updateBarangayOfficials)
  .delete(protect, deleteBarangayOfficials);

module.exports = router;
