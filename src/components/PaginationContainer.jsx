import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className='mt-16 flex justify-center px-8'>
      <div className='join'>
        <button
          className='btn btn-sm sm:btn-md join-item btn-neutral'
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          <FaChevronLeft />
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`btn btn-sm sm:btn-md btn-neutral border-none join-item ${
                pageNumber === page ? 'bg-secondary' : ''
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className='btn btn-sm sm:btn-md join-item btn-neutral'
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage >= pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
