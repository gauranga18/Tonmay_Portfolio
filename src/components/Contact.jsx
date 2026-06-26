import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import Navbar from './Navbar';
import LiquidEther from './LiquidEther';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! Check console for form data.');
  };

  return (
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
    <div className="relative z-[2] min-h-screen flex items-center justify-center p-4">
    <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 p-8 md:p-12">

    {/* Header */}
    <div className="text-center mb-8">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
    Have a project in mind?
    </h1>
    <h2 className="text-3xl md:text-4xl font-semibold text-white/90">
    Let's Connect
    </h2>
    </div>

    {/* Contact Info */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
    <a
    href="mailto:tonmoydeori09@gmail.com"
    className="flex items-center justify-center gap-2 bg-purple-600/40 hover:bg-purple-600/60 text-white px-6 py-3 rounded-full transition-all border border-purple-400/30"
    >
    <Mail size={20} />
    <span>tonmoydeori09@gmail.com</span>
    </a>
    <a
    href="https://wa.me/919678019437"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-purple-600/40 hover:bg-purple-600/60 text-white px-6 py-3 rounded-full transition-all border border-purple-400/30"
    >
    <Phone size={20} />
    <span>+91 9678019437</span>
    </a>
    </div>

    {/* Form */}
    <div className="space-y-6">
    <div>
    <label className="block text-white/80 text-sm mb-2">Name</label>
    <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all"
    placeholder="Your name"
    required
    />
    </div>

    <div>
    <label className="block text-white/80 text-sm mb-2">Email ID</label>
    <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all"
    placeholder="your@email.com"
    required
    />
    </div>

    <div>
    <label className="block text-white/80 text-sm mb-2">Message</label>
    <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    rows="5"
    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all resize-none"
    placeholder="Tell me about your project..."
    required
    />
    </div>

    <div className="flex justify-center pt-2">
    <button
    type="button"
    onClick={handleSubmit}
    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-12 py-3 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
    >
    Send Message
    </button>
    </div>
    </div>

    </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
