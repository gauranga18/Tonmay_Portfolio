import React from 'react'
import Navbar from './Navbar'
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Video Management and Analytics UI",
      description: "EOVS aims to develop a Demo Video Management & Analytics Tool that enables the company to share pre-recorded software demo videos with prospective clients. The system should allow customized video access, track viewer engagement, collect user feedback, and generate analytics reports. This document provides a detailed guide for software development interns to follow throughout the project lifecycle.",
      buildWith: "Figma",
      mockups: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Car Rentals website Design User interface",
      description: "A sleek, responsive car rental platform designed for ease of booking and a smooth browsing experience. It features a clean UI, intuitive filtering, and engaging animations for a seamless user journey.",
      buildWith: "Figma",
      mockups: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1605559424843-9e4c2c47b57e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Riding gears Accessories Website Redesign UI",
      description: "A bold and performance-driven UI redesign for a motorcycle riding gear e-commerce platform. The design enhances product visibility, simplifies category navigation, and brings a rugged, high-impact feel that matches the brand's adventurous spirit.",
      buildWith: "Figma",
      mockups: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Tours and Travels Application UI&UX Design",
      description: "A travel booking interface designed to help users explore destinations, book trips, and view categories with ease. The UI focuses on rich visuals, clear navigation, and a mobile-friendly layout to enhance user engagement during travel planning.",
      buildWith: "Figma",
      mockups: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Money Management Application UI&UX Design",
      description: "An intuitive fintech app interface designed to help users track expenses, manage savings, and manage accounts securely. The design prioritizes simplicity, modern visual hierarchy, and financial clarity through interactive elements and graphs.",
      buildWith: "Figma",
      mockups: [
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Chromatik -Personal AI Stylist Application Design",
      description: "An AI-based virtual styling app that recommends outfits based on user preferences, body type, and occasion. The design highlights personalization, smooth onboarding, and an interactive style matching experience.",
      buildWith: "Figma",
      mockups: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=300&fit=crop"
      ]
    }
  ]

  return (
  <>
  <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-6 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
              {/* Project Mockups Grid */}
              <div className="mb-6">
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="grid grid-cols-2 gap-2">
                    {project.mockups.map((mockup, mockupIndex) => (
                      <div key={mockupIndex} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={mockup} 
                          alt={`${project.title} mockup ${mockupIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
                  {project.title}
                </h3>

                <div className="inline-flex items-center px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full border border-blue-300 border-opacity-50">
                  <span className="text-blue-100 text-sm font-medium">
                    Build with: {project.buildWith}
                  </span>
                </div>

                <p className="text-blue-100 text-sm md:text-base leading-relaxed opacity-90">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default Projects