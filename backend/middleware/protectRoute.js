import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // Check if token exists
    if (!token) {
      return res.status(401).json({ error: "Not authorized" });
    }
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Check if token is valid
    if (!decoded) {
      return res.status(401).json({ error: "Not authorized" });
    }
    // Fetch user details
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Attach user to request object
    req.user = user;
    next();
  } catch (err) {
    console.error("Error in protectRoute middleware", err.message);
    return res.status(500).json({ error: err.message });
  }
};


export default protectRoute;
