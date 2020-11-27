import express from "express";
import { login } from "../controllers/AuthController"
const router = express.Router();

router.get('/login', login)

export default router;
