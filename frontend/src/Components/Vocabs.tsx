import Vocab from './Vocab';
import useVocabs from '../hooks/useVocabs';

function Vocabs() {
  const { vocabs } = useVocabs();
  console.log(vocabs);

  return (
    <section className="mt-5">
      {vocabs.map((vocab) => (
        <Vocab vocab={vocab} key={vocab._id} />
      ))}
    </section>
  );
}

export default Vocabs;
