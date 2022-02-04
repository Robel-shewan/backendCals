import Employee from "../models/Employee.js";

import asyncHandler from "express-async-handler";

const registerEmployee = asyncHandler(async (req, res, next) => {
  const { name, age, gender, phoneNumber, email } = req.body;

  const userExists = await Employee.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await Employee.create({
    name,
    email,
    age,
    gender,
    phoneNumber,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getAllEmployees = asyncHandler(async (req, res, next) => {
  const users = await Employee.find({});
  res.json(users);
});

export { registerEmployee, getAllEmployees };
