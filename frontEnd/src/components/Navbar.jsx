import React from "react";
import logo from "../assets/logo.png"; // Adjust the path if needed
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#1A1A1A] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="MarkForge Logo"
              className="h-50 w-auto object-contain"
            />
          </div>

          {/* Login Button */}
          <div>
            <Link to="/login">
              <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
