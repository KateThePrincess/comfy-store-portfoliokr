import { useState } from 'react';
import ProductsGrid from '../components/ProductsGrid';
import ProductsList from './ProductsList';
import { useLoaderData } from 'react-router-dom';
import { FaGrip, FaGripLines } from 'react-icons/fa6';

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState('grid');

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-md ${
      pattern === layout ? 'btn-secondary ' : 'btn-ghost'
    }`;
  };
  return (
    <section>
      <section className='align-element'>
        {/* HEADER */}
        <div className='flex justify-between items-center mt-8 pb-5'>
          <h4 className='font-medium text-md'>
            {totalProducts} product
            {totalProducts > 1 || (totalProducts === 0 && 's')}
          </h4>
          <div className='flex gap-x-2'>
            <button
              type='button'
              onClick={() => setLayout('grid')}
              className={setActiveStyles('grid')}
            >
              <FaGrip />
            </button>
            <button
              type='button'
              onClick={() => setLayout('list')}
              className={setActiveStyles('list')}
            >
              <FaGripLines />
            </button>
          </div>
        </div>
        {/* PRODUCTS */}
        <div>
          {totalProducts === 0 ? (
            <h5>Sorry, no products match your search.</h5>
          ) : layout === 'grid' ? (
            <ProductsGrid bg={'bg-base-200'} />
          ) : (
            <ProductsList bg={'bg-base-200'} />
          )}
        </div>
      </section>
    </section>
  );
};
export default ProductsContainer;
