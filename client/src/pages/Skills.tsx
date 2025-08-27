import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export const Skills = (): JSX.Element => {
  const technicalSkills = [
    { name: "HTML", icon: "🔶" },
    { name: "CSS", icon: "🔷" },
    { name: "Figma", icon: "🎨" },
    { name: "Adobe Express", icon: "📱" },
    { name: "C", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚙️" },
    { name: "MySQL", icon: "🗄️" }
  ];

  const designingSkills = [
    { name: "Web Design", icon: "🌐" },
    { name: "App Design", icon: "📱" },
    { name: "Logo Design", icon: "⚪" },
    { name: "Brand Design", icon: "✨" }
  ];

  const interpersonalSkills = [
    {
      title: "Collaboration",
      description: "Working smoothly in cross-functional teams design."
    },
    {
      title: "Creativity", 
      description: "Bringing fresh ideas and visual storytelling to design challenges."
    },
    {
      title: "Empathy",
      description: "Understanding the user's needs and the client's vision."
    },
    {
      title: "Attention to Detail",
      description: "Making sure every pixel, interaction, and transition feels right."
    }
  ];

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
            <Link href="/about" className="text-white font-medium text-lg hover:text-white/80 transition-colors" data-testid="nav-about">
              About
            </Link>
            <Link href="/skills" className="text-white font-medium text-lg px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-all" data-testid="nav-skills">
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
      <div className="pt-20 px-6 pb-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Technical Skills */}
          <Card className="bg-blue-600/20 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-white text-2xl font-bold mb-6" data-testid="heading-technical-skills">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center text-center" data-testid={`skill-technical-${skill.name.toLowerCase()}`}>
                    <div className="w-16 h-16 bg-blue-700/30 rounded-xl flex items-center justify-center text-2xl mb-3 border border-white/20">
                      {skill.icon}
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Designing Skills */}
          <Card className="bg-blue-600/20 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-white text-2xl font-bold mb-6" data-testid="heading-designing-skills">
                Designing Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {designingSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center text-center" data-testid={`skill-design-${skill.name.toLowerCase().replace(' ', '-')}`}>
                    <div className="w-16 h-16 bg-blue-700/30 rounded-xl flex items-center justify-center text-2xl mb-3 border border-white/20">
                      {skill.icon}
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interpersonal Skills */}
          <Card className="bg-blue-600/20 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-white text-2xl font-bold mb-6" data-testid="heading-interpersonal-skills">
                Interpersonal Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interpersonalSkills.map((skill, index) => (
                  <Card key={index} className="bg-blue-700/20 border-white/10" data-testid={`card-interpersonal-${skill.title.toLowerCase().replace(' ', '-')}`}>
                    <CardContent className="p-6">
                      <h3 className="text-white text-lg font-semibold mb-2" data-testid={`text-skill-title-${index}`}>
                        {skill.title}
                      </h3>
                      <p className="text-white/80 text-sm" data-testid={`text-skill-description-${index}`}>
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};