import React from "react";
import { Link } from "wouter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import profileImg from "../assets/Image_pngofmine.png";
import Home from "./Home";
import About from "./About";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 shadow-md">
      {/* Left section with logo/profile */}
      <div className="flex items-center gap-4">
        <img
          src={profileImg}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-white font-medium">
          <Link href="/">
            <a className="px-4 py-1 rounded-full border border-white bg-white/20 hover:bg-white/30 transition">
              Home
            </a>
          </Link>
          <Link href="/About">
            <a className="hover:text-gray-200 transition">About</a>
          </Link>
          <Link href="/skills">
            <a className="hover:text-gray-200 transition">Skills</a>
          </Link>
          <Link href="/projects">
            <a className="hover:text-gray-200 transition">Projects</a>
          </Link>
        </div>
      </div>

      {/* Right side - Contact Button */}
      <div>
        <Link href="/contact">
          <a className="px-5 py-1.5 rounded-full border border-white text-white hover:bg-blue-500 transition shadow-lg">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
}
