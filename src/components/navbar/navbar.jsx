// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-gray-800 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">
        <Link to="/">Logo</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </li>
        <li className="relative group" >
          <button className="text-white focus:outline-none flex"> 
            Services
            <svg
              className="w-4 h-4 ml-1 mt-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div className="absolute z-10 left-0 mt-2 space-y-2 hidden group-hover:block bg-white border rounded-md shadow-lg">
            <Link to="/services/cleaning" className="block px-4 py-2 text-gray-800">
              Cleaning
            </Link>
            <Link to="/services/care" className="block px-4 py-2 text-gray-800">
              Care
            </Link>
            <Link to="/services/repairing" className="block px-4 py-2 text-gray-800">
              Repairing
            </Link>
          </div>
        </li>
      </ul>
      <div>
        <Link to="/signin" className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
