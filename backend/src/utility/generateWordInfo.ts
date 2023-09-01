import { openAiConfig } from '../config/openAiConfig';

const otherConfig = {
  model: 'gpt-3.5-turbo',
  temperature: 0,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

const systemCommand = `
you will help user with learn new vocabulary. 
you will give him a json response. 
the response will be like this.
{
"word": "the word that user gave",
"meaning_bangla": ["translate the word meaning to bangla"],
"word_examples": ["english example sentence with that word(bangla of this sample)"],
"pronounce": "the word pronounce", 
"alternative_words": ["you will give some alternative words"]
}
`;

export const generateWordInfo = async (word: string) => {
  try {
    const response = await openAiConfig.chat.completions.create({
      ...otherConfig,
      messages: [
        {
          role: 'system',
          content: systemCommand,
        },
        {
          role: 'user',
          content: word,
        },
      ],
    });
    const messange = response.choices[0].message.content;
    if (messange) {
      return JSON.parse(messange);
    } else throw new Error();
  } catch (error) {
    throw new Error('something went wrong while getting word Info.');
  }
};