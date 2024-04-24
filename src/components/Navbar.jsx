import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

import { useDispatch, useSelector } from 'react-redux'; //when you want to use values
import { toggleTheme } from '../features/user/userSlice';

const Navbar = () => {
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const { numItemsInCart } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <nav
      className={`bg-base-200/75 backdrop-blur-[50px] w-[100vw] sticky top-0 transition-all duration-300 ease-in-out z-[100]`}
    >
      <div className='navbar align-element'>
        <div className='navbar-start'>
          <NavLink
            to='/'
            className='hidden lg:flex text-3xl items-center font-bold text-secondary'
          >
            ComfyStore
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label
              tabIndex={0}
              className='btn btn-ghost btn-circle btn-lg lg:hidden'
            >
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-md dropdown-content mt-3 z-[1] p-2 bg-base-200 rounded-box w-52 gap-3'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal gap-3'>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* THEME SETUP - ICONS */}
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            <BsSunFill className='swap-on h-5 w-5' />
            <BsMoonFill className='swap-off h-5 w-5' />
          </label>
          {/* CART */}
          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-lg ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span
                className={`badge badge-sm badge-secondary indicator-item ${
                  numItemsInCart < 1 && 'hidden'
                } `}
              >
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
