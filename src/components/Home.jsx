import React from "react";
import MyImage from "../assets/Image_pngofmine.png";
import Stars from "../assets/stars.png";
import Navbar from "./Navbar";

export default function Home() {
  const handleExploreClick = (e) => {
    e.preventDefault();
    window.location.href = "/projects";
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white pt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 lg:py-2">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Tagline */}
              <div className="text-lg italic text-white/90 font-light">Innovate Unique</div>

              {/* Heading */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-cyan-200">Tanmay</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/95 font-light">UI Designer & Frontend Devloper</p>

              {/* Description */}
              <p className="text-base lg:text-lg text-white/90 leading-relaxed max-w-xl">
                A passionate of delivering intuitive user experiences across web and mobile applications
              </p>

              {/* CTA Button */}
              <div className="pt-0">
                <a 
                  href="/projects"
                  onClick={handleExploreClick}
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 text-base font-medium cursor-pointer no-underline"
                >
                  Explore My works
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-trophy text-white text-lg"></i>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-white/80">Top 5% on</div>
                      <div className="font-semibold text-base">Front end Mentor</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-xl font-bold text-white">10+</div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-white/80">Project</div>
                      <div className="font-semibold text-base">Launched</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <i className="fas fa-code text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold mb-2 text-center text-sm">Web Design</h3>
                  <p className="text-xs text-white/80 text-center leading-relaxed">Clean, responsive, and user-focused</p>
                </div>

                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <i className="fas fa-mobile-alt text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold mb-2 text-center text-sm">App Design</h3>
                  <p className="text-xs text-white/80 text-center leading-relaxed">
                    Simple, intuitive mobile experiences
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="w-12 h-12 bg-blue-400 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <i className="fas fa-paint-brush text-white text-lg"></i>
                  </div>
                  <h3 className="font-semibold mb-2 text-center text-sm">Branding</h3>
                  <p className="text-xs text-white/80 text-center leading-relaxed">Visual identity with impact</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.instagram.com/tnmydeori__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-200"
                  aria-label="Instagram Profile"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/tonmay-deori-652432284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="mailto:tonmoydeori09@gmail.com"
                  className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-200"
                  aria-label="Email Contact"
                >
                  <i className="fas fa-envelope text-2xl"></i>
                </a>
              </div>
            </div>

            {/* Right Content - Image with Stars Overlay */}
            <div className="flex justify-center items-end lg:items-center">
              <div className="relative w-full max-w-lg">
                {/* Stars decorations - Replaced with imported image */}
                <div className="absolute top-50 left-50 w-50 h-50 opacity-80">
                  <img src={Stars} alt="Star decoration" className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-50 right-50 w-50 h-50 opacity-80">
                  <img src={Stars} alt="Star decoration" className="w-full h-full object-contain" />
                </div>
                
                {/* Main Image */}
                <div className="relative">
                  <img
                    src={MyImage}
                    alt="Tanmay - UI Designer & Frontend Developer"
                    className="w-full h-auto object-contain"
                    style={{
                      maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}