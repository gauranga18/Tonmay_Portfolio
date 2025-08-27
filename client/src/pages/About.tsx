import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";

export const About = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-screen">
          
          {/* Left Side - About Content */}
          <div className="space-y-8 pr-8">
            <Card className="bg-blue-600/20 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h1 className="text-white text-4xl font-bold mb-6" data-testid="heading-about">
                  About me
                </h1>
                
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p data-testid="text-about-intro">
                    I'm Tanmay — a passionate UI & Frontend designer dedicated to crafting seamless, aesthetic, and user-focused digital experiences.
                  </p>
                  
                  <div>
                    <span className="text-white font-semibold">MY JOURNEY :</span>
                    <span data-testid="text-journey">
                      {" "}Into design started with a love for clean visuals and smooth interactions. Over the years, I've developed a deep appreciation for creating designs that not only look great but also feel intuitive and purposeful to users.
                    </span>
                  </div>
                  
                  <p data-testid="text-specialization">
                    I specialize in tools like Figma 🎨 and Adobe Express 📱 to build design systems, mobile interfaces, and engaging layouts that scale across platforms. I have also experience in HTML CSS and Mysql . Whether it's a website, an app UI, or branding visuals — I aim to merge form and function in every project. My design philosophy is built on clarity 💡, consistency 🔄, and creativity 💫.
                  </p>
                  
                  <p data-testid="text-process">
                    I'm constantly exploring new trends and refining my process to deliver solutions that are both visually compelling and user-friendly.
                  </p>
                  
                  <div>
                    <span className="text-white font-semibold">What I Like :</span>
                    <span data-testid="text-interests">
                      {" "}Outside of work, I'm passionate about music — I play instruments like drums 🥁, enjoy beatboxing 🎵, and practice a bit of singing 🎤. Creativity flows through both my design and my rhythm.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Character Illustration */}
          <div className="relative h-screen flex items-end justify-end overflow-hidden">
            {/* Sparkle decorations */}
            <div className="absolute top-20 right-20 text-white/40 text-4xl animate-pulse z-10">✦</div>
            <div className="absolute bottom-1/3 right-1/4 text-white/40 text-2xl animate-pulse delay-1000 z-10">✦</div>
            
            {/* Character illustration covering full right section */}
            <div className="relative w-full h-full flex items-end justify-end">
              <img
                className="h-full w-auto object-cover object-right"
                alt="Tanmay Character"
                src="/figmaAssets/image-pngofmine.png"
                data-testid="character-illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};