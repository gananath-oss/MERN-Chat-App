const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Decode token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user by id
      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) {
        res.status(404);
        throw new Error("User not found");
      }

      next();
    } catch (error) {
      console.error("Error during authorization:", error.message);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token provided");
    }
  }
});

module.exports = { protect };
