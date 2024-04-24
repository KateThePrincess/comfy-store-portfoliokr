import { useLoaderData, Link } from 'react-router-dom';
import { formatPrice, customFetch, generateAmountOptions } from '../utils';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};
const categoryUrl = '?search=&category=';
const SingleProduct = () => {
  const { product } = useLoaderData();
  const {
    image,
    title,
    price,
    description,
    colors,
    company,
    category,
    shipping,
  } = product.attributes;

  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(0);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
    shipping,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 500);
  };

  return (
    <section>
      <div className='text-md breadcrumbs transition-all duration-300 ease '>
        <ul>
          <li>
            <Link
              to='/'
              className='badge badge-outline badge-md hover:badge-outline hover:badge-neutral capitalize '
              style={{ textDecoration: 'none' }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/products'
              className='badge badge-outline badge-md hover:badge-outline hover:badge-neutral capitalize '
              style={{ textDecoration: 'none' }}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to={`/products/${categoryUrl}${category}`}
              className='badge badge-outline badge-md hover:badge-outline hover:badge-neutral capitalize '
              style={{ textDecoration: 'none' }}
            >
              {category}
            </Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 md:grid-cols-2 md:gap-x-16 relative'>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className='md:sticky top-0 w-full h-[25rem] md:h-[40rem] object-cover rounded-xl md:w-[100%] '
        />
        <div className='pt-5 '>
          <h1 className='capitalize text-4xl font-bold tracking-wide '>
            {title}
          </h1>
          <h4 className='text-2xl text-neutral font-bold mt-2 tracking-wide'>
            {company}
          </h4>
          <p className='mt-3 text-xl'>{dollarsAmount}</p>
          <p className='mt-6 leading-6 text-sm text-justify'>{description}</p>
          <div className='mt-6 flex justify-between'>
            {/* COLORS */}
            <h4 className='text-md font-medium capitalize'>color variants</h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type='button'
                    className={`badge badge-lg mr-2 w-8 h-5 ${
                      color === productColor &&
                      `scale-[1.1] relative before:absolute before:z-[-1] before:left-50% before:top-50% before:translate-[-50%] before:w-1 before:h-1 before:bg-primary before:rounded-full`
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  />
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className='form-control mt-6'>
            {/* <label htmlFor='amount' className='label'>
              <h4 className='text-md font-medium capitalize'>amount</h4>
            </label> */}
            <select
              id='amount'
              className={`select select-secondary  w-[100%] ${
                amount < 1 && isButtonClicked && 'animate-custom-shake'
              }`}
              onChange={handleAmount}
              defaultValue=''
            >
              <option disabled value=''>
                Select an amount
              </option>
              {generateAmountOptions(10)}
            </select>
          </div>
          {/* CART BTN */}
          <div className='mt-10'>
            <button
              className={`btn btn-secondary btn-md btn-block uppercase ${
                amount < 1 && 'cursor-not-allowed'
              }`}
              onClick={amount >= 1 ? addToCart : handleClick}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
