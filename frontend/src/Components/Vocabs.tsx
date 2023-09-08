import InfiniteScroll from 'react-infinite-scroll-component';

import Vocab from './Vocab';
import useVocabs from '../hooks/useVocabs';

function Vocabs() {
  const { vocabs, setSelectedPage, pagination } = useVocabs();

  return (
    <section className="mt-5">
      <InfiniteScroll
        dataLength={vocabs.length}
        next={() => setSelectedPage((prevState) => prevState + 1)}
        hasMore={pagination?.totalPage !== pagination?.currentPage}
        loader={<h3 className="text-center">Loading more</h3>}
      >
        {vocabs.map((vocab) => (
          <Vocab vocab={vocab} key={vocab._id} />
        ))}
      </InfiniteScroll>
    </section>
  );
}

export default Vocabs;
