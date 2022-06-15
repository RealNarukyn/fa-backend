import {Document, Schema, model} from 'mongoose';

export interface IngredientsMap {
    [key: string]: number;
}

export interface IRecipe extends Document {
    recipe: string;
    ingredients: IngredientsMap;
    // For the moment it's a string but in the future
    // it must be able to save the html and css configs for the page
    description: string;
    shares: number;
    social_id: string;
}

const schema = new Schema<IRecipe>({
  recipe: {type: String, required: true},
  // It'll be stored in the DB as an *stringified object*
  ingredients: {type: String, required: true},
  description: {type: String, required: true},
  shares: {type: Number, required: true},
  social_id: {type: String, required: true},
}, {timestamps: true});

export const RecipeModel = model<IRecipe>('Recipe', schema);
