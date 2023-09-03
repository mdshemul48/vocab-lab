import { Request, Response } from 'express';
import VocabulariesModel from '../models/Vocabularies.model';
import { generateWordInfo } from '../utility/generateWordInfo';
import { GenerateWordInfo } from 'types/shared.types';
export default class VocabulariesController {
  static async getWordInfos(req: Request, res: Response) {
    const { word } = req.query;
    if (!word) {
      const vocabularies = await VocabulariesModel.find();
      return res.status(200).json(vocabularies);
    }
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

      const createdVocab: GenerateWordInfo =
        await VocabulariesModel.create(wordMeaning);

      return res.status(201).json({
        data: createdVocab,
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Getting info from GPT failed.',
      });
    }
  }
}
