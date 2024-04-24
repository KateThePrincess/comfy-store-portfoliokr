import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
  };
  return (
    <header className='bg-neutral py-2 text-neutral-content'>
      <div className='align-element flex justify-center sm:justify-end'>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-sm dm:text-md capitalize'>
              Hello, {user.username}
            </p>
            <button
              className='btn btn-sm btn-ghost capitalize bg-secondary'
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link
              to='/login'
              className=' text-xs sm:text-sm font-normal hover:opacity-[70%]'
            >
              Sign in/Guest
            </Link>
            <Link
              to='/register'
              className='text-xs sm:text-sm font-normal hover:opacity-[70%]'
            >
              Create Account
            </Link>
          </div>
        )}
        {/* USER  */}
      </div>
    </header>
  );
};
export default Header;
