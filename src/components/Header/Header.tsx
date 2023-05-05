import React from "react"
import image from '../images/icons/apple-icon-180.png'

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <div
        role="heading"
        className="uppercase font-bold text-3xl"
      >
        Lemon + Jinja v1
      </div>
      <img role='menu' src={image} className="h-[36px]" />
    </div>
  );
};

export default Header;
