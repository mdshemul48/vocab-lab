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
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  createNewWordInDbHandler: () => void;
  gptLoading: boolean;
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
  pagination: Pagination | null;
}

export const VocabsContext = createContext<VocabsContextType>({
  vocabs: [],
  searchWord: "",
  setSearchWord: () => {},
  createNewWordInDbHandler: () => {},
  gptLoading: false,
  selectedPage: 1,
  setSelectedPage: () => {},
  pagination: null,
});

export default function VocabsContextProvider({ children }: { children: React.ReactNode }) {
  const [vocabs, setVocabs] = useState<WordInfo[]>([]);
  const [firstTime, setFirstTime] = useState(true);
  const [searchWord, setSearchWord] = useState('');
  const [gptLoading, setGptLoading] = useState(false);

  const [selectedPage, setSelectedPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const fetchDataInitial = async () => {
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


  useEffect(() => {
    if (searchWord.length==0){
      fetchDataInitial();
    }
    setFirstTime(false);  
  }, [selectedPage, searchWord]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchWord.length === 0){
        setVocabs(()=> []);
        return;
      }
      
      setSelectedPage(1);
      
      try {
        const params = {
          word: searchWord,
        };
        const { data } = await axiosInstance.get<{
          collection: WordInfo[];
        }>('/vocabularies', {
          params,
        });
        setVocabs(data.collection);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchWord]);

  const createNewWordInDbHandler = useCallback(async () => {
    setGptLoading(true);
    try {
      const { data } = await axiosInstance.post<WordInfo>('/vocabularies/get-word-meaning-from-gpt', {
        word: searchWord.length > 0 && searchWord,
      });
      setVocabs((prevVal) => [data, ...prevVal]);
      setGptLoading(false);
    } catch (error) {
      console.log(error);
      setGptLoading(false); 
    }
    
  }, [searchWord]);

  const values = useMemo(
    () => ({
      vocabs,
      searchWord,
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
