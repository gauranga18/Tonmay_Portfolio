import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export const Navbar = (): JSX.Element => {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600/95 to-cyan-400/95 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30 hover:ring-white/50 transition-all duration-300 hover:scale-110"
              alt="Profile"
              src="/figmaAssets/ellipse-1.png"
              data-testid="profile-logo"
            />
            <span className="text-white font-semibold text-lg hidden sm:block hover:text-blue-200 transition-colors duration-300">
              Tanmay
            </span>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-6 py-3 rounded-full font-medium text-lg transition-all duration-300
                    ${isActive 
                      ? 'text-blue-600 bg-white shadow-lg transform scale-105' 
                      : 'text-white hover:text-white/90 hover:bg-white/10'
                    }
                  `}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <Link href="/contact">
            <Button 
              className="
                bg-transparent border-2 border-white text-white px-6 py-3 rounded-full 
                font-medium transition-all duration-300 hover:bg-white hover:text-blue-600 
                hover:shadow-lg hover:scale-105 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-600
              "
              data-testid="button-contact"
            >
              Contact
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
