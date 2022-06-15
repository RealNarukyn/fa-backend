import express, {Express} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import {CONFIG} from './config';
import indexRouter from './routes/index.route';

const app: Express = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// Connect to DB
mongoose.connect(CONFIG.DB.HOST as string, (err) => {
  if (err) {
    console.log('Error connecting to the database:', err);
    process.exit(0);
  }
  console.log('Connected to the database');
});

// APP Routing
app.use('/', indexRouter);

// APP Listening
app.listen(CONFIG.APP.PORT, () => {
  console.log(`Server is running at http://localhost:${CONFIG.APP.PORT}`);
});
