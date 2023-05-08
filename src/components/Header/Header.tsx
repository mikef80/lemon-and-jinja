import React from "react";
import HamburgerMenu from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 border-b-2">
      <Link
      to='/'
        role="mainHeading"
        className="uppercase font-bold text-3xl"
      >
        <h1>Lemon + Jinja v1</h1>
      </Link>
      <HamburgerMenu label='menu' />
    </div>
  );
};

export default Header;
