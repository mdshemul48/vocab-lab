import { FaSpinner } from 'react-icons/fa6';

function SearchBox() {
  return (
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
  );
}

export default SearchBox;
