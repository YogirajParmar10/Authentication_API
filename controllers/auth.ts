import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { User } from "../models/user";

export const Signup = async (req: Request, res: Response) => {
  const email: String = req.body.email;
  const name: String = req.body.name;
  const password: Buffer = req.body.password;

  const hashedPass: String = await bcrypt.hash(password, 12);
  console.log(typeof hashedPass);
  const user = new User({
    email: email,
    name: name,
    password: hashedPass,
  });
  await user.save();
  res.status(201).json({
    message: "Signup Successful",
  });
};

export const Signin = async (req: Request, res: Response) => {
  const email: String = req.body.email;
  const password: Buffer = req.body.password;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ message: "User not found!" });
  }
  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    return res.status(401).json({ message: "Invalid password" });
  }

  res.status(200).json({ message: "Login successful" });
};
