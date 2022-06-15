import {Document, Schema, model} from 'mongoose';

export interface IUser extends Document {
    social_id: string;
}

const schema = new Schema<IUser>({
  social_id: {type: String, required: true},
}, {timestamps: true});

export const UserModel = model<IUser>('User', schema);
