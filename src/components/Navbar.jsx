import React, { useState } from "react";
import MyImage from "../assets/Image_pngofmine.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 shadow-md">
      {/* Left section with logo/profile */}
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={MyImage}
          alt="Profile"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white/30 hover:border-white/60 transition-all duration-300"
        />

        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-white font-medium">
          <a
            href="/"
            className="px-3 py-1 lg:px-4 rounded-full border border-white bg-white/20 hover:bg-white/30 hover:scale-105 transition-all duration-300 transform"
          >
            Home
          </a>
          <a 
            href="/about" 
            className="hover:text-gray-200 transition-colors duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="/skills" 
            className="hover:text-gray-200 transition-colors duration-300 relative group"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="/projects" 
            className="hover:text-gray-200 transition-colors duration-300 relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Right side - Contact Button - Hidden on mobile */}
      <div className="hidden md:block">
        <a
          href="/contact"
          className="px-4 py-1.5 lg:px-5 rounded-full border border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute md:hidden top-full left-0 right-0 bg-blue-700 shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-3">
            <a
              href="/"
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="px-4 py-2 rounded-lg hover:bg-white/10 text-white transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/skills"
              className="px-4 py-2 rounded-lg hover:bg-white/10 text-white transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="/projects"
              className="px-4 py-2 rounded-lg hover:bg-white/10 text-white transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/contact"
              className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-300 border border-white/30 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}