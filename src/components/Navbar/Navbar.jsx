import { Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import { useState } from 'react';
import MobileNavMenu from './MobileNavMenu';
import UserLinks from './UserLinks';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="flex items-center justify-between py-5 font-medium bg-[#e3f2fd] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] z-10">
      {/* Logo */}
      <Link
        to="/"
        className="font-bold text-blue-600 text-xl md:text-2xl xl:text-3xl "
      >
        Horeca Market
      </Link>
      {/* Pages Links */}
      <ul className="hidden sm:flex gap-5 text-gray-800">
        <NavbarLink to="/" title="HOME" />
        <NavbarLink to="/products" title="PRODUCTS" />
        <NavbarLink to="/about" title="ABOUT" />
        <NavbarLink to="/contact" title="CONTACT" />
      </ul>
      {/* User Links */}
      <UserLinks setIsActive={setIsActive} />
      {/* Sidebar menu for mobile screen */}
      <MobileNavMenu isActive={isActive} setIsActive={setIsActive} />
    </nav>
  );
}
