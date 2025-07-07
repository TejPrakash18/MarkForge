import React from "react";
import logo from "../assets/logo.png"; // adjust path as needed

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="MarkForge Logo" className="h-40 w-auto" />
          </div>

          {/* Login Button */}
          <div>
            <button className="px-4 py-2 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#282828] transition duration-200">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
