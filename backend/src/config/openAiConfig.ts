import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

export const openAiConfig = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
