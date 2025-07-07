import React from 'react';
import { Github, Twitter, ArrowDown, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 flex flex-col items-center justify-center px-6 py-12 sm:px-12 overflow-hidden">

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-10 left-10 w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-10 blur-3xl animate-pulse-slow" />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center sm:text-left flex flex-col items-center sm:items-start justify-center space-y-8 mb-16 z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Mark
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Forge
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl">
          In-browser Markdown editor designed for developers, writers, and creators.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping-slow" />
            <span className="text-sm text-gray-500 font-medium">Live Platform</span>
          </div>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-sm text-gray-500 font-medium">10+ Brands Trusted</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10 z-10">
        <a
          href="#"
          className="group bg-[#282828] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg flex items-center space-x-2 transition"
        >
          <span>Get Started</span>
          <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <button className="bg-white text-gray-700 px-8 py-3 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition shadow-sm">
          View Demo
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center space-x-5 mb-8 z-10">
        <a
          href="#"
          aria-label="Twitter"
          className="group bg-white p-3 rounded-xl border border-gray-100 shadow hover:shadow-md transition"
        >
          <Twitter size={20} className="text-gray-600 group-hover:text-blue-500" />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="group bg-white p-3 rounded-xl border border-gray-100 shadow hover:shadow-md transition"
        >
          <Linkedin size={20} className="text-gray-600 group-hover:text-blue-600" />
        </a>
        <a
          href="#"
          aria-label="GitHub"
          className="group bg-white p-3 rounded-xl border border-gray-100 shadow hover:shadow-md transition"
        >
          <Github size={20} className="text-gray-600 group-hover:text-gray-900" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
