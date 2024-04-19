import SectionTitle from './SectionTitle';
import ProductsGrid from './ProductsGrid';

const FeaturedProducts = () => {
  return (
    <div className='absolute w-[100vw] left-[50%] translate-x-[-50%] py-10 bg-base-200 mt-24'>
      <div className='align-element'>
        <SectionTitle text='featured products' />
        <ProductsGrid bg={'bg-base-100'} />
      </div>
    </div>
  );
};
export default FeaturedProducts;
