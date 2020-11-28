import express from "express";
import { login, signUp } from "../controllers/AuthController";
import { loginData, signUpData } from "../validation/AuthValidation";
const router = express.Router();

router.post("/login", loginData, login);
router.post("/signUp", signUpData, signUp);

export default router;
