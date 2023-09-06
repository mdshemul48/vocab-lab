import { FaSpinner } from 'react-icons/fa6';
import useVocabs from '../hooks/useVocabs';
import { SentenceLanToggle } from './SentenceLanToggle';

function SearchBox() {
  const { setSearchWord, createNewWordInDbHandler, gptLoading } = useVocabs();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };
  return (
    <div>
      <div className="flex">
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="Search a word"
          className="flex-1 rounded bg-slate-100 outline outline-2 outline-gray-300 focus:outline-blue-500 active:outline-blue-500 w-auto py-1.5 px-2 text-lg transition-all"
        />
        <button
          onClick={createNewWordInDbHandler}
          type="button"
          className="flex items-center ms-2 p-2 bg-slate-100 outline-gray-300 text-slate-700 font-extrabold hover:outline-blue-500 active:scale-95 font-poppins rounded outline outline-2 outline-gray-30 hover:bg-slate-200 active:bg-slate-200 transition-all"
        >
          {!gptLoading ? (
            'GET FROM GPT'
          ) : (
            <>
              <FaSpinner className="me-1 animate-spin" /> processing...
            </>
          )}
        </button>
      </div>
      <SentenceLanToggle />
    </div>
  );
}

export default SearchBox;
