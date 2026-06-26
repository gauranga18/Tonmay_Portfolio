import React from "react";
import {
  Code2, Palette, Database, Figma, Image, Smartphone,
  Sparkles, Users, Heart, Eye, Layers,
} from "lucide-react";
import Navbar from "./Navbar";
import LiquidEther from "./LiquidEther";

const technicalSkills = [
  { name: "HTML",          icon: Code2,     bgColor: "bg-orange-500" },
{ name: "CSS",           icon: Palette,   bgColor: "bg-blue-600"   },
{ name: "Figma",         icon: Figma,     bgColor: "bg-purple-500" },
{ name: "Adobe Express", icon: Image,     bgColor: "bg-red-600"    },
{ name: "C",             icon: Code2,     bgColor: "bg-blue-700"   },
{ name: "Python",        icon: Code2,     bgColor: "bg-yellow-500" },
{ name: "C++",           icon: Code2,     bgColor: "bg-blue-600"   },
{ name: "MySQL",         icon: Database,  bgColor: "bg-gray-700"   },
];

const designingSkills = [
  { name: "Web Design",  icon: Layers,    bgColor: "bg-cyan-500"  },
{ name: "App Design",  icon: Smartphone,bgColor: "bg-green-600" },
{ name: "Logo Design", icon: Sparkles,  bgColor: "bg-blue-800"  },
{ name: "Brand Design",icon: Palette,   bgColor: "bg-orange-500"},
];

const interpersonalSkills = [
  {
    title: "Collaboration",
    description: "Working effectively in cross-functional teams, sharing ideas, and supporting colleagues.",
    icon: Users,
  },
{
  title: "Creativity",
  description: "Bringing fresh perspective and visual storytelling to design challenges.",
  icon: Sparkles,
},
{
  title: "Empathy",
  description: "Understanding users' needs, expectations, and the client's vision.",
  icon: Heart,
},
{
  title: "Attention to Detail",
  description: "Ensuring every pixel, interaction, and transition feels intentional.",
  icon: Eye,
},
];

const SkillGrid = ({ skills }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {skills.map((skill) => {
    const Icon = skill.icon;
    return (
      <div
      key={skill.name}
      className="flex flex-col items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200"
      >
      <div className={`w-14 h-14 ${skill.bgColor} rounded-lg flex items-center justify-center mb-3`}>
      <Icon className="w-8 h-8 text-white" />
      </div>
      <span className="text-white font-medium text-center">{skill.name}</span>
      </div>
    );
  })}
  </div>
);

const Skills = () => (
  <>
  <Navbar />

  <div className="min-h-screen relative overflow-hidden bg-[#060010]">

  {/* LiquidEther background */}
  <div className="absolute inset-0 z-0">
  <LiquidEther
  colors={["#7b2ff7", "#c724b1", "#ff6ef7", "#00fff9", "#3b82f6"]}
  mouseForce={18}
  cursorSize={120}
  resolution={0.5}
  autoDemo={true}
  autoSpeed={0.3}
  autoIntensity={2.5}
  autoResumeDelay={2000}
  autoRampDuration={0.8}
  takeoverDuration={0.25}
  isBounce={false}
  isViscous={false}
  />
  </div>

  {/* Subtle overlay */}
  <div
  className="absolute inset-0 z-[1] pointer-events-none"
  style={{
    background:
    "linear-gradient(to bottom, rgba(6,0,16,0.55) 0%, rgba(6,0,16,0.25) 50%, rgba(6,0,16,0.65) 100%)",
  }}
  />

  {/* Content */}
  <div className="relative z-[2] px-4 md:px-8 py-10">
  <div className="max-w-4xl mx-auto space-y-10">

  {/* Technical Skills */}
  <section className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/15">
  <h2 className="text-white text-2xl font-semibold mb-6">Technical Skills</h2>
  <SkillGrid skills={technicalSkills} />
  </section>

  {/* Designing Skills */}
  <section className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/15">
  <h2 className="text-white text-2xl font-semibold mb-6">Designing Skills</h2>
  <SkillGrid skills={designingSkills} />
  </section>

  {/* Interpersonal Skills */}
  <section className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/15">
  <h2 className="text-white text-2xl font-semibold mb-6">Interpersonal Skills</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {interpersonalSkills.map((skill) => {
    const Icon = skill.icon;
    return (
      <div
      key={skill.title}
      className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition-all duration-200"
      >
      <div className="flex items-center gap-3 mb-2">
      <Icon className="w-5 h-5 text-cyan-300" />
      <h3 className="text-white text-lg font-semibold">{skill.title}</h3>
      </div>
      <p className="text-white/75 text-sm leading-relaxed">{skill.description}</p>
      </div>
    );
  })}
  </div>
  </section>

  </div>
  </div>
  </div>
  </>
);

export default Skills;
