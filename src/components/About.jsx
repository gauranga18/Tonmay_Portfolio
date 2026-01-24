import React from "react";
import Navbar from "./Navbar";
import MyImage from "../assets/pfp.png";
import Stars from "../assets/stars.png";

export default function About() {
  return (
    <div>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-b from-blue-600 via-cyan-500 to-cyan-400 text-white pt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT - Now inside a rounded border container */}
            <div className="relative">
              {/* Container with rounded border */}
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl">

                <div className="space-y-6 relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>

                  <p className="text-lg text-white/95 leading-relaxed">
                    I'm Tonmay - a passionate UI & Frontend designer dedicated to crafting seamless, aesthetic, and user-focused digital experiences.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-white/100">MY JOURNEY</h3>
                    <p className="text-base text-white/90 leading-relaxed">
                      Into design started with a love for clear smooth interactions. Over the years, I've developed a deep appreciation for creating designs that not only look great but feel intuitive and purposeful to users.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base text-white/90 leading-relaxed">
                      I specialize in tools like <span className="font-semibold">Figma</span> and 
                      <span className="font-semibold"> Adobe Express</span> to build design systems, 
                      mobile interfaces, and engaging layouts that scale across platforms. I have 
                      also experience in <span className="font-semibold">HTML, CSS and Mysql</span>. 
                      Whether it's a website, an app UI, or branding visuals - I aim to merge 
                      form and function in every project. My design philosophy is built on clarity, consistency, and creativity. I'm constantly exploring new trends and refining my process to deliver solutions that are both visually compelling and user-friendly.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/20">
                    <h3 className="text-2xl font-semibold text-white/100">What I Like</h3>
                    <p className="text-base text-white/90 leading-relaxed">
                      Outside of work, I'm passionate about music - I play instruments like 
                      drums, enjoy beatboxing, and practice a bit of singing. Creativity flows 
                      through both my design and my rhythm.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT – IMAGE */}
            <div className="flex justify-center items-end lg:items-center">
              <div className="relative w-full max-w-lg">

                {/* Stars */}
                <div className="absolute top-8 left-8 w-70 h-70 opacity-80 pointer-events-none">
                  <img src={Stars} alt="Star decoration" />
                </div>

                {/* Image */}
                <div className="relative">
                  <img
                    src={MyImage}
                    alt="Tonmay - UI Designer & Frontend Developer"
                    className="w-full h-auto object-contain"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}