import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { inngest } from "../inngest/client.js";

export const signup = async (req, res) => {
  try {
    const { email, password, skills = [] } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "User already exists",
      });
    }
    const user = await User.create({ email, password: hashedPassword, skills });
    await inngest.send({ name: "user/signup", data: { email } });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
    );
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "Signup failed", message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
    );
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "Login failed", message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    const token = req.header.authorization.split(" ")[1];
    if (!token) return res.status(400).json({ error: "Unauthorized" });
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      res.json({ message: "Logout successful" });
    });
  } catch (error) {
    res.status(500).json({ error: "Logout failed", message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { email, role, skills = [] } = req.body;
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ error: "Forbidden" });
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    await User.updateOne(
      { email },
      { role, skills: skills.length > 0 ? skills : user.skills },
    );
    return res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Update failed", message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ error: "Forbidden" });
    const users = await User.find({}, { password: 0 });
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch users", message: error.message });
  }
};
