import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GiEvilLove } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { MdAccountCircle, MdOutlineShoppingBag } from "react-icons/md";
import { FaRegStar, FaUserLarge } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { CgLogOut } from "react-icons/cg";

const Navbar = () => {
  const navItem = [
    { id: 1, item: "Home" },
    { id: 2, item: "Contact" },
    { id: 3, item: "About" },
    { id: 4, item: "Sign Up" },
  ];

  const [Account, setAccount] = useState(false);
  const userAccountRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userAccountRef.current &&
        !userAccountRef.current.contains(event.target)
      ) {
        setAccount(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleAccountMenu = () => {
    setAccount((prev) => !prev);
  };

  return (
    <div className="pt-10 pb-4 border-b-[1.5px] border-b-Text1">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <h3 className="font-inter font-bold text-xl text-black cursor-pointer leading-6">
              Exclusive
            </h3>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="flex items-center gap-x-12">
              {navItem.map((nav) => (
                <li key={nav.id} className="menuUnderline">
                  <NavLink
                    to={`${nav.item}`}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-black font-poppins text-base font-medium"
                        : isActive
                        ? "text-red-500 font-poppins text-base font-normal"
                        : "text-black font-poppins text-base font-normal"
                    }>
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="basis-1/3 flex justify-between items-center relative">
            {/* Search Bar */}
            <div>
              <input
                type="text"
                className="py-3 w-[300px] rounded-sm px-2 bg-Secondary pr-14 placeholder:font-poppins placeholder:text-sm placeholder:text-black placeholder:opacity-50"
                placeholder="What are you looking for?"
              />
              <span className="absolute cursor-pointer text-3xl top-1/2 -translate-y-1/2 left-64">
                <IoSearch />
              </span>
            </div>

            {/* Icons */}
            <div className="flex gap-x-5 text-3xl relative items-center">
              <span className="cursor-pointer">
                <GiEvilLove />
              </span>
              <span className="cursor-pointer amount">
                <TiShoppingCart />
              </span>

              {/* Account Dropdown */}
              <div className="relative">
                <span
                  className="text-blue-600 cursor-pointer text-4xl"
                  ref={userAccountRef}
                  onClick={toggleAccountMenu}>
                  <MdAccountCircle />
                </span>

                {Account && (
                  <span className="absolute top-[160%] px-5 py-5 left-[-745%] w-[300px] drop-shadow-2xl flex flex-col gap-y-4 rounded-md text-white font-poppins font-medium bg-black opacity-90 text-lg">
                    <div className="flex cursor-pointer gap-x-4 hover:text-red-600 transition-all hoverItem items-center pl-1">
                      <FaUserLarge />
                      <h3>Manage My Account</h3>
                    </div>
                    <div className="flex cursor-pointer gap-x-4 hover:text-red-600 transition-all hoverItem">
                      <MdOutlineShoppingBag className="text-2xl" />
                      <h3>My Order</h3>
                    </div>
                    <div className="flex cursor-pointer gap-x-4 hover:text-red-600 transition-allitems-center hoverItem">
                      <ImCancelCircle className="text-2xl" />
                      <h3>My Cancellations</h3>
                    </div>
                    <div className="flex cursor-pointer gap-x-4 hover:text-red-600 transition-all items-center hoverItem">
                      <FaRegStar className="text-2xl" />
                      <h3>My Reviews</h3>
                    </div>
                    <div className="flex cursor-pointer gap-x-4 hover:text-red-600 transition-all items-center hoverItem">
                      <CgLogOut className="text-2xl" />
                      <h3>Logout</h3>
                    </div>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
