import dotenv from 'dotenv';
import express from 'express';
import { generateWordInfo } from './utility/generateWordInfo';

dotenv.config();
const app = express();

app.get('/', async (req, res) => {
  const word = await generateWordInfo('beautiful');
  return res.json(word);
});
app.listen(3000, () => {
  console.log('App listening on port http://localhost:3000');
});
