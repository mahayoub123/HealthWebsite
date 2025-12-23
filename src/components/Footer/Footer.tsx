import React from "react";
import footerIcon1 from "../../assets/images/email.svg";
import footerIcon2 from "../../assets/images/tel.svg";
import footerIcon3 from "../../assets/images/location.svg";
import logo from "../../assets/images/Logo.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A3129] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12"></div>

      <div className="border-t border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
          <div className="text-center">
            <img className="text-2xl font-bold" src={logo} alt="logo" />
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <li className="font-urb hover:text-gray-300 transition cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="font-urb hover:text-gray-300 transition cursor-pointer">
              <a href="/about">About</a>
            </li>
            <li className="font-urb hover:text-gray-300 transition cursor-pointer">
              <a href="/team">Team</a>
            </li>
            <li className="font-urb hover:text-gray-300 transition cursor-pointer">
              <a href="/process">Process</a>
            </li>
            <li className="font-urb hover:text-gray-300 transition cursor-pointer">
              <a href="/pricing">Price</a>
            </li>
            <li className="font-urb hover:text-gray-300 transition cursor-pointer">
              <a href="/blog">Blog</a>
            </li>
            <li className="font-urb hover:text-gray-300 transition cursor-pointer">
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400 text-sm">
            <p className="font-urb"> hello@skillbridge.com</p>
            <p className="font-urb"> +91 91813 23 2309</p>
            <p className="font-urb">Somewhere in the World</p>
            <p>
              © Debeloped by Front End Developer: Mahmoud Ayoub. All Rights
              Reserved
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={footerIcon1} alt="icon" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={footerIcon2} alt="icon" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={footerIcon3} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
