import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

// const url = '/products?search=&shipping=on';
// export const loader = async () => {
//   const response = await customFetch(url);
//   const products = response.data.data;
//   return { products };
// };
const Cart = () => {
  //temp
  const user = useSelector((state) => state.userState.user);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <SectionTitle
        text='Your cart is currently empty.'
        bg={'bg-base-200 p-5 rounded-xl text-center'}
      />
    );
  }

  return (
    <>
      <SectionTitle text='Shopping Cart' bg='p-4 text-neutral' />
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>{<CartItemsList />}</div>
        <div className='lg:col-span-4'>
          <CartTotals />
          {user ? (
            <Link
              to='/checkout'
              className='btn btn-neutral btn-block mt-8 uppercase'
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to='/login'
              className='btn btn-neutral btn-block mt-8 uppercase'
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
