import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ status: 422, error: errors.array() });
  }
  next();
};
