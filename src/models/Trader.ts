import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import { hashPassword } from "../utils/helpers/AuthHelper";

export interface ITrader extends Document {
  email: string;
  password: string;
}

const TraderSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

TraderSchema.method({});

TraderSchema.statics = {
  addTrader(params: ITrader) {
    let { email, password } = params;
    password = hashPassword(password)
  },
};

// Export the model and return your ITrader interface
export default mongoose.model<ITrader>("Trader", TraderSchema);
