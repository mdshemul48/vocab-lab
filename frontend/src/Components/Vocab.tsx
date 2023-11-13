import _ from 'lodash';
import moment from 'moment';
import { LuLanguages } from 'react-icons/lu';
import { FiBook } from 'react-icons/fi';
import { SentenceExample, WordInfo } from '../types/shared.types';
import useSelectLan from '../hooks/useSelectLan';

function WordSentence({ sentenceInfo: { bangla, english } }: { sentenceInfo: SentenceExample }) {
  const { isBangla } = useSelectLan();

  return (
    <div className="text-slate-600 p-2 border border-spacing-1 border-slate-300 rounded-lg mt-3 shadow-sm">
      <p className={`text-xl ${isBangla ? 'font-anek' : 'font-poppins'} font-bold`}>
        {isBangla ? bangla : english}
      </p>{' '}
      <span className={`block text-sm ${!isBangla ? 'font-anek' : 'font-poppins'}`}>
        {!isBangla ? bangla : english}
      </span>
    </div>
  );
}

export default function Vocab({ vocab }: { vocab: WordInfo }) {
  return (
    <div className="shadow-sm rounded-lg border border-gray-300 p-2 mt-4">
      <div className="flex items-center justify-between">
        {' '}
        <h3 className="text-2xl font-poppins capitalize font-bold text-slate-600">
          {vocab.word} <span className="font-anek">({vocab.pronounce})</span>
        </h3>
        <h2 className="font-poppins capitalize text-slate-600 hidden md:block">
          {moment(vocab.createdAt).format('MMMM Do YYYY, h:mm A')}
        </h2>
      </div>

      <div>
        <hr className="bg-slate-400 px-2 w-full mt-1 mb-1" />
        <p className="flex items-center text-slate-600 font-anek text-lg">
          <LuLanguages className="me-2" /> {vocab.meaning_bangla.join(', ')}
        </p>
        <p className="flex items-center text-slate-600 font-anek text-lg">
          <FiBook className="me-2" />{' '}
          {vocab.alternative_words.map((word) => _.upperFirst(word)).join(', ')}
        </p>
      </div>

      <div>
        {vocab.meanings.map(meaning=>  <div className="text-slate-600 p-2 border border-spacing-1 border-slate-300 rounded-lg mt-3 shadow-sm">
      <p className={`text-lg font-poppins font-bold`}>
        {meaning}
      </p>
    </div>)}
      </div>

      <div>
        {vocab.sentence_examples.map((sentenceInfo) => (
          <WordSentence sentenceInfo={sentenceInfo} key={sentenceInfo._id} />
        ))}
      </div>
    </div>
  );
}
