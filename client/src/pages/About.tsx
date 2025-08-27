import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export const About = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              alt="Profile"
              src="/figmaAssets/ellipse-1.png"
              data-testid="profile-logo"
            />
          </div>
          
          <nav className="flex gap-8">
            <Link href="/" className="text-white font-medium text-lg hover:text-white/80 transition-colors" data-testid="nav-home">
              Home
            </Link>
            <Link href="/about" className="text-white font-medium text-lg px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-all" data-testid="nav-about">
              About
            </Link>
            <Link href="/skills" className="text-white font-medium text-lg hover:text-white/80 transition-colors" data-testid="nav-skills">
              Skills
            </Link>
            <Link href="/projects" className="text-white font-medium text-lg hover:text-white/80 transition-colors" data-testid="nav-projects">
              Projects
            </Link>
          </nav>

          <Link href="/contact">
            <Button 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all"
              data-testid="button-contact"
            >
              Contact
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Side - About Content */}
          <div className="space-y-8">
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
          <div className="relative flex justify-center items-center">
            {/* Sparkle decorations */}
            <div className="absolute top-20 right-20 text-white/40 text-4xl animate-pulse">✦</div>
            <div className="absolute bottom-32 right-32 text-white/40 text-2xl animate-pulse delay-1000">✦</div>
            
            {/* Character illustration placeholder - using existing image */}
            <div className="relative">
              <img
                className="w-96 h-auto object-contain"
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