import express, { Router } from "express";
import * as authController from "../controllers/auth";

const router: Router = express.Router();

router.get("/signup", authController.Signup);

router.get("/login", authController.Signin);

export default router;
