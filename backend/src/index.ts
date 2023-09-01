import { connectDB } from './config/connectDB';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log('App listening on port http://localhost:5000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
