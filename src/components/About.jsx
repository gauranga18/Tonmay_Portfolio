import React from "react";
import Navbar from "./Navbar";
import MyImage from "../assets/pfp.png";
import Stars from "../assets/stars.png";

export default function About() {
  return (
    <div>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white pt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>

              <p className="text-lg text-white/95 leading-relaxed max-w-xl">
                I’m Tanmay — a passionate UI & Frontend designer dedicated to crafting
                seamless, aesthetic, and user-focused digital experiences.
              </p>

              <p className="text-base text-white/90 leading-relaxed max-w-xl">
                <span className="font-semibold">My Journey:</span> My journey into design
                started with a love for clean visuals and smooth interactions.
                Over time, I’ve grown deeply invested in building interfaces that
                not only look good but feel intuitive and purposeful.
              </p>

              <p className="text-base text-white/90 leading-relaxed max-w-xl">
                I work primarily with <span className="font-semibold">Figma</span> and{" "}
                <span className="font-semibold">Adobe Express</span>, and I also have
                experience with <span className="font-semibold">HTML, CSS, and MySQL</span>.
                My design philosophy is rooted in clarity 🔑, consistency 📏, and creativity 💡.
              </p>

              <p className="text-base text-white/90 leading-relaxed max-w-xl">
                Outside of work, I’m into music — I play{" "}
                <span className="font-semibold">drums 🥁</span>, enjoy{" "}
                <span className="font-semibold">beatboxing 🎤</span>, and practice{" "}
                <span className="font-semibold">singing 🎶</span>. Creativity stays on 24/7.
              </p>
            </div>

            {/* RIGHT CONTENT – IMAGE */}
            <div className="flex justify-center items-end lg:items-center">
              <div className="relative w-full max-w-lg">

                {/* Stars */}
                <div className="absolute top-8 left-8 w-70 h-70 opacity-80 pointer-events-none">
                  <img src={Stars} alt="Star decoration" />
                </div>

                <div className="absolute bottom-12 right-10 w-70 h-70 opacity-80 pointer-events-none">
                  <img src={Stars} alt="Star decoration" />
                </div>

                {/* Image */}
                <div className="relative">
                  <img
                    src={MyImage}
                    alt="Tanmay - UI Designer & Frontend Developer"
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
