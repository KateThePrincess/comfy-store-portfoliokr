import { useSelector } from 'react-redux';
import { CartTotals, CheckoutForm, SectionTitle } from '../components';

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text='Your cart is empty.' />;
  }
  return <h1 className='text-4xl'>Checkout</h1>;
};
export default Checkout;
