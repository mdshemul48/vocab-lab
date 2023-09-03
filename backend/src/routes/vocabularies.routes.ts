import VocabulariesController from '../controllers/Vocabularies.controller';
import { Router } from 'express';

const router = Router();

router.get('/', VocabulariesController.getWordInfos);

router.post(
  '/get-word-meaning-from-gpt',
  VocabulariesController.getWordFromGPTAndSave
);

export default router;
