const isUserAuthorized = (req, res, next) => {
  if (req.user.role === "user" && req.params.id !== req.user._id.toString()) {
    res.status(403).json({ message: "Permission denied" });
  } else {
    next();
  }
};

module.exports = { isUserAuthorized };
