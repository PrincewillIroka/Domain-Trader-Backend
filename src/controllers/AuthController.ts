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
    //   const trader = await Trader
  } catch (error) {
    console.log(error);
  }
};
