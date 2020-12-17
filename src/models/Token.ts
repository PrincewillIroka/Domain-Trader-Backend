import mongoose, { Schema, Document, Model } from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

export interface IToken extends Document {
  traderId?: string;
  exp: Date;
  valid: boolean;
}

const TokenSchema = new mongoose.Schema(
  {
    traderId: { type: ObjectId, ref: "Trader" },
    exp: { type: Date },
    valid: { type: Boolean },
  },
  { usePushEach: true, timestamps: true, versionKey: false }
);

export default mongoose.model<IToken>("Token", TokenSchema);
