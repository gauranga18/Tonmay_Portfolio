import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ExternalLink, Github } from "lucide-react";

export const Projects = (): JSX.Element => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and customer insights.",
      image: "/figmaAssets/image-3.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      category: "Web Application",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with biometric authentication, transaction history, and budget tracking features.",
      image: "/figmaAssets/image-4.png",
      technologies: ["React Native", "TypeScript", "Redux", "Express", "MongoDB"],
      category: "Mobile App",
      status: "In Development",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Brand Identity System",
      description: "Complete brand identity redesign including logo, color palette, typography, and brand guidelines for a tech startup.",
      image: "/figmaAssets/image-6.png",
      technologies: ["Figma", "Adobe Illustrator", "Photoshop"],
      category: "Branding",
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Task Management Platform",
      description: "Collaborative task management tool with team workspaces, project tracking, and integration with popular development tools.",
      image: "/figmaAssets/image-3.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
      category: "Web Application",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and customizable weather alerts.",
      image: "/figmaAssets/image-4.png",
      technologies: ["React", "Weather API", "Chart.js", "CSS3"],
      category: "Web Application",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Restaurant Menu Design",
      description: "Modern digital menu design system for upscale restaurants with QR code integration and nutritional information display.",
      image: "/figmaAssets/image-6.png",
      technologies: ["Figma", "Adobe InDesign", "QR Generator"],
      category: "Design",
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = ["All", "Web Application", "Mobile App", "Branding", "Design"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

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
                <a className="font-normal text-white text-[25px] hover:px-4 hover:py-1 hover:rounded-[20px] hover:border hover:border-white transition-all" data-testid="nav-skills">
                  Skills
                </a>
              </Link>
              <Link href="/projects">
                <a className="font-normal text-white text-[25px] px-4 py-1 rounded-[20px] border border-solid border-[#fff9f9]" data-testid="nav-projects">
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
            
            {/* Projects Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-[80px] font-semibold text-white mb-4" data-testid="heading-projects">
                My <span className="italic">Projects</span>
              </h1>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed" data-testid="text-projects-intro">
                A showcase of my best work across web development, mobile applications, 
                and design projects. Each project represents a unique challenge and creative solution.
              </p>
            </div>

            {/* Featured Projects */}
            <div className="mb-20">
              <h2 className="text-[50px] font-semibold text-white mb-12 text-center" data-testid="heading-featured">
                Featured Work
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <Card key={project.id} className="bg-white/20 backdrop-blur border-white/30 overflow-hidden group hover:scale-105 transition-transform duration-300" data-testid={`card-featured-${project.id}`}>
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          className="w-full h-48 object-cover"
                          alt={project.title}
                          src={project.image}
                          data-testid={`img-featured-${project.id}`}
                        />
                        <div className="absolute top-4 right-4">
                          <Badge 
                            variant={project.status === 'Live' ? 'default' : project.status === 'In Development' ? 'secondary' : 'outline'}
                            className="text-xs"
                            data-testid={`badge-status-${project.id}`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex gap-4">
                            <Button size="sm" variant="secondary" className="opacity-90" data-testid={`button-live-${project.id}`}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </Button>
                            <Button size="sm" variant="outline" className="opacity-90" data-testid={`button-github-${project.id}`}>
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-white" data-testid={`text-title-${project.id}`}>
                            {project.title}
                          </h3>
                          <Badge variant="outline" className="text-xs text-white/80 border-white/30" data-testid={`badge-category-${project.id}`}>
                            {project.category}
                          </Badge>
                        </div>
                        
                        <p className="text-white/80 text-sm leading-relaxed mb-4" data-testid={`text-description-${project.id}`}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs" data-testid={`badge-tech-${project.id}-${techIndex}`}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <h2 className="text-[50px] font-semibold text-white mb-8 text-center" data-testid="heading-all-projects">
                All Projects
              </h2>
              <div className="flex justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`${selectedCategory === category 
                      ? "bg-white/30 text-white border-white/50" 
                      : "bg-transparent text-white/80 border-white/30 hover:bg-white/20"
                    } transition-all`}
                    data-testid={`filter-${category.toLowerCase().replace(' ', '-')}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* All Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="bg-white/20 backdrop-blur border-white/30 overflow-hidden group hover:scale-105 transition-transform duration-300" data-testid={`card-project-${project.id}`}>
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        className="w-full h-40 object-cover"
                        alt={project.title}
                        src={project.image}
                        data-testid={`img-project-${project.id}`}
                      />
                      <div className="absolute top-4 right-4">
                        <Badge 
                          variant={project.status === 'Live' ? 'default' : project.status === 'In Development' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white" data-testid={`text-project-title-${project.id}`}>
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="text-xs text-white/80 border-white/30">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <p className="text-white/80 text-sm leading-relaxed mb-3" data-testid={`text-project-description-${project.id}`}>
                        {project.description.length > 100 
                          ? project.description.substring(0, 100) + "..." 
                          : project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs text-white/60">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="flex-1" data-testid={`button-view-${project.id}`}>
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1" data-testid={`button-code-${project.id}`}>
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-[40px] font-semibold text-white mb-6" data-testid="heading-work-together">
                Let's Work Together
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-work-together-description">
                Have a project in mind? I'd love to help bring your ideas to life with creative design and robust development.
              </p>
              <Button 
                className="w-[266px] h-[58px] bg-[#5e50ff99] rounded-[20px] border border-solid border-[#07dbc9] shadow-[0px_4px_4px_#00000040] font-light italic text-[#fafff9] text-[25px] hover:bg-[#5e50ffcc] transition-all" 
                data-testid="button-start-project"
                onClick={() => window.open('mailto:tanmay@example.com?subject=Project Inquiry', '_blank')}
              >
                Start a Project
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};