import { useRouter } from 'next/router';

interface PaginationProps {
  currentPage: number;
}

const Pagination = ({ currentPage }: PaginationProps) => {
  const router = useRouter();

  const navigateToHandler = (num: number) => {
    router.push(`/gifs-gallery/${num}`);
  };

  const btns = [];
  for (let i = currentPage + 2; i >= currentPage - 2; i--) {
    if (i > 0) btns.unshift(i);
  }

  return (
    <div className='gallery__pagination'>
      {btns.map((num) => (
        <button
          className={currentPage === num ? 'gallery__pagination--selected' : ''}
          key={`page_${num}`}
          onClick={navigateToHandler.bind(null, num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
