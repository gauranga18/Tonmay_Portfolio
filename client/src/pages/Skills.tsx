import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";

export const Skills = (): JSX.Element => {
  const technicalSkills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "HTML/CSS", level: 98, category: "Frontend" },
    { name: "Tailwind CSS", level: 92, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },
    { name: "PostgreSQL", level: 75, category: "Database" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Docker", level: 75, category: "Tools" },
    { name: "AWS", level: 70, category: "Cloud" }
  ];

  const designSkills = [
    { name: "Figma", level: 98, category: "Design Tools" },
    { name: "Adobe XD", level: 90, category: "Design Tools" },
    { name: "Sketch", level: 85, category: "Design Tools" },
    { name: "Photoshop", level: 88, category: "Design Tools" },
    { name: "Illustrator", level: 82, category: "Design Tools" },
    { name: "UI Design", level: 95, category: "Design Skills" },
    { name: "UX Research", level: 88, category: "Design Skills" },
    { name: "Prototyping", level: 92, category: "Design Skills" },
    { name: "Design Systems", level: 90, category: "Design Skills" },
    { name: "User Testing", level: 85, category: "Design Skills" }
  ];

  const certifications = [
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      year: "2023",
      description: "Comprehensive program covering user experience design fundamentals"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
      description: "Advanced React concepts and best practices"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Cloud computing fundamentals and AWS services"
    }
  ];

  const getSkillsByCategory = (skills: typeof technicalSkills, category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <div className="bg-transparent flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[linear-gradient(180deg,rgba(4,101,170,1)_1%,rgba(5,221,245,1)_95%)] w-full max-w-[1440px] min-h-screen relative">
        
        {/* Header Navigation */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="flex justify-between items-center px-8 py-4">
            <img
              className="w-[45px] h-[45px]"
              alt="Profile Logo"
              src="/figmaAssets/ellipse-1.png"
              data-testid="profile-logo"
            />
            
            <nav className="flex gap-[75px]">
              <Link href="/">
                <a className="font-normal text-white text-[25px] hover:px-4 hover:py-1 hover:rounded-[20px] hover:border hover:border-white transition-all" data-testid="nav-home">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="font-normal text-white text-[25px] hover:px-4 hover:py-1 hover:rounded-[20px] hover:border hover:border-white transition-all" data-testid="nav-about">
                  About
                </a>
              </Link>
              <Link href="/skills">
                <a className="font-normal text-white text-[25px] px-4 py-1 rounded-[20px] border border-solid border-[#fff9f9]" data-testid="nav-skills">
                  Skills
                </a>
              </Link>
              <Link href="/projects">
                <a className="font-normal text-white text-[25px] hover:px-4 hover:py-1 hover:rounded-[20px] hover:border hover:border-white transition-all" data-testid="nav-projects">
                  Projects
                </a>
              </Link>
            </nav>

            <Button 
              className="w-[170px] h-[53px] rounded-[30px] border-[3px] border-solid border-[#0599f5] shadow-[0px_4px_4px_#00000040] font-medium text-[#f8fcff] text-xl bg-transparent hover:bg-[#0599f5] transition-all" 
              data-testid="button-contact"
              onClick={() => window.open('mailto:tanmay@example.com', '_blank')}
            >
              Contact
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-24 px-8 pb-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Skills Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-[80px] font-semibold text-white mb-4" data-testid="heading-skills">
                My <span className="italic">Skills</span>
              </h1>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed" data-testid="text-skills-intro">
                A comprehensive overview of my technical expertise and design capabilities, 
                built through years of hands-on experience and continuous learning.
              </p>
            </div>

            {/* Technical Skills Section */}
            <div className="mb-20">
              <h2 className="text-[50px] font-semibold text-white mb-12 text-center" data-testid="heading-technical-skills">
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Frontend Skills */}
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-white mb-6" data-testid="heading-frontend">Frontend Development</h3>
                    <div className="space-y-4">
                      {getSkillsByCategory(technicalSkills, 'Frontend').map((skill, index) => (
                        <div key={index} data-testid={`skill-frontend-${skill.name.toLowerCase()}`}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-white/80">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Backend Skills */}
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-white mb-6" data-testid="heading-backend">Backend & Database</h3>
                    <div className="space-y-4">
                      {[...getSkillsByCategory(technicalSkills, 'Backend'), ...getSkillsByCategory(technicalSkills, 'Database')].map((skill, index) => (
                        <div key={index} data-testid={`skill-backend-${skill.name.toLowerCase().replace('.', '')}`}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-white/80">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tools & Cloud */}
                <Card className="bg-white/20 backdrop-blur border-white/30 lg:col-span-2">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-white mb-6" data-testid="heading-tools">Tools & Cloud</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        {getSkillsByCategory(technicalSkills, 'Tools').map((skill, index) => (
                          <div key={index} data-testid={`skill-tools-${skill.name.toLowerCase()}`}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-white font-medium">{skill.name}</span>
                              <span className="text-white/80">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        {getSkillsByCategory(technicalSkills, 'Cloud').map((skill, index) => (
                          <div key={index} data-testid={`skill-cloud-${skill.name.toLowerCase()}`}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-white font-medium">{skill.name}</span>
                              <span className="text-white/80">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Design Skills Section */}
            <div className="mb-20">
              <h2 className="text-[50px] font-semibold text-white mb-12 text-center" data-testid="heading-design-skills">
                Design Skills
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Design Tools */}
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-white mb-6" data-testid="heading-design-tools">Design Tools</h3>
                    <div className="space-y-4">
                      {getSkillsByCategory(designSkills, 'Design Tools').map((skill, index) => (
                        <div key={index} data-testid={`skill-design-tool-${skill.name.toLowerCase().replace(' ', '-')}`}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-white/80">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Design Skills */}
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-white mb-6" data-testid="heading-design-capabilities">Design Capabilities</h3>
                    <div className="space-y-4">
                      {getSkillsByCategory(designSkills, 'Design Skills').map((skill, index) => (
                        <div key={index} data-testid={`skill-design-capability-${skill.name.toLowerCase().replace(' ', '-')}`}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-white/80">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mb-16">
              <h2 className="text-[50px] font-semibold text-white mb-12 text-center" data-testid="heading-certifications">
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-white/20 backdrop-blur border-white/30" data-testid={`card-certification-${index}`}>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-4xl mb-4">🏆</div>
                        <h3 className="text-xl font-semibold text-white mb-2" data-testid={`text-cert-title-${index}`}>
                          {cert.title}
                        </h3>
                        <p className="text-lg text-white/80 mb-2" data-testid={`text-cert-issuer-${index}`}>
                          {cert.issuer}
                        </p>
                        <p className="text-sm text-white/60 mb-4" data-testid={`text-cert-year-${index}`}>
                          {cert.year}
                        </p>
                        <p className="text-sm text-white/90" data-testid={`text-cert-description-${index}`}>
                          {cert.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-[40px] font-semibold text-white mb-6" data-testid="heading-cta">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
                Ready to bring your ideas to life with cutting-edge technology and beautiful design?
              </p>
              <Link href="/projects">
                <Button className="w-[266px] h-[58px] bg-[#5e50ff99] rounded-[20px] border border-solid border-[#07dbc9] shadow-[0px_4px_4px_#00000040] font-light italic text-[#fafff9] text-[25px] hover:bg-[#5e50ffcc] transition-all" data-testid="button-view-work">
                  View My Work
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};