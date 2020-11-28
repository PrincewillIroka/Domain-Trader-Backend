import mongoose, { Schema, Document, Model, Error, Promise } from "mongoose";
import bcrypt from "bcrypt";
import { hashPassword } from "../utils/helpers/AuthHelper";

export interface ITrader extends Document {
  email: string;
  password: string;
}

interface ITraderModelInterface extends Model<ITrader> {
  addTrader(email: string, password: string): Promise<ITrader>;
}

const TraderSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

TraderSchema.method({});

TraderSchema.statics = {
  addTrader(email: string, password: string): Promise<ITrader> {
    password = hashPassword(password);
    return Trader.create({
      email,
      password,
    });
  },
};

const Trader: ITraderModelInterface = mongoose.model<
  ITrader,
  ITraderModelInterface
>("Trader", TraderSchema);

export default Trader;
