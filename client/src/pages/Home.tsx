import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const Home = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-screen">
          
          {/* Left Side - Content */}
          <div className="space-y-8 pr-8">
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