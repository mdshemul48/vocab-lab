export interface WordInfo {
  word: string;
  meaning: string[],
  meaning_bangla: string[];
  sentence_examples: { english: string; bangla: string }[];
  pronounce: string;
  alternative_words: string[];
}
