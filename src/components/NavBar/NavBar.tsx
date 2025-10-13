import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import menuIcon from "../../assets/images/menu.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1A3129] text-white px-6 py-3 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-[194px] h-[45px]" />
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a
          href="/"
          className="font-urb px-3 py-1 rounded-ful urb hover:text-gray-300 "
        >
          Home
        </a>
        <a href="/about" className="font-urb hover:text-gray-300">
          About
        </a>
        <a href="/team" className="font-urb hover:text-gray-300">
          Team
        </a>
        <a href="/process" className="font-urb hover:text-gray-300">
          Process
        </a>
        <a href="/pricing" className="font-urb hover:text-gray-300">
          Pricing
        </a>
        <a href="/blog" className="font-urb hover:text-gray-300">
          Blog
        </a>
        <a href="/contact" className="font-urb hover:text-gray-300">
          Contact Us
        </a>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={menuIcon} alt="menu" className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#1c1c1c] flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a
            href="/"
            className="font-urb px-3 py-1 rounded-full urb hover:text-gray-300"
          >
            Home
          </a>
          <a href="/about" className="font-urb hover:text-gray-300">
            About
          </a>
          <a href="/team" className="font-urb hover:text-gray-300">
            Team
          </a>
          <a href="/process" className="font-urb hover:text-gray-300">
            Process
          </a>
          <a href="/pricing" className="font-urb hover:text-gray-300">
            Pricing
          </a>
          <a href="/blog" className="font-urb hover:text-gray-300">
            Blog
          </a>
          <a href="/contact" className="font-urb hover:text-gray-300">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
