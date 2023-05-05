import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <div
        role="heading"
        className="uppercase font-bold text-3xl"
      >
        Lemon + Jinja
      </div>
      <img src='https://via.placeholder.com/36' />
    </div>
  );
};

export default Header;
