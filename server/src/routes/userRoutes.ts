import express, { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/users", async (_req: Request, res: Response) => {
  try {
    const users = await User.find().lean();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/users", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email }).lean();

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).lean();
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.json({ data: user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password: hashedPassword },
      { new: true }
    ).lean();

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User updated successfully",
      user: {
        id: updatedUser?._id,
        name: updatedUser?.name,
        email: updatedUser?.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id).lean();
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
