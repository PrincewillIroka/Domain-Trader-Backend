import { check, body } from "express-validator";

export const domainsForSaleData = [
  check("pageNumber").exists().isNumeric().trim(),
  check("limit").exists().isNumeric().trim(),
  body("notifyOnReply").toBoolean(),
];
