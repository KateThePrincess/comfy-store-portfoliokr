import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';
const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between text-sm border-b border-primary/25 pb-4'>
          <span>Subtotal</span>
          <span className='font-medium'>{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between text-sm border-b border-primary/25 pb-4'>
          <span>Shipping</span>
          <span className='font-medium'>{formatPrice(shipping)}</span>
        </p>
        {/* TAX */}
        <p className='flex justify-between text-sm border-b border-primary/25 pb-4'>
          <span>Tax</span>
          <span className='font-medium'>{formatPrice(tax)}</span>
        </p>
        {/* ORDER TOTAL */}
        <p className='flex justify-between text-md mt-4'>
          <span>Total</span>
          <span className='font-medium text-secondary'>
            {formatPrice(orderTotal)}
          </span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
