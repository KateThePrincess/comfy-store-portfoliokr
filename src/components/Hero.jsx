import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
import hero from '../assets/hero-landing.jpg';
import { Link } from 'react-router-dom';

const carouselContent = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 items-center justify-center gap-8'>
      <div className='text-center lg:text-left flex flex-col justify-center items-center lg:items-start pb-5'>
        <h1 className='md:max-w-[100%] max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
          We are changing the way
          <span className='text-secondary lg:text-neutral'> people</span> shop.
        </h1>
        <p className='mt-8 lg:max-w-md max-w-2xl text-base text-center leading-8 lg:text-justify '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          excepturi et asperiores.
        </p>
        <div className='mt-10'>
          <Link
            to='/products'
            className='btn btn-neutral uppercase font-normal'
          >
            our products
          </Link>
        </div>
      </div>
      <div className=' carousel  space-x-2 rounded-box  '>
        {carouselContent.map((item) => {
          return (
            <div key={item} className='carousel-item'>
              <img
                src={item}
                className='rounded-box h-[15rem] w-[10rem] object-cover sm:w-80 lg:h-full  '
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
