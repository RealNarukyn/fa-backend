import express from 'express';

import {IndexController} from '../controllers/index.controller';
import RecipeRouter from './recipe.route';
import RateRouter from './rate.route';

// eslint-disable-next-line new-cap
const router = express.Router();

// Index Routes
router.get('/', IndexController.index);

// The Other Routes
router.use('/recipes', RecipeRouter);
router.use('/rates', RateRouter);

export default router;
