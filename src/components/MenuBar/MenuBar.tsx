import React from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <div>
      <NavLink to="/list">List</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
    </div>
  );
};

export default MenuBar;
