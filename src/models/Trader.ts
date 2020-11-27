import mongoose, { Schema, Document } from 'mongoose';

export interface ITrader extends Document {
    email: string;
    password: string;
}

const TraderSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Export the model and return your ITrader interface
export default mongoose.model<ITrader>('Trader', TraderSchema);