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
      title: "Video Management and Analytics UI",
      description: "Build with: Figma\n\nTOAS aims to develop a Demo Video Management & Analytics UI that integrated software demo videos with prospects.\n\nThe system is designed to store and organize customer product and user feedback, providing software solutions for the Document provided a detailed guide on software development using Mern stack, NodeJS, ReactJS and Mysql.",
      image: "/figmaAssets/image-3.png",
      category: "UI/UX Design"
    },
    {
      id: 2,
      title: "Car Rentals website Design User interface",
      description: "Build with: Figma\n\nA sleek, responsive car rental platform designed for ease of booking and a smooth browsing experience. With clean visuals, Clean UI, intuitive filtering, and engaging animations for a seamless user journey.",
      image: "/figmaAssets/image-4.png",
      category: "UI/UX Design"
    },
    {
      id: 3,
      title: "Riding gears Accessories Website Redesign U I",
      description: "Build with: Figma\n\nA bold and performance-driven UI redesign for a motorcycle accessories and e-commerce platform. The design enhances product visibility, simplifies category navigation, and delivers a dynamic impact that matches the brand's adventurous spirit.",
      image: "/figmaAssets/image-6.png",
      category: "UI/UX Design"
    },
    {
      id: 4,
      title: "Tours and Travels Application UI&UX Design",
      description: "Build with: Figma\n\nA travel booking interface designed to help travelers book trips, and view captivating visuals. The UI focuses on rich visuals, clear navigation, and a mobile-friendly layout to enhance user engagement during travel planning.",
      image: "/figmaAssets/image-3.png",
      category: "UI/UX Design"
    },
    {
      id: 5,
      title: "Money Management Application UI&UX Design",
      description: "Build with: Figma\n\nAn intuitive fintech app interface designed to help monitor savings, and manage accounts securely. The design features a clean visual hierarchy, and friendly clarity through interactive elements and user analytics.",
      image: "/figmaAssets/image-4.png",
      category: "UI/UX Design"
    },
    {
      id: 6,
      title: "Chromafit - Personal AI Stylist Application Design",
      description: "Build with: Figma\n\nAn AI-based virtual styling app that recommends personalized outfits, color preferences, body type, and occasion. The design highlights personalization, smooth onboarding, and a clean experience for personal style creation.",
      image: "/figmaAssets/image-6.png",
      category: "UI/UX Design"
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
            <Link href="/skills" className="text-white font-medium text-lg hover:text-white/80 transition-colors" data-testid="nav-skills">
              Skills
            </Link>
            <Link href="/projects" className="text-white font-medium text-lg px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-all" data-testid="nav-projects">
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
        <div className="max-w-7xl mx-auto">
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-blue-600/20 border-white/20 backdrop-blur-sm overflow-hidden hover:scale-105 transition-transform duration-300" data-testid={`card-project-${project.id}`}>
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      alt={project.title}
                      src={project.image}
                      data-testid={`img-project-${project.id}`}
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-white text-xl font-semibold mb-2" data-testid={`text-project-title-${project.id}`}>
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs mb-3">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <p className="text-white/90 text-sm leading-relaxed whitespace-pre-line" data-testid={`text-project-description-${project.id}`}>
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};