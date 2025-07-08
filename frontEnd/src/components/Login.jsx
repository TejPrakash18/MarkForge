import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] relative flex items-center justify-center overflow-hidden">
      {/*  Grid Background */}
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />

      {/* Login Card with Animation */}
      <motion.div
        className="relative z-10 bg-black bg-opacity-60 backdrop-blur-md border border-[#1A1A1A] rounded-xl p-10 w-[400px] shadow-xl text-center"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* ✅ Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
          Mark
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Forge
          </span>
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Follow your business insights the meaningful way.
        </p>

        {/* ✅ Google Login */}
        <button
          type="button"
          className="w-full bg-[#282828] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition mb-3"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* ✅ Divider */}
        <div className="text-gray-400 text-sm mb-3">or sign in with email</div>

        {/* ✅ Email Field */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 rounded-lg bg-[#1A1A1A] text-white border border-[#282828] focus:outline-none"
          required
        />

        {/* ✅ Password Field */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#1A1A1A] text-white border border-[#282828] focus:outline-none"
          required
        />

        {/* ✅ Login Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
        >
          Login
        </button>

        {/* ✅ Footer Note */}
        <p className="text-gray-500 text-xs mt-4">
          By signing up, you agree to the{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </motion.div>
    </div>
  );
}
