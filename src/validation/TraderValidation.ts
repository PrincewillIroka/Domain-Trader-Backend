import { check, body } from "express-validator";

export const getDomainsForSaleData = [
  check("pageNumber").exists().isNumeric().trim(),
  check("limit").exists().isNumeric().trim(),
  body("notifyOnReply").toBoolean(),
];

export const addDomainForSaleData = [
  check("traderId").exists().isLength({ max: 24 }).trim(),
  check("domainName").exists().isLength({ min: 4 }).trim(),
  check("closingDate")
    .optional()
    .custom((value) => {
      return check(value).isISO8601();
    })
    .trim(),
  check("price").exists().isInt({ min: 1 }).trim(),
  body("notifyOnReply").toBoolean(),
];
