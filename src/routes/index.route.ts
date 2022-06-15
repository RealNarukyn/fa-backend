import express, {Request, Response} from 'express';
import RateRouter from './rate.route';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Index Routing');
});

router.use('/rate', RateRouter);

export default router;
