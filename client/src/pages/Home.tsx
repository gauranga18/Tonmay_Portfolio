import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

export const Home = (): JSX.Element => {
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
            <Link href="/" className="text-white font-medium text-lg px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-all" data-testid="nav-home">
              Home
            </Link>
            <Link href="/about" className="text-white font-medium text-lg hover:text-white/80 transition-colors" data-testid="nav-about">
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
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-white text-3xl font-light italic" data-testid="heading-tagline">
                Innovate Unique
              </h2>
              <div className="space-y-2">
                <h1 className="text-white text-6xl font-light" data-testid="heading-intro">
                  Hi, I'm <span className="font-bold">Tanmay</span>
                </h1>
                <p className="text-white text-2xl font-light" data-testid="text-role">
                  UI/UX & Frontend Designer
                </p>
              </div>
              <p className="text-white/90 text-lg leading-relaxed max-w-md" data-testid="text-description">
                A passionate of delivering intuitive user experiences across web and mobile applications
              </p>
            </div>

            <Link href="/projects">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg" data-testid="button-explore-works">
                Explore My works
              </Button>
            </Link>

            {/* Stats Cards */}
            <div className="flex gap-4">
              <Card className="bg-blue-600/30 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
                      <span className="text-xs">🏆</span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm">Top 5% on</div>
                      <div className="font-medium">Front end Mentor</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-600/30 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center gap-2 text-white">
                    <div className="text-3xl font-bold">10</div>
                    <div className="text-lg">+</div>
                    <div className="text-left">
                      <div className="text-sm">Project</div>
                      <div className="text-sm">Launched</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <Card className="bg-blue-600/30 border-white/20 backdrop-blur-sm hover:bg-blue-600/40 transition-all">
                <CardContent className="p-4 text-center text-white">
                  <div className="w-8 h-8 bg-blue-700 rounded mb-2 mx-auto flex items-center justify-center">
                    <span className="text-xs">🎨</span>
                  </div>
                  <h3 className="font-medium text-sm mb-1">Web Design</h3>
                  <p className="text-xs text-white/80">Clean, responsive, and user-focused.</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-600/30 border-white/20 backdrop-blur-sm hover:bg-blue-600/40 transition-all">
                <CardContent className="p-4 text-center text-white">
                  <div className="w-8 h-8 bg-blue-700 rounded mb-2 mx-auto flex items-center justify-center">
                    <span className="text-xs">📱</span>
                  </div>
                  <h3 className="font-medium text-sm mb-1">App Design</h3>
                  <p className="text-xs text-white/80">Simple, intuitive mobile experiences.</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-600/30 border-white/20 backdrop-blur-sm hover:bg-blue-600/40 transition-all">
                <CardContent className="p-4 text-center text-white">
                  <div className="w-8 h-8 bg-blue-700 rounded mb-2 mx-auto flex items-center justify-center">
                    <span className="text-xs">⚡</span>
                  </div>
                  <h3 className="font-medium text-sm mb-1">Branding</h3>
                  <p className="text-xs text-white/80">Visual identity with impact</p>
                </CardContent>
              </Card>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6">
              <button
                onClick={() => window.open('https://instagram.com/tanmay_designer', '_blank')}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                data-testid="social-instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => window.open('https://linkedin.com/in/tanmay-ui-dev', '_blank')}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => window.open('mailto:tanmaydeori09@gmail.com', '_blank')}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                data-testid="social-gmail"
              >
                <Mail className="w-6 h-6 text-white" />
              </button>
            </div>
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