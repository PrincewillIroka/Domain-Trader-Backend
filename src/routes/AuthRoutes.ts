import express from "express";
import { login, signUp } from "../controllers/AuthController"
import schema from "../utils/schema"
const router = express.Router();

console.log(schema)

router.get('/login', login)
router.get('/signUp', signUp)

export default router;
