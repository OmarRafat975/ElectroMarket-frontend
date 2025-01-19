/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { backIcon } from '../../assets/icons';

export default function MobileNavMenu({ isActive, setIsActive }) {
  return (
    <div
      className={`absolute z-10  top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
        isActive ? 'w-full' : 'w-0'
      }`}
    >
      <div className="flex flex-col text-gray-600">
        <div
          onClick={() => setIsActive(false)}
          className="flex items-center gap-2 p-3 text-xs cursor-pointer"
        >
          {backIcon}Back
        </div>
        <NavLink
          onClick={() => setIsActive(false)}
          className="py-2 pl-6 border hover:text-blue-600"
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          onClick={() => setIsActive(false)}
          className="py-2 pl-6 border hover:text-blue-600"
          to="/products"
        >
          PRODUCTS
        </NavLink>
        <NavLink
          onClick={() => setIsActive(false)}
          className="py-2 pl-6 border hover:text-blue-600"
          to="/about"
        >
          ABOUT US
        </NavLink>
        <NavLink
          onClick={() => setIsActive(false)}
          className="py-2 pl-6 border hover:text-blue-600 "
          to="/contact"
        >
          CONTACT US
        </NavLink>
      </div>
    </div>
  );
}
