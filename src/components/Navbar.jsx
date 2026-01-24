import React, { useState } from "react";
import MyImage from "../assets/Image_pngofmine.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  const isActive = (path) => currentPath === path;

  const activeClass =
    "px-3 py-1 lg:px-4 rounded-full border border-white bg-white/20";
  const normalClass =
    "hover:text-gray-200 transition-colors duration-300 relative group";

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-gradient-to-b from-blue-600 to-blue-600 shadow-md">
      
      {/* Left section */}
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={MyImage}
          alt="Profile"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white/30 hover:border-white/60 transition-all duration-300"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-white font-medium">

          <a
            href="/"
            className={
              isActive("/")
                ? activeClass
                : normalClass
            }
          >
            Home
            {!isActive("/") && (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            )}
          </a>

          <a
            href="/about"
            className={
              isActive("/about")
                ? activeClass
                : normalClass
            }
          >
            About
            {!isActive("/about") && (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            )}
          </a>

          <a
            href="/skills"
            className={
              isActive("/skills")
                ? activeClass
                : normalClass
            }
          >
            Skills
            {!isActive("/skills") && (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            )}
          </a>

          <a
            href="/projects"
            className={
              isActive("/projects")
                ? activeClass
                : normalClass
            }
          >
            Projects
            {!isActive("/projects") && (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            )}
          </a>

        </div>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
        <span className={`bg-white block h-0.5 w-6 rounded-sm my-1 transition-all ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
      </button>

      {/* Contact Button */}
      <div className="hidden md:block">
        <a
          href="/contact"
          className={
            isActive("/contact")
              ? "px-4 py-1.5 lg:px-5 rounded-full border border-white bg-white text-blue-600"
              : "px-4 py-1.5 lg:px-5 rounded-full border border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
          }
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute md:hidden top-full left-0 right-0 bg-blue-700 shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-3">
            {["/", "/about", "/skills", "/projects", "/contact"].map((path) => (
              <a
                key={path}
                href={path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-white transition-all ${
                  isActive(path) ? "bg-white/20 border border-white/30" : "hover:bg-white/10"
                }`}
              >
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
