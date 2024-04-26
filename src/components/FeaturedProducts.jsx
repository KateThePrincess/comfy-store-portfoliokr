import SectionTitle from './SectionTitle';
import ProductsGrid from './ProductsGrid';

const FeaturedProducts = () => {
  return (
    <div className='relative w-[100vw] ml-[50%] translate-x-[-50%] py-10 bg-base-200 mt-24 mb-0'>
      <div className='align-element'>
        <SectionTitle text='featured products' />
        <ProductsGrid bg={'bg-base-100'} to='products/' />
      </div>
    </div>
  );
};
export default FeaturedProducts;
