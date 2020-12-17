import mongoose, { Schema, Document } from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

export interface IDomain extends Document {
  traderId: string;
  domainName: string;
  price: number;
  closingDate: Date;
}

const DomainSchema: Schema = new Schema(
  {
    traderId: { type: ObjectId, ref: "Trader" },
    domainName: { type: String, required: true, unique: true, trim: true },
    price: { type: Number, required: true },
    closingDate: { type: Date },
  },
  { usePushEach: true, timestamps: true, versionKey: false }
);

// Export the model and return your IDomain interface
export default mongoose.model<IDomain>("Domain", DomainSchema);
