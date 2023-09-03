import mongoose, { Schema } from 'mongoose';
import { WordInfo } from 'types/shared.types';
const VocabulariesSchema = new Schema<WordInfo>(
  {
    word: {
      type: String,
      unique: true,
      required: true,
    },
    meaning_bangla: [String],
    sentence_examples: [
      {
        english: String,
        bangla: String,
      },
    ],
    pronounce: String,
    alternative_words: [String],
  },
  { timestamps: true }
);

VocabulariesSchema.index({ word: 'text' });
const VocabulariesModel = mongoose.model('Vocabularies', VocabulariesSchema);

export default VocabulariesModel;
