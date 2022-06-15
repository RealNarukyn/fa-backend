import dotenv from 'dotenv';
import {Validators} from './lib/validators';

dotenv.config();

const APP = {
  PORT: Validators.checkENV('PORT'),
};

const DB = {
  HOST: Validators.checkENV('HOST'),
};

export const CONFIG = {APP, DB};
