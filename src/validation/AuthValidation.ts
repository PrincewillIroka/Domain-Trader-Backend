import { check, body, checkSchema } from "express-validator";

export const loginData = [
  check("email").normalizeEmail().isEmail().withMessage("Invalid email").trim(),
  check("password")
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage("Invalid password")
    .trim(),
  body("notifyOnReply").toBoolean(),
];

export const signUpData = [
  check("email").normalizeEmail().isEmail().withMessage("Invalid email").trim(),
  check("password")
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage("Invalid password")
    .trim(),
  body("notifyOnReply").toBoolean(),
];
