import express, {Request, Response} from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Rate Routing');
});

export default router;
