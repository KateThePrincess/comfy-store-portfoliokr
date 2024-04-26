import { useSelector } from 'react-redux';
import { CartTotals, CheckoutForm, SectionTitle } from '../components';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn('You must be logged in!');
    return redirect('/login');
  }
  return null;
};
const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return (
      <SectionTitle
        text='Your cart is empty.'
        bg={'bg-base-200 p-5 rounded-xl text-center'}
      />
    );
  }
  return (
    <>
      <SectionTitle text='place your order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-stretch'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
