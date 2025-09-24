import React from "react";
import MyImage from "../assets/Image_pngofmine.png";
import Navbar from "./Navbar";

export default function Home() {
  const handleExploreClick = (e) => {
    e.preventDefault();
    // Simple window navigation - most reliable method
    window.location.href = "/projects";
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)]">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
              {/* Tagline */}
              <div className="text-base sm:text-lg italic text-white/80">Innovate Unique</div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-cyan-300">Tanmay</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90">UI/UX & Frontend Designer</p>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg">
                A passionate of delivering intuitive user experiences across web and
                mobile applications
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <a 
                  href="/projects"
                  onClick={handleExploreClick}
                  className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 text-base sm:text-lg font-medium cursor-pointer no-underline"
                >
                  Explore My Works
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-4 lg:pt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 shadow-lg hover:bg-white/20 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-trophy text-white text-sm"></i>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-white/80">Top 5% on</div>
                      <div className="font-semibold text-sm sm:text-base">Frontend Mentor</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 shadow-lg hover:bg-white/20 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-lg font-bold text-white">10+</div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-white/80">Projects</div>
                      <div className="font-semibold text-sm sm:text-base">Launched</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-4 lg:pt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 text-center shadow-lg hover:bg-white/20 transition-all duration-200">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-pink-500 rounded-lg mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                    <i className="fas fa-code text-white text-sm lg:text-base"></i>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm lg:text-base">Web Design</h3>
                  <p className="text-xs lg:text-sm text-white/80 leading-relaxed">Clean, responsive, and user-focused</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 text-center shadow-lg hover:bg-white/20 transition-all duration-200">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-500 rounded-lg mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                    <i className="fas fa-mobile-alt text-white text-sm lg:text-base"></i>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm lg:text-base">App Design</h3>
                  <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                    Simple, intuitive mobile experiences
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 text-center shadow-lg hover:bg-white/20 transition-all duration-200 sm:col-span-3 md:col-span-1">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-lg mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                    <i className="fas fa-paint-brush text-white text-sm lg:text-base"></i>
                  </div>
                  <h3 className="font-semibold mb-2 text-sm lg:text-base">Branding</h3>
                  <p className="text-xs lg:text-sm text-white/80 leading-relaxed">Visual identity with impact</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center sm:justify-start space-x-4 pt-4 lg:pt-8">
                <a
                  href="https://instagram.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200"
                >
                  <i className="fab fa-instagram text-lg sm:text-xl"></i>
                </a>
                <a
                  href="https://linkedin.com/in/your_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200"
                >
                  <i className="fab fa-linkedin text-lg sm:text-xl"></i>
                </a>
                <a
                  href="mailto:tanmay@example.com"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200"
                >
                  <i className="fas fa-envelope text-lg sm:text-xl"></i>
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
                <img
                  src={MyImage}
                  alt="Tanmay - UI/UX & Frontend Designer"
                  className="w-full h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}