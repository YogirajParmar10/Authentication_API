import express, { Router, query } from "express";
import * as authController from "../controllers/auth";
import { body } from "express-validator";

const router: Router = express.Router();

router.post(
  "/sign-up",
  [
    body("email").isEmail().withMessage("Please Enter valid email"),
    body("name").trim().not().isEmpty().withMessage("Please enter valid name"),
    body("password")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Please enter valid password"),
  ],
  authController.signUp
);

router.post(
  "/sign-in",
  [
    body("email").isEmail().withMessage("Please Enter valid email"),
    body("password").trim().isLength({ min: 5 }),
  ],
  authController.signIn
);

export default router;
