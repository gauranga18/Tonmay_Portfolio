import React from 'react'
import Navbar from './Navbar'

const Projects = () => {
  const technicalSkills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', bgColor: 'bg-orange-500' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', bgColor: 'bg-blue-600' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', bgColor: 'bg-purple-500' },
    { name: 'Adobe Express', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg', bgColor: 'bg-red-600' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', bgColor: 'bg-blue-700' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', bgColor: 'bg-yellow-500' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', bgColor: 'bg-blue-600' },
    { name: 'Mysql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', bgColor: 'bg-gray-700' }
  ]

  const designingSkills = [
    { name: 'Web Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg', bgColor: 'bg-cyan-500' },
    { name: 'App Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', bgColor: 'bg-gray-600' },
    { name: 'Logo Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg', bgColor: 'bg-blue-800' },
    { name: 'Brand Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg', bgColor: 'bg-red-500' }
  ]

  const interpersonalSkills = [
    {
      title: 'Collaboration',
      description: 'Working effectively in cross-functional teams, sharing ideas, and supporting colleagues.'
    },
    {
      title: 'Creativity', 
      description: 'Bringing fresh perspective and visual storytelling to design challenges.'
    },
    {
      title: 'Empathy',
      description: 'Understanding users\' needs, wants, and the client\'s vision.'
    },
    {
      title: 'Attention to Detail',
      description: 'Making sure every pixel, interaction, and transition feels right.'
    }
  ]

  return (
    
   <>
   <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-4 md:p-8">
      {/* Header Navigation */}
     
           <div className="max-w-4xl mx-auto space-y-8">
        {/* Technical Skills Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white border-opacity-20">
          <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-200 cursor-pointer">
                <div className={`w-12 h-12 md:w-14 md:h-14 ${skill.bgColor} rounded-lg flex items-center justify-center mb-3 p-2`}>
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter brightness-0 invert" />
                </div>
                <span className="text-white text-sm md:text-base font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Designing Skills Section */}
       {/* Designing Skills Section */}
<div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white border-opacity-20">
  <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">Designing Skills</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
    {designingSkills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-200 cursor-pointer"
      >
        <div
          className={`w-12 h-12 md:w-14 md:h-14 ${skill.bgColor} rounded-lg flex items-center justify-center mb-3 p-2`}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain filter brightness-0 invert"
          />
        </div>
        <span className="text-white text-sm md:text-base font-medium">{skill.name}</span>
      </div>
    ))}
  </div>
</div>


        {/* Interpersonal Skills Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white border-opacity-20">
          <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">Interpersonal Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {interpersonalSkills.map((skill, index) => (
              <div key={index} className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-opacity-25 transition-all duration-200">
                <h3 className="text-white font-semibold text-lg mb-2">{skill.title}</h3>
                <p className="text-blue-100 text-sm md:text-base leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Projects