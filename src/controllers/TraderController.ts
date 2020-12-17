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
import { isDomainExisting } from "../middlewares/RequestAuthentication";

export const getDomainsForSale = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let { limit, pageNumber } = request.body;
    limit = Number(limit);
    pageNumber = Number(pageNumber);
    await Domain.find()
      .sort("createdAt")
      .skip(pageNumber)
      .limit(limit)
      .then((trader: any) => {
        response.json(successData(trader));
      })
      .catch((err: Error) => {
        console.log(err);
        response.status(422).json(errorMessage(err?.message));
      });
  } catch (error) {
    response.status(500).json(serverError());
    console.log(error);
  }
};

export const addDomainForSale = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { traderId, domainName, price, closingDate } = request.body;
    const domainExists = await isDomainExisting(domainName?.toLowerCase());
    if (!domainExists) {
      const domain = await Domain.create({
        traderId,
        domainName,
        price,
        closingDate,
      });
      if (domain) {
        response.json(successData(domain));
      }
      response.json(successMessage("Error while adding domain"));
    } else {
      response.json(errorMessage("Domain already exists"));
    }
  } catch (error) {
    response.status(500).json(serverError());
    console.log(error);
  }
};
