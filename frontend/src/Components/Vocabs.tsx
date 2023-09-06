import { useState, useEffect } from 'react';
import Vocab from './Vocab';
import axiosInstance from '../util/axiosInstance';
import { WordInfo } from '../types/shared.types';

function Vocabs() {
  const [vocabs, setVocabs] = useState<WordInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get<WordInfo[]>('/vocabularies?page=1');
        setVocabs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="mt-5">
      {vocabs.map((vocab) => (
        <Vocab vocab={vocab} key={vocab._id} />
      ))}
    </section>
  );
}

export default Vocabs;
