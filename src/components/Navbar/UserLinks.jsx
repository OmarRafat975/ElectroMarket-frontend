/* eslint-disable react/prop-types */
import {
  cartIcon,
  menuIcon,
  profileIcon,
  searchIcon,
} from '../../assets/icons';
import { useContext } from 'react';
import { ShopContext } from '../../context/ctxInit.js';

import { NavLink, useLocation } from 'react-router-dom';

export default function UserLinks({ setIsActive }) {
  const { setShowSearch, cartItems } = useContext(ShopContext);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const location = useLocation();

  return (
    <div className="flex items-center gap-6">
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
        <button className="hover:text-blue-600 my-1">{profileIcon}</button>
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10 border-b border-x border-gray-600 ">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-[#e3f2fd] text-gray-500 rounded">
            <p className="cursor-pointer hover:text-blue-600">My Profile</p>
            <p className="cursor-pointer hover:text-blue-600">Orders</p>
            <p className="cursor-pointer hover:text-blue-600">Logout</p>
          </div>
        </div>
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
