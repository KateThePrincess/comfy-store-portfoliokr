import { useDispatch } from 'react-redux';
import { editItem, removeItem, clearCart } from '../features/cart/cartSlice';
import { formatPrice, generateAmountOptions } from '../utils';

const CartItem = ({ cartItem }) => {
  const {
    cartID,
    title,
    price,
    image,
    amount,
    company,
    productColor,
    shipping,
  } = cartItem;
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(
      editItem({
        cartID,
        amount: parseInt(e.target.value),
      })
    );
  };

  const clearAllItems = () => {
    dispatch(clearCart());
  };

  return (
    <article
      key={cartID}
      className='mb-8 flex flex-col gap-y-4 sm:flex-row flex-wrap rounded-xl p-4 bg-base-200 relative'
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className='h-24 w-24 rounded-md sm:h-32 sm:w-32 object-cover'
      />

      {/* INFO */}
      <div className='sm:ml-8 sm:w-48'>
        {/* TITLE */}
        <h3 className='capitalize font-medium'>{title}</h3>
        {/* COMPANY */}
        <h4 className='capitalize text-sm font-medium text-neutral mt-1'>
          {company}
        </h4>

        <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
          color:
          <span
            className={`badge badge-lg mr-2 w-8 h-5`}
            style={{ backgroundColor: productColor }}
          />
        </p>
      </div>
      <div className='sm:ml-12'>
        {/* AMOUNT */}
        <div className='form-control max-w-xs flex'>
          <label
            htmlFor='amount'
            className='label p-0 flex flex-col gap-2 items-start'
          >
            <span className='label-text'>Amount:</span>
            <select
              name='amount'
              id='amount'
              className='select select-base select-bordered bg-transparent border-neutral text-neutral select-xs'
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(amount + 5)}
            </select>
          </label>
        </div>
        {/* REMOVE */}
        <button
          className='mt-2 badge badge-neutral badge-md bg-transparent text-neutral text-sm capitalize hover:opacity-50 transition-all ease-in-out duration-300 absolute bottom-4 right-4'
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
        {/* <button onClick={clearAllItems}>clear all</button> */}
      </div>
      {/* PRICE */}
      <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
