import express from "express";

const router = express.Router();
import {
  registerEmployee,
  getAllEmployees,
} from "../controllers/employeeController.js";

router.route("/").get(getAllEmployees).post(registerEmployee);

export default router;
