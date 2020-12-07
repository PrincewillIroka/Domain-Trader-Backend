import { check, body, checkSchema } from "express-validator";

export const loginData = [
  check("email").exists().withMessage("Invalid user credentials").trim(),
  check("password")
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage("Invalid user credentials")
    .trim(),
    body("notifyOnReply").toBoolean(),
];

export const signUpData = [
  check("email").exists().withMessage("Invalid user credentials").trim(),
  check("password")
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage("Invalid user credentials")
    .trim(),
  body("notifyOnReply").toBoolean(),
];
