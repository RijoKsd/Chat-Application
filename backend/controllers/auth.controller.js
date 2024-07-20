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
      message: "User created successfully",
    });
  } catch (err) {
    console.error("Error in signup controller", err.message);
    return res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Check if all fields are provided
    if (!username || !password) {
      // If not, return a 400 error with a message
      return res.status(400).json({ error: "All fields are required" });
    }

    // Find a user with the given username
    const user = await User.findOne({ username });

    // If no user is found, return a 400 error with a message
    if (!user) {
      return res.status(400).json({ error: "Invalid Username" });
    }

    // Compare the provided password with the stored password
    const isMatch = await bcrypt.compare(password, user.password);

    // If the passwords do not match, return a 400 error with a message
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    // Generate a JWT token and set a cookie with the user's ID
    generateTokenAndSetCookie(user._id, res);

    // Return the user's details with a 200 status
    return res.status(200).json({
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      profilePic: user.profilePic,
      message: "Logged in successfully",
    });
  } catch (err) {
    // If an error occurs, log the error and return a 500 error with the error message
    console.error("Error in login controller", err.message);
    return res.status(500).json({ error: err.message });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log("Error in logout controller", err.message);
    return res.status(500).json({ error: err.message });
  }
};
