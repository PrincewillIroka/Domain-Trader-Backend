import express from "express";
import { getDomainsForSale } from "../controllers/TraderController";
import { domainsForSaleData } from "../validation/TraderValidation";
import { validator } from "../utils/util";
const router = express.Router();

router.get("/getDomainsForSale", domainsForSaleData, validator, getDomainsForSale);
// router.post("/signUp", signUpData, validator, signUp);

export default router;
