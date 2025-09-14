import React from "react";
import MyImage from "../assets/Image_pngofmine.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 shadow-md">
      {/* Left section with logo/profile */}
      <div className="flex items-center gap-4">
        <img
          src={MyImage}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-white font-medium">
          <a
            href="/"
            className="px-4 py-1 rounded-full border border-white bg-white/20 hover:bg-white/30 transition"
          >
            Home
          </a>
          <a href="/about" className="hover:text-gray-200 transition">
            About
          </a>
          <a href="/skills" className="hover:text-gray-200 transition">
            Skills
          </a>
          <a href="/projects" className="hover:text-gray-200 transition">
            Projects
          </a>
        </div>
      </div>

      {/* Right side - Contact Button */}
      <div>
        <a
          href="/contact"
          className="px-5 py-1.5 rounded-full border border-white text-white hover:bg-blue-500 transition shadow-lg"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}