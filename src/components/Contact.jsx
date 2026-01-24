import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import Navbar from './Navbar';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent! Check console for form data.');
  };

  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl border-2 border-white border-opacity-30 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Have a project in mind?
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Let's Connect
          </h2>
        </div>

        {/* Contact Info Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="mailto:tonmoydeori09@gmail.com"
            className="flex items-center justify-center gap-2 bg-blue-800 bg-opacity-80 hover:bg-opacity-100 text-white px-6 py-3 rounded-full transition-all"
          >
            <Mail size={20} />
            <span>tonmoydeori09@gmail.com</span>
          </a>
          <a
            href="https://wa.me/919678019437"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-800 bg-opacity-80 hover:bg-opacity-100 text-white px-6 py-3 rounded-full transition-all"
          >
            <Phone size={20} />
            <span>+91 9678019437</span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-white text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-blue-200 bg-opacity-60 border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-blue-200 bg-opacity-60 border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Enter your Text</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-blue-200 bg-opacity-60 border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 resize-none"
              required
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-3 rounded-full text-lg transition-colors shadow-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Contact;