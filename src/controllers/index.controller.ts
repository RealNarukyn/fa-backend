import {Request, Response} from 'express';

export class IndexController {
  static index = (req: Request, res: Response) => {
    return res.send('Sending from Index Controller Route');
  };
}
