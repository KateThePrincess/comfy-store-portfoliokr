import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils/index';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};
const Landing = () => {
  return (
    <main>
      <Hero />

      <FeaturedProducts />
    </main>
  );
};
export default Landing;
