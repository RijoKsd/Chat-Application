import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ username }); // check if user exists

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // avatar api
    // https://avatar-placeholder.iran.liara.run/
    const menProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const womenProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? menProfilePic : womenProfilePic,
    });

    // generate jwt token
     generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    return res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      fullName: newUser.fullName,
      profilePic: newUser.profilePic,
    });
  } catch (err) {
    console.error("Error in signup controller", err.message);
    return res.status(500).json({ error: err.message });
  }
};
export const login = async (req, res) => {
  res.send("Login Route");
};
export const logout = async (req, res) => {
  res.send("logout Route");
};
