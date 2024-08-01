import { User } from "../models/user.js";

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

const updateUserRole = async (req, res) => {
  const { userId, role } = req.body;

  const user = await User.findById(userId);

  if (user) {
    user.role = role;
    await user.save();
    res.json({ message: "User role updated successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export { getUsers, updateUserRole };
