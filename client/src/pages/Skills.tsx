import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";

export const Skills = (): JSX.Element => {
  const technicalSkills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Adobe Express", icon: "https://img.icons8.com/?size=100&id=118571&format=png&color=000000" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ];

  const designingSkills = [
    { name: "Web Design", icon: "https://cdn-icons-png.flaticon.com/512/1006/1006773.png" },
    { name: "App Design", icon: "https://cdn-icons-png.flaticon.com/512/3594/3594465.png" },
    { name: "Logo Design", icon: "https://cdn-icons-png.flaticon.com/512/4247/4247931.png" },
    { name: "Brand Design", icon: "https://cdn-icons-png.flaticon.com/512/3148/3148876.png" }
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
      <Navbar />

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
                    <div className="w-16 h-16 bg-blue-700/30 rounded-xl flex items-center justify-center mb-3 border border-white/20 overflow-hidden">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                      />
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
                    <div className="w-16 h-16 bg-blue-700/30 rounded-xl flex items-center justify-center mb-3 border border-white/20 overflow-hidden">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                      />
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