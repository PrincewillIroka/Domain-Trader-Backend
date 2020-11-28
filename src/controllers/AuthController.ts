import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import Trader from "../models/Trader";

export const login = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {};

export const signUp = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = request.body;
    await Trader.addTrader(email, password)
      .then((trader) => {
        response.json({ success: true, trader });
      })
      .catch((err) => {
        response.status(422).json({ error: err });
      });
  } catch (error) {
    response.status(422).json({ error: error });
    console.log(error);
  }
};
