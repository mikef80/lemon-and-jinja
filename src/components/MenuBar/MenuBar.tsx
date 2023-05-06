import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";

const MenuBar = () => {
  return (
    <div className="flex  items-center h-[40px] font-bold text-lg border-b-2 ite">
      <MenuItem destination='/list'>List</MenuItem>
      <MenuItem destination='/favourites'>Favourites</MenuItem>
    </div>
  );
};

export default MenuBar;
