import React from "react";
import { Link } from "react-router-dom";

export const NavBarLink = () => {
  return (
    <div className="w-full md:flex md:items-center md:justify-end">
      <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
        <li>
          <Link
            className="text-gray-800 hover:text-blue-600 font-semibold transition duration-200"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-800 hover:text-blue-600 font-semibold transition duration-200"
            to="/profile"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-800 hover:text-blue-600 font-semibold transition duration-200"
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-800 hover:text-blue-600 font-semibold transition duration-200"
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
