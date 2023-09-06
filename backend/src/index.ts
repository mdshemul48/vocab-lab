import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import { connectDB } from './config/connectDB';
import vocabulariesRoute from './routes/vocabularies.routes';

dotenv.config();
const app = express();
app.use(cors());

app.use('/vocabularies', vocabulariesRoute);

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log('App listening on port http://localhost:5000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
