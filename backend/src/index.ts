import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

app.get('/', async (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('App listening on port http://localhost:3000');
});
