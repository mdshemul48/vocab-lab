import { Request, Response } from 'express';

export default class VocabulariesController {
  static getWordInfos(req: Request, res: Response) {
    const { word } = req.query;
    if (!word) {
    }
  }
}
