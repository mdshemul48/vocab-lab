import _ from 'lodash';
import moment from 'moment';
import { LuLanguages } from 'react-icons/lu';
import { FiBook } from 'react-icons/fi';
import { SentenceExample, WordInfo } from '../types/shared.types';

function WordSentence({ sentenceInfo }: { sentenceInfo: SentenceExample }) {
  return (
    <p className="mt-3 text-lg font-anek text-slate-600 p-2 border border-spacing-1 border-slate-300 rounded-lg shadow-sm">
      {sentenceInfo.bangla}
    </p>
  );
}

export default function Vocab({ vocab }: { vocab: WordInfo }) {
  return (
    <div className="shadow rounded-lg border border-spacing-1 border-gray-300 p-2 mt-3">
      <div className="flex items-center justify-between">
        {' '}
        <h3 className="text-xl font-poppins capitalize font-bold text-slate-600">
          {vocab.word} <span className="font-anek">({vocab.pronounce})</span>
        </h3>
        <h2 className="font-poppins capitalize text-slate-600">
          {moment(vocab.createdAt).format('MMMM Do YYYY, h:mm:ss A')}
        </h2>
      </div>

      <div>
        <hr className="bg-slate-400 px-2 w-full mt-1 mb-1" />
        <p className="flex items-center text-slate-600 font-anek text-lg">
          <LuLanguages className="me-2" /> {vocab.meaning_bangla.join(', ')}
        </p>
        <p className="flex items-center text-slate-600 font-anek text-lg">
          <FiBook className="me-2" /> {vocab.alternative_words.map((word) => _.upperFirst(word)).join(', ')}
        </p>
      </div>

      <div>
        {vocab.sentence_examples.map((sentenceInfo) => (
          <WordSentence sentenceInfo={sentenceInfo} key={sentenceInfo._id} />
        ))}
      </div>
    </div>
  );
}
