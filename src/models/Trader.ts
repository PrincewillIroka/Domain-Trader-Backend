import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";
import { hashPassword, comparePassword } from "../utils/helpers/AuthHelper";

export interface ITrader extends Document {
  email: string;
  password: string;
}

interface ITraderModelInterface extends Model<ITrader> {
  addTrader(email: string, password: string): Promise<ITrader>;
  verifyTrader(email: string, password: string): any;
}

const TraderSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
  },
  { usePushEach: true, timestamps: true, versionKey: false }
);

TraderSchema.method({});

TraderSchema.statics = {
  addTrader(email: string, password: string): Promise<ITrader> {
    password = hashPassword(password);
    return Trader.create({
      email,
      password,
    });
  },
  async verifyTrader(email: string, password: string): Promise<any> {
    let trader = await Trader.findOne({ email }).lean();
    if (trader) {
      const hash = trader.password;
      const isValidPassword = comparePassword(password, hash);
      if (isValidPassword) {
        return trader;
      } else {
        throw new Error("Invalid login credentials!");
      }
    } else {
      throw new Error("Trader not found!");
    }
  },
};

const Trader: ITraderModelInterface = mongoose.model<
  ITrader,
  ITraderModelInterface
>("Trader", TraderSchema);

export default Trader;
