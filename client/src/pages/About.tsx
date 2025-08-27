import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export const About = (): JSX.Element => {
  const experiences = [
    {
      title: "Senior UI/UX Designer",
      company: "Tech Solutions Inc",
      period: "2022 - Present",
      description: "Led design initiatives for mobile and web applications, improving user engagement by 40%"
    },
    {
      title: "Frontend Developer",
      company: "Creative Digital Agency",
      period: "2020 - 2022", 
      description: "Developed responsive web applications using React, TypeScript, and modern CSS frameworks"
    },
    {
      title: "Junior Designer",
      company: "Startup Hub",
      period: "2019 - 2020",
      description: "Created user interfaces and prototypes for various startup projects"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      year: "2019",
      description: "Specialized in Human-Computer Interaction and Web Technologies"
    }
  ];

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
                <a className="font-normal text-white text-[25px] px-4 py-1 rounded-[20px] border border-solid border-[#fff9f9]" data-testid="nav-about">
                  About
                </a>
              </Link>
              <Link href="/skills">
                <a className="font-normal text-white text-[25px] hover:px-4 hover:py-1 hover:rounded-[20px] hover:border hover:border-white transition-all" data-testid="nav-skills">
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
            
            {/* About Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-[80px] font-semibold text-white mb-4" data-testid="heading-about">
                About <span className="italic">Me</span>
              </h1>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed" data-testid="text-about-intro">
                Passionate UI Designer & Frontend Developer with over 4 years of experience creating 
                intuitive digital experiences. I bridge the gap between design and development, 
                ensuring pixel-perfect implementations that delight users.
              </p>
            </div>

            {/* Profile Image and Stats */}
            <div className="flex justify-center items-center gap-16 mb-20">
              <div className="relative">
                <img
                  className="w-80 h-80 rounded-full object-cover border-4 border-white/30"
                  alt="Tanmay Profile"
                  src="/figmaAssets/image-pngofmine.png"
                  data-testid="img-profile"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2" data-testid="stat-projects">50+</div>
                    <div className="text-lg text-white/80">Projects Completed</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2" data-testid="stat-experience">4+</div>
                    <div className="text-lg text-white/80">Years Experience</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2" data-testid="stat-clients">30+</div>
                    <div className="text-lg text-white/80">Happy Clients</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2" data-testid="stat-awards">5</div>
                    <div className="text-lg text-white/80">Design Awards</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-16">
              <h2 className="text-[50px] font-semibold text-white mb-8 text-center" data-testid="heading-experience">
                Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="bg-white/20 backdrop-blur border-white/30" data-testid={`card-experience-${index}`}>
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-2" data-testid={`text-job-title-${index}`}>
                            {exp.title}
                          </h3>
                          <p className="text-xl text-white/80" data-testid={`text-company-${index}`}>
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-lg text-white/70 bg-white/10 px-4 py-2 rounded-full" data-testid={`text-period-${index}`}>
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-lg text-white/90 leading-relaxed" data-testid={`text-description-${index}`}>
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h2 className="text-[50px] font-semibold text-white mb-8 text-center" data-testid="heading-education">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-white/20 backdrop-blur border-white/30" data-testid={`card-education-${index}`}>
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-2" data-testid={`text-degree-${index}`}>
                            {edu.degree}
                          </h3>
                          <p className="text-xl text-white/80" data-testid={`text-school-${index}`}>
                            {edu.school}
                          </p>
                        </div>
                        <span className="text-lg text-white/70 bg-white/10 px-4 py-2 rounded-full" data-testid={`text-year-${index}`}>
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-lg text-white/90 leading-relaxed" data-testid={`text-edu-description-${index}`}>
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div className="text-center">
              <h2 className="text-[50px] font-semibold text-white mb-8" data-testid="heading-interests">
                Beyond Work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">🎨</div>
                    <h3 className="text-xl font-semibold text-white mb-3" data-testid="text-interest-art">Digital Art</h3>
                    <p className="text-white/80">Creating digital illustrations and experimenting with new design tools</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">📚</div>
                    <h3 className="text-xl font-semibold text-white mb-3" data-testid="text-interest-learning">Continuous Learning</h3>
                    <p className="text-white/80">Always exploring new technologies and design methodologies</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/20 backdrop-blur border-white/30">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">🌟</div>
                    <h3 className="text-xl font-semibold text-white mb-3" data-testid="text-interest-mentoring">Mentoring</h3>
                    <p className="text-white/80">Helping aspiring designers and developers grow their careers</p>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};