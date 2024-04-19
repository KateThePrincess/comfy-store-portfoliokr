// import { Link, useLoaderData } from 'react-router-dom';
// import { formatPrice } from '../utils';
// import { BsCart3 } from 'react-icons/bs';
// const ProductsList = () => {
//   const { products } = useLoaderData();

//   const categoryUrl = '?search=&category=';
//   const companyUrl = '?search=&company=';

//   return (
//     <div className='mt-12 grid gap-y-8'>
//       {products.map((product) => {
//         const { title, price, image, category, company } = product.attributes;
//         return (
//           <Link
//             key={product.id}
//             to={`/products/${product.id}`}
//             className='card w-full transition-all duration-300 bg-base-200'
//           >
//             <figure>
//               <img
//                 src={image}
//                 alt={title}
//                 className='h-64 md:h-48 w-full object-cover'
//               />
//             </figure>
//             <div className='card-body'>
//               <h2 className='card-title capitalize flex justify-between font-bold'>
//                 {title}
//                 <button className='btn btn-neutral btn-circle hover:badge-secondary '>
//                   <BsCart3 className='h-5 w-5' />
//                 </button>
//               </h2>
//               <span className='text-secondary font-medium'>
//                 {formatPrice(price)}
//               </span>
//               <div className='card-actions justify-end'>
//                 <button
//                   className='badge badge-outline badge-neutral hover:opacity-[65%]'
//                   onClick={(e) => {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     location.href = `/products/${categoryUrl}${category}`;
//                   }}
//                   //to={`/products/${categoryUrl}${category}`}
//                 >
//                   {(category && category) || null}
//                 </button>
//                 <button
//                   className='badge badge-outline badge-neutral hover:opacity-[65%]'
//                   onClick={(e) => {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     location.href = `/products/${companyUrl}${company}`;
//                   }}
//                   //to={`/products/${companyUrl}${company}`}
//                 >
//                   {(company && company) || null}
//                 </button>
//               </div>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };
// export default ProductsList;

import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { formatPrice } from '../utils';
import { BsCart3 } from 'react-icons/bs';
const ProductsList = ({ bg }) => {
  const { products } = useLoaderData();

  const navigate = useNavigate();
  const handleClick = (categoryURL, category) => {
    navigate(`/products?${categoryURL}${category}`);
  };

  const categoryURL = 'search=s&category=';
  const companyURL = 'search=s&company=';

  return (
    <div className='pt-12 grid gap-4'>
      {products.map((product) => {
        const { title, price, image, category, company } = product.attributes;
        return (
          <Link
            key={product.id}
            className={`card w-full transition-all duration-300 ${bg}`}
          >
            <figure>
              <img
                src={image}
                alt={title}
                className='h-64 md:h-48 w-full object-cover'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title capitalize flex justify-between font-bold'>
                {title}
                <button className='btn btn-neutral btn-circle hover:badge-secondary '>
                  <BsCart3 className='h-5 w-5' />
                </button>
              </h2>
              <span className='text-secondary font-medium'>
                {formatPrice(price)}
              </span>
              <div className='card-actions justify-end'>
                <button
                  className='badge badge-outline badge-neutral hover:opacity-[65%]'
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClick(categoryURL, category);
                  }}
                >
                  {category && category}
                </button>
                <button
                  className='badge badge-outline badge-neutral hover:opacity-[65%]'
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClick(companyURL, company);
                  }}
                >
                  {company && company}
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
