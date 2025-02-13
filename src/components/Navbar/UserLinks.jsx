/* eslint-disable react/prop-types */
import {
  cartIcon,
  menuIcon,
  profileIcon,
  searchIcon,
} from '../../assets/icons';
import { useContext } from 'react';
import { ShopContext } from '../../context/ctxInit.js';
import useAxiosPrivate from '../../hooks/useAxiosPrivate.js';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function UserLinks({ setIsActive }) {
  const axiosPrivate = useAxiosPrivate();
  const { setShowSearch, cartItems, authState, handleResetCart, handleLogout } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const location = useLocation();

  async function handleLogoutfn() {
    try {
      const response = await axiosPrivate.get('/users/logout');
      if (response.status === 204) {
        navigate('/login');
        handleResetCart();
        handleLogout();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center gap-4">
      {/* Search */}

      {location.pathname.includes('products') && (
        <button
          onClick={() => setShowSearch((prev) => !prev)}
          className="hover:text-blue-600"
        >
          {searchIcon}
        </button>
      )}

      {/* profile */}
      <div className="group relative">
        <div
          onClick={() =>
            authState?.token ? navigate('/profile') : navigate('/login')
          }
          className="flex hover:text-blue-600 my-1 items-center justify-end"
        >
          {profileIcon}
          <p className="text-sm">
            {authState?.name ? `hi, ${authState.name}` : null}
          </p>
        </div>
        {authState?.token && (
          <div className="group-hover:block hidden absolute dropdown-menu  right-0 pt-4 z-10 border-b border-x border-gray-600 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-[#e3f2fd] text-gray-500 rounded">
              <p
                onClick={() => navigate('/profile')}
                className="cursor-pointer hover:text-blue-600"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate('/my-orders')}
                className="cursor-pointer hover:text-blue-600"
              >
                Orders
              </p>
              <p
                onClick={handleLogoutfn}
                className="cursor-pointer hover:text-blue-600"
              >
                Logout
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Cart */}
      <NavLink to="/cart" className="group hover:text-blue-600 relative">
        {cartIcon}
        <p className="cart-num absolute right-[-8px] bottom-[-10px] w-4 text-center leading-4 group-hover:bg-blue-600 bg-black text-white aspect-square rounded-full text-[10px]">
          {totalItems}
        </p>
      </NavLink>
      <button onClick={() => setIsActive(true)} className="sm:hidden">
        {menuIcon}
      </button>
    </div>
  );
}
