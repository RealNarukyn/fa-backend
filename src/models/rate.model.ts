import {Document, Schema, model} from 'mongoose';

export interface IRate extends Document {
    social_id: string;
    id_recipe: Schema.Types.ObjectId;
    rate: number;
}

const schema = new Schema<IRate>({
  social_id: {type: String, required: true},
  id_recipe: {type: Schema.Types.ObjectId, required: true},
  rate: {type: Number, required: true, min: 1, max: 5},
}, {timestamps: true});

export const RateModel = model<IRate>('Rate', schema);
