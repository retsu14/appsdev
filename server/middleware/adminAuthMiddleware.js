const isAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Permission denied" });
  }
};

module.exports = { isAdmin };
