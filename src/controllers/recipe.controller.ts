import {Request, Response} from 'express';

import {RecipeModel} from '../models/recipe.model';

export class RecipeController {
  static index = async (req: Request, res: Response) => {
    const recipes = await RecipeModel.find().lean();
    return recipes.length < 1 ? res.json([]): res.json(recipes);
  };
}
