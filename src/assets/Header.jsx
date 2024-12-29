"use client";

import { FiSearch, FiUser } from "react-icons/fi"; // Import the search icon
import { FiShoppingCart } from "react-icons/fi"; // Import the cart icon
import { useState } from "react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="bg-white md:py-1 py-2 border-gray-200 bg-[background: #FFFFFF;
]"
    >
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
  <a
    href="/image/Logo.svg"
    className="flex items-center space-x-3 rtl:space-x-reverse"
  >
    <img
      src="/logo.svg"
      className="h-[50px] md:h-[77px] w-[100px] md:w-[149px]"
      alt="Flowbite Logo"
    />
  
  </a>
  <div className="flex md:order-2 space-x-4 rtl:space-x-reverse">
    <div className="flex flex-row items-center space-x-4 flex-nowrap">
    <FiSearch className="text-2xl md:text-2xl text-gray-700" /> {/* Search Icon */}
    <FiShoppingCart className="text-2xl md:text-2xl text-gray-700" /> {/* Cart Icon */}
    <FiUser className="text-2xl md:text-2xl text-gray-700" /> {/* User Icon */}
      
    </div>
  </div>
  <div
    className={`items-center justify-between ${
      isOpen ? "block" : "hidden"
    } w-full md:flex md:w-auto md:order-1`}
    id="navbar-cta"
  >
    <ul className="flex flex-col font-normal p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
      <li>
        <a href="#" className="block py-2 px-3 text-[#EB4F23]"  aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3">
          LED Lighting
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3">
          Whole House Package
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3">
          Lighting
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3">
          About Us
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3">
          Contact Us
        </a>
      </li>
    </ul>
  </div>
</div>

    </nav>
  );
};

export default Header;
