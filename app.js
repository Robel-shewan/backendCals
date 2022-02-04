import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";

import employeeRoutes from "./routes/employeeRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/employees", employeeRoutes);

mongoose
  .connect("mongodb://localhost:27017/HR-system", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to MOngodb SuccessFully !!!`))
  .catch((err) => console.log(err.message));
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
