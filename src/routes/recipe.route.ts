import express from 'express';
import {RecipeController} from '../controllers/recipe.controller';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', RecipeController.index);

export default router;
