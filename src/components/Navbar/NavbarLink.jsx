/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

export default function NavbarLink({ title, ...props }) {
  return (
    <NavLink
      className="flex flex-col items-center gap-1 hover:text-blue-600"
      {...props}
    >
      <p>{title}</p>
      <hr className="border-none h-[1.5px] bg-blue-600 w-0" />
    </NavLink>
  );
}
