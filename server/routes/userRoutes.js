const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
  getUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/", protect, getUsers);
router.post("/", protect, registerUser);

module.exports = router;
