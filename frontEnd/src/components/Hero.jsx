import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      {/* Navbar sits at the top */}
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen bg-[#1a1a1a] relative overflow-hidden flex flex-col justify-center items-center px-4">

        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />

        {/* Main Content */}
        <div className="z-10 text-center sm:text-left max-w-4xl flex flex-col items-center sm:items-start justify-center space-y-8 mt-24">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Mark
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Forge
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-2xl">
            In-browser Markdown editor designed for developers, writers, and
            creators.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
              <span className="text-sm text-gray-400 font-medium">
                Live Platform
              </span>
            </div>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-sm text-gray-400 font-medium">
              10+ Brands Trusted
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#"
              className="group bg-[#282828] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg flex items-center space-x-2 transition"
            >
              <span>Get Started</span>
              <HiExternalLink className="text-lg group-hover:text-gray-300" />
            </a>

            <button className="bg-white text-gray-700 px-8 py-3 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition shadow-sm">
              View Demo
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="z-10 mt-16 mb-10 flex items-center justify-center space-x-5">
          <a
            href="#"
            aria-label="Twitter"
            className="group bg-white p-3 rounded-xl border border-gray-100 shadow hover:shadow-md transition"
          >
            <FaXTwitter size={20} className="text-gray-600 group-hover:text-blue-500" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="group bg-white p-3 rounded-xl border border-gray-100 shadow hover:shadow-md transition"
          >
            <FaLinkedinIn size={20} className="text-gray-600 group-hover:text-blue-600" />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="group bg-white p-3 rounded-xl border border-gray-100 shadow hover:shadow-md transition"
          >
            <FaGithub size={20} className="text-gray-600 group-hover:text-gray-900" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
