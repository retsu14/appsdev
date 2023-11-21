const express = require("express");
const {
  getBarangayOfficials,
  setBarangayOfficials,
  updateBarangayOfficials,
  deleteBarangayOfficials,
  createBarangayOfficial,
  getAllBarangayOfficials,
  updateBarangayOfficial,
  deleteBarangayOfficial,
} = require("../controllers/barangayOfficialsController");
const { protect, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

// For regular users
router
  .route("/")
  .get(protect, getBarangayOfficials) // Retrieve only their own records
  .post(protect, setBarangayOfficials); // Create new record

router
  .route("/:id")
  .put(protect, updateBarangayOfficials) // Update their own record
  .delete(protect, deleteBarangayOfficials); // Delete their own record

// For admin
router
  .route("/admin")
  .post(protect, isAdmin, createBarangayOfficial) // Create new record for admin
  .get(protect, isAdmin, getAllBarangayOfficials);
router
  .route("/admin/:id") // Retrieve all records for admin
  .put(protect, isAdmin, updateBarangayOfficial) // Update any record for admin
  .delete(protect, isAdmin, deleteBarangayOfficial); // Delete any record for admin

module.exports = router;
