import express from "express";
import {
  authUser,
  getUserProfile,
  getUsers,
  getUserById,
  registerUser,
} from "../controller/userController.js";
const router = express.Router();
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/login").post(protect,admin,authUser)
// router.post("/login", authUser);
// router.route("/").get(getProducts);
router
  .route("/profile")
  .get(protect, getUserProfile)
router
  .route("/:id")
  .get(protect, admin, getUserById)
export default router;
