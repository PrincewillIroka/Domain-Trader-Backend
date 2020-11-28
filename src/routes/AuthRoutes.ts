import express from "express";
import { login, signUp } from "../controllers/AuthController";
import { loginData, signUpData } from "../validation/AuthValidation";
import { validator } from "../utils/util";
const router = express.Router();

router.post("/login", loginData, login);
router.post("/signUp", signUpData, validator, signUp);

export default router;
