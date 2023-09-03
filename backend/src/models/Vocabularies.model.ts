import mongoose, { Schema } from 'mongoose';
import { GenerateWordInfo } from 'types/shared.types';
const VocabulariesSchema = new Schema<GenerateWordInfo>(
  {
    word: {
      type: String,
      unique: true,
      required: true,
    },
    meaning_bangla: [String],
    sentence_examples: [String],
    pronounce: String,
    alternative_words: [String],
  },
  { timestamps: true }
);
const VocabulariesModel = mongoose.model('Vocabularies', VocabulariesSchema);

export default VocabulariesModel;
