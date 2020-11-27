import mongoose, { Schema, Document } from 'mongoose';

export interface IDomain extends Document {
    domainName: string;
    price: number;
    closingOn: string;
}

const DomainSchema: Schema = new Schema({
    domainName: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    closingOn: { type: String, required: true }
});

// Export the model and return your IDomain interface
export default mongoose.model<IDomain>('Domain', DomainSchema);