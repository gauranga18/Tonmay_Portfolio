import React from "react";
import Navbar from "./Navbar";
import MyImage from "../assets/pfp.png";
import Stars from "../assets/stars.png";
import LiquidEther from "./LiquidEther";

export default function About() {
  return (
    <div>
    <Navbar />

    <section className="min-h-screen text-white pt-1 relative overflow-hidden bg-[#060010]">

    {/* LiquidEther background */}
    <div className="absolute inset-0 z-0">
    <LiquidEther
    colors={["#7b2ff7", "#c724b1", "#ff6ef7", "#00fff9", "#3b82f6"]}
    mouseForce={18}
    cursorSize={120}
    resolution={0.5}
    autoDemo={true}
    autoSpeed={0.3}
    autoIntensity={2.5}
    autoResumeDelay={2000}
    autoRampDuration={0.8}
    takeoverDuration={0.25}
    isBounce={false}
    isViscous={false}
    />
    </div>

    {/* Subtle overlay */}
    <div
    className="absolute inset-0 z-[1] pointer-events-none"
    style={{
      background:
      "linear-gradient(to bottom, rgba(6,0,16,0.55) 0%, rgba(6,0,16,0.25) 50%, rgba(6,0,16,0.65) 100%)",
    }}
    />

    {/* Content */}
    <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT — text card */}
    <div className="relative">
    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 lg:p-10 shadow-2xl">
    <div className="space-y-6">
    <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>

    <p className="text-lg text-white/90 leading-relaxed">
    I'm Tonmay — a passionate UI & Frontend designer dedicated to crafting seamless,
    aesthetic, and user-focused digital experiences.
    </p>

    <div className="space-y-3">
    <h3 className="text-2xl font-semibold">MY JOURNEY</h3>
    <p className="text-base text-white/85 leading-relaxed">
    Into design started with a love for clear smooth interactions. Over the years,
    I've developed a deep appreciation for creating designs that not only look great
    but feel intuitive and purposeful to users.
    </p>
    </div>

    <div className="space-y-3">
    <p className="text-base text-white/85 leading-relaxed">
    I specialize in tools like <span className="font-semibold text-cyan-300">Figma</span> and{" "}
    <span className="font-semibold text-cyan-300">Adobe Express</span> to build design systems,
    mobile interfaces, and engaging layouts that scale across platforms. I also have experience
    in <span className="font-semibold text-cyan-300">HTML, CSS and MySQL</span>. Whether it's a
    website, an app UI, or branding visuals — I aim to merge form and function in every project.
    My design philosophy is built on clarity, consistency, and creativity.
    </p>
    </div>

    <div className="space-y-3 pt-4 border-t border-white/20">
    <h3 className="text-2xl font-semibold">What I Like</h3>
    <p className="text-base text-white/85 leading-relaxed">
    Outside of work, I'm passionate about music — I play instruments like drums,
    enjoy beatboxing, and practice a bit of singing. Creativity flows through both
    my design and my rhythm.
    </p>
    </div>
    </div>
    </div>
    </div>

    {/* RIGHT — image */}
    <div className="flex justify-center items-end lg:items-center">
    <div className="relative w-full max-w-lg">
    <div className="absolute top-8 left-8 w-70 h-70 opacity-70 pointer-events-none">
    <img src={Stars} alt="Star decoration" />
    </div>
    <div className="relative">
    <img
    src={MyImage}
    alt="Tonmay - UI Designer & Frontend Developer"
    className="w-full h-auto object-contain"
    style={{
      maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
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
