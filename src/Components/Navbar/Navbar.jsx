import React from "react";
import logo from "../../assets/Logo/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";

import DarkMode from "./DarkMode";
import { BiDroplet } from "react-icons/bi";

const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    href: "/#toprated",
  },
  {
    id: 3,
    name: "Kids Wear",
    href: "/#kidswear",
  },
  {
    id: 4,
    name: "Mens Wear",
    href: "/#menswear",
  },
];

const dropDownMenu = [
  {
    id : 1 ,
    name : "Trending products",
    href: "/#trendingproducts"
  },
  {
    id : 2 ,
    name : "Best Selling products",
    href: "/#sellingproducts"
  },
  {
    id : 3 ,
    name : "Top Rated",
    href: "/#topratedprodects"
  },
]

const Navbar = () => {
  return (
    <header>
      <div className="bg-primary/50  dark:bg-secondary shadow-md">
        <div className="container  rounded ">
          <div className="  py-3 px-2  flex  gap-3 justify-between ">
            {/* Logo Section  */}

            <div>
              <a href="" className="flex gap-3">
                <img src={logo} alt="" className="w-[40px]" />
                <h1 className="text-2xl sm:text-3xl font-bold dark:text-white ">
                  Shopsy
                </h1>
              </a>
            </div>

            {/* search bar section and order button */}

            <div className="flex gap-6">
              <div className="flex gap-3 items-center ">
                <div className="relative group ">
                  <input
                    type="text"
                    name=""
                    className=" search-bar"
                    id=""
                    placeholder="Search"
                  />
                  <IoSearchOutline className="hidden sm:block  absolute top-1/2 right-3 -translate-y-1/2  cursor-pointer text-2xl hover:text-secondary dark:text-secondary dark:hover:text-primary " />
                </div>

                {/* orderButton */}

                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary py-1 px-3 rounded-full text-white transition-all duration-300 flex items-center gap-3 group">
                    <span className=" hidden  group-hover:block transition-all duration-300">
                      Order
                    </span>

                    <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  </button>
                </div>
              </div>

              {/* darkMode */}

              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
        {/* lower Navbar */}
      </div>
      <div className="hidden sm:flex justify-center flex-wrap dark:bg-gray-900 shadow-md dark:drop-shadow-lg p-1 relative z-[9999]">
        <ul className="flex sm:gap-4 items-center text-wrap   dark:text-white  ">
          {navLinks.map((items) => (
            <li key={items.id} className="hover:text-secondary ">
              <a href={items.href} className="inline-block px-4 duration-200">
                {items.name}
              </a>
            </li>
          ))}
          {/* dropDown menu  */}

          <li className="  relative group  ">
            <a
              href=""
              className="flex gap-1 items-center justify-center hover:text-secondary duration-200"
            >
              Trendings
              <span>
                <FaCaretDown className="hidden sm:block group-hover:rotate-180 duration-200" />
              </span>
            </a>
            {/* links */}
            <div className="">
              <ul className="hidden group-hover:block absolute w-[160px] bg-white z-50   dark:bg-gray-800  space-y-2 rounded-md  p-1 ">
                {dropDownMenu.map((items) => (
                  <li
                    key={items.id}
                    className="hover:bg-primary/20 dark:hover:bg-primary/59 py-2"
                  >
                    <a href={items.href} className=" ">
                      {items.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
