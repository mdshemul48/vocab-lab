import { Model, Schema } from 'mongoose';

const VocabulariesSchema = new Schema(
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
const VocabulariesModel = new Model('Vocabularies', VocabulariesSchema);

export default VocabulariesModel;
