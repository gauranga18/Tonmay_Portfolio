import React from "react";
import { Link } from "wouter";
import MyImage from "../assets/Image_pngofmine.png";
import Navbar from "./Navbar";
export default function Home() {
  return (
<div>
  <Navbar/>
  <section className="min-h-screen bg-gradient-to-b from-blue-600 to-cyan-500 text-white">
      <div className="max-w-6xl mx-auto px-6 pt-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Tagline */}
          <div className="text-lg italic text-white/80 mb-4">Innovate Unique</div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-cyan-300">Tanmay</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-6">UI/UX & Frontend Designer</p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            A passionate of delivering intuitive user experiences across web and
            mobile applications
          </p>

          {/* CTA Button */}
          <Link href="/projects">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition mb-12">
              Explore My Works
            </button>
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:bg-white/20 transition">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-trophy text-white text-sm"></i>
                </div>
                <div>
                  <div className="text-sm text-white/80">Top 5% on</div>
                  <div className="font-semibold">Front end Mentor</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:bg-white/20 transition">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                </div>
                <div>
                  <div className="text-sm text-white/80">Project</div>
                  <div className="font-semibold">Launched</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:bg-white/20 transition">
              <div className="w-12 h-12 bg-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-code text-white"></i>
              </div>
              <h3 className="font-semibold mb-2">Web Design</h3>
              <p className="text-sm text-white/80">Clean, responsive, and user-focused</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:bg-white/20 transition">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-mobile-alt text-white"></i>
              </div>
              <h3 className="font-semibold mb-2">App Design</h3>
              <p className="text-sm text-white/80">
                Simple, intuitive mobile experiences
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:bg-white/20 transition">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-paint-brush text-white"></i>
              </div>
              <h3 className="font-semibold mb-2">Branding</h3>
              <p className="text-sm text-white/80">Visual identity with impact</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-8">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={MyImage}
            alt="My Illustration"
            className="w-full h-auto object-contain max-h-[80vh] rounded-lg"
          />
        </div>
      </div>
    </section>
</div>
  );
}
