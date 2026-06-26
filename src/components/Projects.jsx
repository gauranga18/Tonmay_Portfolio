import React from 'react';
import Navbar from './Navbar';
import LiquidEther from './LiquidEther';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

import videoMain       from '../assets/Frame 15.png';
import carRentalMain   from '../assets/Frame 16.png';
import ridingGearMain  from '../assets/Rynox - riding gears 1.png';
import toursTravelMain from '../assets/Rynox - riding gears 2.png';
import moneyMgmtMain   from '../assets/Money-management.png';
import chromatikMain   from '../assets/Rynox - riding gears 4.png';

const projects = [
  {
    id: 1,
    title: "Video Management and Analytics UI",
    description:
    "A Demo Video Management & Analytics Tool enabling sharing of pre-recorded software demo videos with prospective clients — customized access, viewer engagement tracking, and analytics reports.",
    buildWith: "Figma",
    cover: videoMain,
    figmaUrl: "https://www.figma.com/design/iKxVEYBPh5cn4LBLm9Qv4C/Untitled?node-id=0-1&t=WcewNqHNorpsRNkC-1",
    tag: "bg-violet-500/20 text-violet-200 border-violet-400/30",
  },
{
  id: 2,
  title: "Car Rentals Website Design",
  description:
  "A sleek, responsive car rental platform designed for ease of booking — clean UI, intuitive filtering, and engaging animations for a seamless user journey.",
  buildWith: "Figma",
  cover: carRentalMain,
  figmaUrl: "https://www.figma.com/design/Oja8oS2OAye3ZcFNSHCgPC/Untitled?node-id=0-1&t=xu9H09mDHHZmPIVD-1",
  tag: "bg-cyan-500/20 text-cyan-200 border-cyan-400/30",
},
{
  id: 3,
  title: "Riding Gears Accessories Website Redesign",
  description:
  "A bold, performance-driven UI redesign for a motorcycle riding gear e-commerce platform — enhanced product visibility and simplified category navigation.",
  buildWith: "Figma",
  cover: ridingGearMain,
  figmaUrl: "https://www.figma.com/design/HZa1DX3fTG7CpjMOuT2BeP/Untitled?node-id=0-1&t=OjDxZvrMRpUgN14Y-1",
  tag: "bg-orange-500/20 text-orange-200 border-orange-400/30",
},
{
  id: 4,
  title: "Tours and Travels Application UI/UX",
  description:
  "A travel booking interface to help users explore destinations and book trips — rich visuals, clear navigation, and a mobile-friendly layout.",
  buildWith: "Figma",
  cover: toursTravelMain,
  figmaUrl: "https://www.figma.com/design/vPLZrVQgrlmh1dqvfYadgS/Untitled?node-id=0-1&t=rgLqdQ2cvBjcUrBV-1",
  tag: "bg-green-500/20 text-green-200 border-green-400/30",
},
{
  id: 5,
  title: "Money Management Application UI/UX",
  description:
  "An intuitive fintech app interface for tracking expenses, managing savings, and account clarity — modern visual hierarchy, interactive graphs, and a secure feel.",
  buildWith: "Figma",
  cover: moneyMgmtMain,
  figmaUrl: "https://www.figma.com/design/Wo0ucUdtfaUlr04cFJCpO3/fintec-app?node-id=0-1&t=hF1XwCG3PeqresKL-1",
  tag: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
},
{
  id: 6,
  title: "Chromafit — Personal AI Stylist App",
  description:
  "An AI-based virtual styling app recommending outfits by preferences, body type, and occasion — smooth onboarding and an interactive style-matching experience.",
  buildWith: "Figma",
  cover: chromatikMain,
  figmaUrl: "https://www.figma.com/design/lkmHRon8OJgnkSKt3GyvW2/Untitled?node-id=0-1&t=RxXyEcBoWwSNDlTj-1",
  tag: "bg-pink-500/20 text-pink-200 border-pink-400/30",
},
];

const FALLBACK =
'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTJlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';

const FigmaIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
  <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.019-3.02h-3.117v6.04zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.587v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.587v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.042 3.02c0 1.665 1.365 3.02 3.042 3.02 1.705 0 3.093-1.376 3.093-3.061V16.49H8.148z" />
  </svg>
);

const Projects = () => {
  const NAV_H = 64; // px — matches your Navbar height

  return (
    <div className="fixed inset-0 bg-[#060010] overflow-hidden">

    {/* ── LiquidEther background ── */}
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
    <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
      "linear-gradient(to bottom, rgba(6,0,16,0.55) 0%, rgba(6,0,16,0.25) 50%, rgba(6,0,16,0.65) 100%)",
    }}
    />
    </div>

    {/* ── Navbar ── */}
    <div className="absolute top-0 left-0 right-0 z-50">
    <Navbar />
    </div>

    {/* ── Override ScrollStack inner padding & card sizing via a scoped style tag ── */}
    <style>{`
      /* Remove ScrollStack's default huge padding; we control spacing via itemDistance */
      .projects-stack .scroll-stack-inner {
        padding: 0 !important;
      }

      /* Each card: viewport minus navbar height, with 60px margin on all sides */
      .projects-stack .scroll-stack-card {
        height: calc(100vh - ${NAV_H}px - 120px) !important; /* 60px top + 60px bottom */
        width: calc(100vw - 120px) !important;               /* 60px left + 60px right */
        margin-left: auto !important;
        margin-right: auto !important;
        margin-top: 0 !important;
        border-radius: 28px !important;
        padding: 0 !important;
        overflow: hidden;
        box-shadow: 0 8px 48px rgba(0,0,0,0.5) !important;
      }
      `}</style>

      {/* ── ScrollStack container: below navbar, full remaining height ── */}
      <div
      className="absolute left-0 right-0 z-10"
      style={{ top: NAV_H, bottom: 0 }}
      >
      <ScrollStack
      className="projects-stack"
      useWindowScroll={false}
      itemDistance={80}       /* vertical gap between cards before stacking */
      itemScale={0.04}
      itemStackDistance={20}
      stackPosition="12%"
      scaleEndPosition="6%"
      baseScale={0.9}
      rotationAmount={0}
      blurAmount={1}
      >
      {projects.map((project) => (
        <ScrollStackItem key={project.id}>
        {/* Card inner: horizontal split on md+, vertical on mobile */}
        <div
        className="w-full h-full flex flex-col md:flex-row"
        style={{
          background: "rgba(10, 6, 30, 0.85)",
                                  backdropFilter: "blur(18px)",
                                  WebkitBackdropFilter: "blur(18px)",
                                  border: "1px solid rgba(255,255,255,0.08)",
        }}
        >
        {/* Left — text panel */}
        <div className="flex flex-col justify-center gap-4 p-8 md:p-10 md:w-1/2 flex-shrink-0">
        <span className="text-white/30 text-xs font-mono tracking-widest">
        {String(project.id).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>

        <h3 className="text-white text-2xl md:text-3xl font-bold leading-snug">
        {project.title}
        </h3>

        <span className={`self-start inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium ${project.tag}`}>
        Built with {project.buildWith}
        </span>

        <p className="text-white/65 text-sm md:text-base leading-relaxed line-clamp-4">
        {project.description}
        </p>

        <button
        onClick={() => window.open(project.figmaUrl, '_blank', 'noopener,noreferrer')}
        className="self-start flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full border border-white/15 hover:border-white/30 transition-all duration-200"
        >
        <FigmaIcon />
        View in Figma
        </button>
        </div>

        {/* Right — image, fills remaining space */}
        <div className="flex-1 min-h-0 overflow-hidden">
        <img
        src={project.cover}
        alt={`${project.title} preview`}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => { e.target.src = FALLBACK; }}
        />
        </div>
        </div>
        </ScrollStackItem>
      ))}
      </ScrollStack>
      </div>
      </div>
  );
};

export default Projects;
