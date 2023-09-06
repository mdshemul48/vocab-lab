import _ from 'lodash';
import { LuLanguages } from 'react-icons/lu';
import { FaLanguage } from 'react-icons/fa';
import Heading from './Components/Heading';
import SearchBox from './Components/SearchBox';

function App() {
  return (
    <div className="w-1/2 mx-auto mt-20">
      <Heading />
      <div className="mt-5 w-full bg-slate-100 p-3 rounded">
        <SearchBox />
        <hr className="bg-slate-400 px-2 w-full mt-4" />
        <section className="mt-5">
          <div className="shadow-lg rounded border border-spacing-1 border-gray-300 p-2">
            <div className="flex items-center justify-between">
              {' '}
              <h3 className="text-xl font-poppins capitalize font-bold text-slate-600">
                wonderful <span className="font-anek">(wʌndərfəl)</span>
              </h3>
              <h2 className="font-poppins capitalize text-slate-600">Tuesday, September 5, 2023</h2>
            </div>

            <div>
              <hr className="bg-slate-400 px-2 w-full mt-1 mb-1" />
              <p className="flex items-center text-slate-600 font-anek text-lg">
                <LuLanguages className="me-2" /> {['আশ্চর্যজনক', 'অদ্ভুত', 'সুন্দর'].join(', ')}
              </p>
              <p className="flex items-center text-slate-600 font-anek text-lg">
                <FaLanguage className="me-2" />{' '}
                {['amazing', 'fantastic', 'marvelous'].map((word) => _.upperFirst(word)).join(', ')}
              </p>
            </div>

            <div>
              <p className="mt-3 text-lg font-poppins text-slate-600 p-2 border border-spacing-1 border-slate-300 rounded-lg shadow-sm font-semibold">
                The view from the top of the mountain was wonderful.
              </p>
              <p className="mt-3 text-lg font-anek text-slate-600 p-2 border border-spacing-1 border-slate-300 rounded-lg shadow-sm font-semibold">
                পাহাড়ের শীর্ষ থেকে দৃশ্য অদ্ভুত ছিল।
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
