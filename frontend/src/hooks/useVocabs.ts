import { useContext } from 'react';
import { VocabsContext } from '../Contexts/VocabsContext';

export default function useVocabs() {
  return useContext(VocabsContext);
}
