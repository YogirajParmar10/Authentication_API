import express, { Router } from "express";
import * as adminController from "../controllers/login";

const router: Router = express.Router();

router.use("/", adminController.getLogin);

export default router;
