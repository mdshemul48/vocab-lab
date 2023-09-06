import { Request, Response } from 'express';
import VocabulariesModel from '../models/Vocabularies.model';
import { generateWordInfo } from '../utility/generateWordInfo';
import { WordInfo } from 'types/shared.types';
export default class VocabulariesController {
  static async getWordInfos(req: Request, res: Response) {
    type RequestType = {
      word: undefined | string;
      page: undefined | string;
      limit: undefined | string;
    };

    const { word, page, limit } = <RequestType>req.query;

    if (word) {
      const vocab = await VocabulariesModel.find({
        word: { $regex: word, $options: 'i' },
      });
      return res.status(200).json(vocab);
    }

    const pageInt = page ? parseInt(page) : 0;
    const limitInt = limit ? parseInt(limit) : 10;

    const allVocab = await VocabulariesModel.find()
      .sort({ createdAt: 'desc' })
      .skip((pageInt !== 0 ? pageInt - 1 : 0) * limitInt)
      .limit(limitInt)
      .exec();

    return res.status(200).json(allVocab);
  }

  static async getWordFromGPTAndSave(req: Request, res: Response) {
    const { word } = req.query;

    if (!word || word?.length == 0) {
      return res.status(400).json({
        message: 'You must provide a word.',
      });
    }

    const existingWord = await VocabulariesModel.findOne({
      word,
    });

    if (existingWord) {
      return res.status(400).json({
        message: 'Word already exist in Database.',
      });
    }
    try {
      const wordMeaning = await generateWordInfo(word?.toString());

      const createdVocab: WordInfo =
        await VocabulariesModel.create(wordMeaning);

      return res.status(201).json(createdVocab);
    } catch (error) {
      return res.status(400).json({
        message: 'Getting info from GPT failed.',
      });
    }
  }
}
