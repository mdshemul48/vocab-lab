import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import axiosInstance from '../util/axiosInstance';
import { WordInfo } from '../types/shared.types';

interface VocabsContextType {
  vocabs: WordInfo[];
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  createNewWordInDbHandler: () => void;
  gptLoading: boolean;
}

export const VocabsContext = createContext<VocabsContextType>({
  vocabs: [],
  setSearchWord: () => {},
  createNewWordInDbHandler: () => {},
  gptLoading: false,
});

export default function VocabsContextProvider({ children }: { children: React.ReactNode }) {
  const [vocabs, setVocabs] = useState<WordInfo[]>([]);
  const [searchWord, setSearchWord] = useState('');
  const [gptLoading, setGptLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get<WordInfo[]>(
          `/vocabularies?page=1&word=${searchWord}`,
        );
        setVocabs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchWord]);

  const createNewWordInDbHandler = useCallback(async () => {
    setGptLoading(true);
    const { data } = await axiosInstance.post<WordInfo>(
      `/vocabularies/get-word-meaning-from-gpt?word=${searchWord}`,
    );
    setVocabs((prevVal) => [data, ...prevVal]);
    setGptLoading(false);
  }, [searchWord]);

  const values = useMemo(
    () => ({ vocabs, setSearchWord, createNewWordInDbHandler, gptLoading }),
    [createNewWordInDbHandler, vocabs, gptLoading],
  );

  return <VocabsContext.Provider value={values}>{children}</VocabsContext.Provider>;
}
