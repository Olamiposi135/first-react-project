import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [navbar, setNav] = useState(false);

  const handleNav = () => {
    setNav(!navbar);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] m-auto px-5">
      <h1 className="font-bold text-3xl text-emerald-300 w-full">OLAMIPO.</h1>
      <ul className=" hidden md:flex">
        <li className="cursor-pointer p-4 ">Home</li>
        <li className="cursor-pointer p-4">Company</li>
        <li className="cursor-pointer p-4">Resources</li>
        <li className="cursor-pointer p-4">About</li>
        <li className="cursor-pointer p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {navbar ? <RiCloseLargeLine size={24} /> : <FiMenu size={24} />}
      </div>

      <div
        className={
          navbar
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="font-bold text-3xl text-emerald-300 w-full m-4">
          OLAMIPO.
        </h1>
        <ul className="  uppercase p-4">
          <li className="cursor-pointer p-4 border-b border-b-gray-700">
            Home
          </li>
          <li className="cursor-pointer p-4 border-b border-b-gray-700">
            Company
          </li>
          <li className="cursor-pointer p-4 border-b border-b-gray-700">
            Resources
          </li>
          <li className="cursor-pointer p-4 border-b border-b-gray-700">
            About
          </li>
          <li className="cursor-pointer p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
