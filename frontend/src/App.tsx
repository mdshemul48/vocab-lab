import Heading from './Components/Heading';
import SearchBox from './Components/SearchBox';
import Vocabs from './Components/Vocabs';

function App() {
  return (
    <div className="w-1/2 mx-auto mt-20">
      <Heading />
      <div className="mt-5 w-full bg-slate-100 p-3 rounded">
        <SearchBox />
        <hr className="bg-slate-400 px-2 w-full mt-4" />
        <Vocabs />
      </div>
    </div>
  );
}

export default App;
