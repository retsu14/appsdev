const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find({});
  res.status(200).json(user);
});

// @desc   Register New User
// @route  POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add fields");
  }

  //check if user exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email already exists");
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password", hashedPassword);
  const user = User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  if (user) {
    res.status(201).json({
      message: "Registered Successfully",
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

// @desc   Login New User/Auth a user
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //find for user
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).json({ message: "Incorrect password or email" });
  }

  try {
    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      // Passwords match, generate token and send response
      const token = generateToken(user._id);

      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: token,
        role: user.role,
        message: "Login Successful",
      });
    } else {
      // Passwords do not match
      return res.status(401).json({ message: "Incorrect password or email" });
    }
  } catch (error) {
    // Handle bcrypt.compare error
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// @desc   Get User Data
// @route  GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(201).json({
    _id,
    name,
    email,
  });
});

//Generate JWt
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = {
  registerUser,
  loginUser,
  getMe,
  getUsers,
};
