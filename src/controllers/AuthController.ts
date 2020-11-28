import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import Trader from "../models/Trader";
import {
  successMessage,
  successData,
  errorMessage,
  errorData,
  serverError,
} from "../utils/helpers/ResponseHelper";

export const login = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = request.body;
    await Trader.verifyTrader(email, password)
      .then((trader: any) => {
        response.json(successData(trader));
      })
      .catch((err: Error) => {
        response.status(422).json(errorMessage(err?.message));
      });
  } catch (error) {
    response.status(500).json(serverError());
    console.log(error);
  }
};

export const signUp = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = request.body;
    await Trader.addTrader(email, password)
      .then((trader) => {
        response.json(successData(trader));
      })
      .catch((err) => {
        if (err && err?.code === 11000) {
          response
            .status(422)
            .json(errorMessage("Trader with this email already exists!"));
        } else {
          response.status(422).json(errorData(err));
        }
      });
  } catch (error) {
    response.status(500).json(serverError());
    console.log(error);
  }
};
