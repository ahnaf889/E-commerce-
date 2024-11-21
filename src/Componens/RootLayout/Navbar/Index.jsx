import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItem = [
    {
      id: 1,
      item: "Home",
    },
    {
      id: 2,
      item: "Contact",
    },
    {
      id: 3,
      item: "About",
    },
    {
      id: 4,
      item: "Sign Up",
    },
  ];

  return (
    <div className="pt-10 pb-4 border-b-[1.5px] border-b-Text1">
      <div className="container">
        <div>
          <h3 className="font-inter font-bold text-text-2xl text-black cursor-pointer leading-6">
            Exclusive
          </h3>
        </div>
        <div>
          <ul>
            {navItem?.map((nav) => {
              return (
                <li key={nav.id}>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "bg-red-600" : isActive ? "bg-green-500" : ""
                    }>
                    {nav.item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
