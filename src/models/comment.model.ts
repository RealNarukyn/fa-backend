import {Document, Schema, model} from 'mongoose';

export interface IComment extends Document {
    social_id: string;
    id_recipe: Schema.Types.ObjectId;
    comment: string;
}

const schema = new Schema<IComment>({
  social_id: {type: String, required: true},
  id_recipe: {type: Schema.Types.ObjectId, required: true},
  comment: {type: String, required: true},
}, {timestamps: true});

export const CommentModel = model<IComment>('Comment', schema);
