const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getHousehold,
  setHousehold,
  updateHousehold,
  deleteHousehold,
  getHouseholdByNumber,
} = require("../controllers/householdRecordController");

router.route("/").get(protect, getHousehold).post(protect, setHousehold);
router
  .route("/:id")
  .put(protect, updateHousehold)
  .delete(protect, deleteHousehold);
router.route("/:householdnumber").get(protect, getHouseholdByNumber);

module.exports = router;
