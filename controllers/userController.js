import { User } from "../models/user.js";

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

// const updateUserRole = async (req, res) => {
//   const { userId, role } = req.body;

//   const user = await User.findById(userId);

//   if (user) {
//     user.role = role;
//     await user.save();
//     res.json({ message: "User role updated successfully" });
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// };
const updateUserRole = async (req, res) => {
  const { role } = req.body; // Extract role from the request body
  const { userId } = req.params; // Extract userId from the URL parameters

  try {
    const user = await User.findById(userId); // Find user by ID

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.role = role; // Update the user's role
    await user.save(); // Save the updated user

    res.json({ message: "User role updated successfully" });
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();
    res.json({ message: "User removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden: Insufficient permissions" });
    }
  };
};

export { getUsers, updateUserRole, deleteUser, checkRole };
