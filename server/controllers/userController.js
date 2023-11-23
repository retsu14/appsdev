const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc   Register New User
// @route  POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add fields");
  }

  //check if user exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password", hashedPassword);
  const user = User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
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

  // if (user && bcrypt.compare(password, user.password)) {
  //   const token = generateToken(user._id);
  //   res
  //     .cookie("token", token, {
  //       withCredentials: true,
  //       httpOnly: false,
  //     })
  //     .json({
  //       _id: user.id,
  //       name: user.name,
  //       email: user.email,
  //     });
  // } else {
  //   res.status(400);
  //   throw new Error("Invalid credentials");
  // }
  try {
    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      // Passwords match, generate token and send response
      const token = generateToken(user._id);
      // return res
      //   .cookie("token", token, {
      //     withCredentials: true,
      //     httpOnly: false,
      //     secure: process.env.NODE_ENV === "production",
      //   })
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: token,
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

  // res.cookie("jwt", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV !== "development",
  //   sameSite: "strict",
  //   maxAge: 30 * 24 * 60 * 60 * 1000,
  // });
};
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
