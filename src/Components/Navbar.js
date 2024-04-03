import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import logo from "../Utilities/Icons/INVESTA Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          {/* <span className="text-white text-lg font-semibold ml-2">FinTech</span> */}
        </div>

        {/* Links */}
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="/home"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* User Icon */}
        <div className="flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faUser} color="white" className="mx-1" />
          <span className="text-white ml-2">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
