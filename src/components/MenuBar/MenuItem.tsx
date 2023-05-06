import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({
  children,
  destination,
}: {
  children: string;
  destination: string;
}) => {
  const defaultStyling = "h-full w-[50%] justify-center items-center flex";
  const activeStyling = `${defaultStyling} text-white bg-[#427E81]`;
  const inactiveStyling = `${defaultStyling} text-[#427E81] bg-white`;

  return (
    <NavLink
        role={`Link to ${children}`}
      to={destination}
      className={({ isActive }) =>
        isActive ? activeStyling : inactiveStyling
      }
    >
      {children}
    </NavLink>
  );
};

export default MenuItem;
