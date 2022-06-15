import express, {Express, Request, Response} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {CONFIG} from './config';

const app: Express = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// Connect to DB
mongoose.connect(CONFIG.DB.HOST as string, (err) => {
  if (err) {
    console.log('⚡️[server]: Error connecting to the database', err);
    process.exit(0);
  }
  console.log('⚡️[server]: Connected to the database');
});


// APP Routing
app.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript Server');
});

// APP Listening
app.listen(CONFIG.APP.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.APP.PORT}`);
});
