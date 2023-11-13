export type SentenceExample = { english: string; bangla: string; _id: string };

export interface WordInfo {
  _id: string;
  word: string;
  meanings: string[];
  meaning_bangla: string[];
  sentence_examples: SentenceExample[];
  pronounce: string;
  alternative_words: string[];
  createdAt: string;
}
