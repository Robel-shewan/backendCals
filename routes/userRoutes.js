import express from "express";
const router = express.Router();
import {
  registerUser,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  authUser,
} from "../controllers/userController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";

// router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
// router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);
router.route("/").get(getUsers).post(registerUser);

export default router;
