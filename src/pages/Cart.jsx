import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';
const Cart = () => {
  //temp
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <SectionTitle
        text='Your cart is currently empty.'
        bg='bg-base-200 p-4 rounded-xl'
      />
    );
  }
  return (
    <>
      <SectionTitle text='Shopping Cart' bg='bg-base-200 p-4 rounded-xl' />
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
