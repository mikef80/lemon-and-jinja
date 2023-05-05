import React from "react";
import HamburgerMenu from "../Hamburger/Hamburger";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <div
        role="heading"
        className="uppercase font-bold text-3xl"
      >
        Lemon + Jinja v1
      </div>
      <img role='menu' src="../images/icons/apple-icon-180.png" className="h-[36px]" />
      <HamburgerMenu />
    </div>
  );
};

export default Header;
