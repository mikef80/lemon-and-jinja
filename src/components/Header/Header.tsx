import React from "react";
import HamburgerMenu from "../Hamburger/Hamburger";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 border-b-2">
      <div
        role="heading"
        className="uppercase font-bold text-3xl"
      >
        Lemon + Jinja v1
      </div>
      <HamburgerMenu label='menu' />
    </div>
  );
};

export default Header;
