import { Request, Response, NextFunction } from "express";
import Trader from "../models/Trader";
import Domain from "../models/Domain";
import {
  successMessage,
  successData,
  errorMessage,
  errorData,
  serverError,
} from "../utils/helpers/ResponseHelper";

export const getDomainsForSale = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { limit, pageNumber } = request.body;
    await Domain.find()
      .sort("createdAt")
      .skip(pageNumber)
      .limit(limit)
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
