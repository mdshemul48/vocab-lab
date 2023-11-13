export interface WordInfo {
  word: string;
  meanings: string[],
  meaning_bangla: string[];
  sentence_examples: { english: string; bangla: string }[];
  pronounce: string;
  alternative_words: string[];
}
