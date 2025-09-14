import React from "react";
import MyImage from "../assets/Image_pngofmine.png"; // Replace with your image path
import Navbar from "./Navbar";
export default function About() {
  return (
    <div>
        <Navbar />
        
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 min-h-screen flex items-center justify-center px-6 md:px-16 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Section - Text Box */}
        <div className="bg-blue-500/20 border border-white/30 rounded-xl p-6 md:p-10 text-white shadow-lg w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            I’m Tanmay — a passionate UI & Frontend designer dedicated to
            crafting seamless, aesthetic, and user-focused digital experiences.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            <span className="font-bold">MY JOURNEY :</span> Into design started
            with a love for clean visuals and smooth interactions. Over the
            years, I’ve developed a deep appreciation for creating designs that
            not only look great but also feel intuitive and purposeful to users.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            I specialize in tools like{" "}
            <span className="font-semibold">Figma 🎨</span> and{" "}
            <span className="font-semibold">Adobe Express 📒</span> to build
            design systems, mobile interfaces, and engaging layouts that scale
            across platforms. I also have experience in{" "}
            <span className="font-semibold">HTML, CSS, and MySQL</span>.
            <br />
            Whether it’s a website, an app UI, or branding visuals — I aim to
            merge form and function in every project. My design philosophy is
            built on clarity 🔑, consistency 📏, and creativity 💡.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            <span className="font-bold">What I Like :</span> Outside of work,
            I’m passionate about music — I play instruments like{" "}
            <span className="font-semibold">drums 🥁</span>, enjoy{" "}
            <span className="font-semibold">beatboxing 🎤</span>, and practice a
            bit of <span className="font-semibold">singing 🎶</span>. Creativity
            flows through both my design and my rhythm.
          </p>
        </div>

        {/* Right Section - Illustration */}
        <div className="flex justify-center md:w-1/2 w-full">
          <img
            src={MyImage}
            alt="About Illustration"
            className="w-72 md:w-[400px] lg:w-[500px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
    </div>
  );
}
