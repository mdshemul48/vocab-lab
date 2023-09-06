import { FaSpinner } from 'react-icons/fa6';
import useSelectLan from '../hooks/useSelectLan';

function SentenceLanToggle() {
  const { isBangla, setIsBangla } = useSelectLan();
  const onToggleHandler = () => {
    setIsBangla(!isBangla);
  };
  return (
    <div className="text-right">
      <label
        htmlFor="default-toggle"
        className="inline-flex relative items-center cursor-pointer mt-4"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="sr-only peer"
          onClick={onToggleHandler}
          checked={isBangla}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        <span className="ml-3 text-sm font-semibold text-slate-700 font-poppins">
          {isBangla ? 'Bangla' : 'English'}
        </span>
      </label>
      <p className="text-slate-500 text-xs font-poppins">
        Switch sentence language with this toggle.
      </p>
    </div>
  );
}

function SearchBox() {
  return (
    <div>
      <div className="flex">
        <input
          type="text"
          placeholder="Search a word"
          className="flex-1 rounded bg-slate-100 outline outline-2 outline-gray-300 focus:outline-blue-500 active:outline-blue-500 w-auto py-1.5 px-2 text-lg transition-all"
        />
        <button
          type="button"
          className="flex items-center ms-2 p-2 bg-slate-100 outline-gray-300 text-slate-700 font-extrabold hover:outline-blue-500 active:scale-95 font-poppins rounded outline outline-2 outline-gray-30 hover:bg-slate-200 active:bg-slate-200 transition-all"
        >
          {/* <FaSpinner className="me-1 animate-spin" /> */}
          GET FROM GPT
          {/* processing... */}
        </button>
      </div>
      <SentenceLanToggle />
    </div>
  );
}

export default SearchBox;
