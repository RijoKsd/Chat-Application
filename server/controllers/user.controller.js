import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({_id:{$ne: loggedInUserId}},{password:0});
    return res.status(200).json(filteredUsers);
  } catch (err) {
    console.error("Error in getUsersForSidebar", err.message);
    return res.status(500).json({ error: err.message });
  }
};
