import React from 'react'
import Navbar from './Navbar'

// Import your local project mockup images
import videoMain from '../assets/Frame 15.png'
import carRentalMain from '../assets/Frame 16.png'
import ridingGearMain from '../assets/Rynox - riding gears 1.png'
import toursTravelMain from '../assets/Rynox - riding gears 2.png'
import moneyMgmtMain from '../assets/Rynox - riding gears 4.png'

// Add a proper image for Chromatik or use a placeholder
import chromatikMain from '../assets/Frame 15.png' 

const projects = [
  {
    id: 1,
    title: "Video Management and Analytics UI",
    description: "EOVS aims to develop a Demo Video Management & Analytics Tool that enables the company to share pre-recorded software demo videos with prospective clients. The system should allow customized video access, track viewer engagement, collect user feedback, and generate analytics reports. This document provides a detailed guide for software development interns to follow throughout the project lifecycle.",
    buildWith: "Figma",
    cover: videoMain,
    // If you have multiple mockups, add them here. Otherwise, we'll handle single images differently
    mockups: [videoMain] // For now, using the same image
  },
  {
    id: 2,
    title: "Car Rentals website Design User interface",
    description: "A sleek, responsive car rental platform designed for ease of booking and a smooth browsing experience. It features a clean UI, intuitive filtering, and engaging animations for a seamless user journey.",
    buildWith: "Figma",
    cover: carRentalMain,
    mockups: [carRentalMain]
  },
  {
    id: 3,
    title: "Riding gears Accessories Website Redesign UI",
    description: "A bold and performance-driven UI redesign for a motorcycle riding gear e-commerce platform. The design enhances product visibility, simplifies category navigation, and brings a rugged, high-impact feel that matches the brand's adventurous spirit.",
    buildWith: "Figma",
    cover: ridingGearMain,
    mockups: [ridingGearMain]
  },
  {
    id: 4,
    title: "Tours and Travels Application UI&UX Design",
    description: "A travel booking interface designed to help users explore destinations, book trips, and view categories with ease. The UI focuses on rich visuals, clear navigation, and a mobile-friendly layout to enhance user engagement during travel planning.",
    buildWith: "Figma",
    cover: toursTravelMain,
    mockups: [toursTravelMain]
  },
  {
    id: 5,
    title: "Money Management Application UI&UX Design",
    description: "An intuitive fintech app interface designed to help users track expenses, manage savings, and manage accounts securely. The design prioritizes simplicity, modern visual hierarchy, and financial clarity through interactive elements and graphs.",
    buildWith: "Figma",
    cover: moneyMgmtMain,
    mockups: [moneyMgmtMain]
  },
  {
    id: 6,
    title: "Chromatik -Personal AI Stylist Application Design",
    description: "An AI-based virtual styling app that recommends outfits based on user preferences, body type, and occasion. The design highlights personalization, smooth onboarding, and an interactive style matching experience.",
    buildWith: "Figma",
    cover: chromatikMain,
    mockups: [chromatikMain]
  }
]

const Projects = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-6 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Main Project Image */}
                <div className="mb-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={project.cover} 
                      alt={`${project.title} preview`} 
                      className="w-full h-64 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full border border-blue-300 border-opacity-50">
                    <span className="text-blue-100 text-sm font-medium">
                      Built with: {project.buildWith}
                    </span>
                  </div>
                  
                  <p className="text-blue-100 text-sm md:text-base leading-relaxed opacity-90">
                    {project.description}
                  </p>

                  {/* Optional: View Details Button */}
                  <button className="mt-4 px-4 py-2 bg-blue-600 bg-opacity-50 hover:bg-opacity-70 text-white rounded-lg transition-all duration-200 border border-blue-400 border-opacity-30 hover:border-opacity-50">
                    View Details
                  </button>
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