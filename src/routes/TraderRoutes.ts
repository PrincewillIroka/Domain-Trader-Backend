import express from "express";
import { getDomainsForSale, addDomainForSale } from "../controllers/TraderController";
import { getDomainsForSaleData, addDomainForSaleData } from "../validation/TraderValidation";
import { validator } from "../utils/util";
const router = express.Router();

router.get("/domainsForSale", getDomainsForSaleData, validator, getDomainsForSale);
router.post("/addDomainForSale", addDomainForSaleData, validator, addDomainForSale);

export default router;
