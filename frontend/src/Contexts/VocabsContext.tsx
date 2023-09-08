import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import axiosInstance from '../util/axiosInstance';
import { WordInfo } from '../types/shared.types';

interface Pagination {
  totalPage: number;
  currentPage: number;
  limit: number;
}
interface VocabsContextType {
  vocabs: WordInfo[];
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  createNewWordInDbHandler: () => void;
  gptLoading: boolean;
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
  pagination?: Pagination;
}

export const VocabsContext = createContext<VocabsContextType>({
  vocabs: [],
  setSearchWord: () => {},
  createNewWordInDbHandler: () => {},
  gptLoading: false,
  selectedPage: 1,
  setSelectedPage: () => {},
});

export default function VocabsContextProvider({ children }: { children: React.ReactNode }) {
  const [vocabs, setVocabs] = useState<WordInfo[]>([]);
  const [searchWord, setSearchWord] = useState('');
  const [gptLoading, setGptLoading] = useState(false);

  const [selectedPage, setSelectedPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          page: selectedPage,
        };
        const { data } = await axiosInstance.get<{
          collection: WordInfo[];
          pagination: { totalPage: number; currentPage: number; limit: number };
        }>('/vocabularies', {
          params,
        });

        setVocabs((prevState) => [...prevState, ...data.collection]);
        setPagination(data.pagination);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [selectedPage]);

  const createNewWordInDbHandler = useCallback(async () => {
    setGptLoading(true);

    const params = {
      word: searchWord.length > 0 && searchWord,
    };
    const { data } = await axiosInstance.post<WordInfo>('/vocabularies/get-word-meaning-from-gpt', {
      params,
    });
    setVocabs((prevVal) => [data, ...prevVal]);
    setGptLoading(false);
  }, [searchWord]);

  const values = useMemo(
    () => ({
      vocabs,
      setSearchWord,
      createNewWordInDbHandler,
      gptLoading,
      pagination,
      selectedPage,
      setSelectedPage,
    }),
    [vocabs, createNewWordInDbHandler, gptLoading, pagination, selectedPage],
  );

  return <VocabsContext.Provider value={values}>{children}</VocabsContext.Provider>;
}
