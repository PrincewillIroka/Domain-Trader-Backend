import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../../config";
import { ITrader } from "../../models/Trader";

export interface IAuth extends Document {
  email?: string;
  password?: string;
  hash: string;
  token?: any;
}

const SaltRounds = 8;
const JWT_SECRET = config.jwtSecret;

export function hashPassword(password: string) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(SaltRounds));
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}

export function generateToken(data: ITrader) {
  const trader = data;
  const time = "24h";
  return jwt.sign(trader, JWT_SECRET, { expiresIn: time });
}

export function verifyToken(data: IAuth) {
  const { token } = data;
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
}
