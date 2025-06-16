// src/components/Footer.jsx
import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-800 border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">ImpriStyle</h2>
          <p className="text-sm text-gray-600">Pour votre service!</p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Quick Links</h3>
          <a href="#" className="hover:text-gray-900">Other Products</a>
          <a href="#" className="hover:text-gray-900">Upcoming Products</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Contact Us</h3>
          <a href="mailto:contact@impristyle.com" className="hover:text-gray-900 flex items-center">
            <Mail className="mr-2" size={18} /> contact@impristyle.com
          </a>
          <div className="flex space-x-4 pt-2">
            <a href="https://instagram.com/impristyle" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-pink-500" size={24} />
            </a>
            <a href="https://wa.me/YOURNUMBER" target="_blank" rel="noopener noreferrer">
              <Mail className="hover:text-green-500" size={24} /> 
            </a>
            <a href="https://linkedin.com/company/impristyle" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-blue-500" size={24} />
            </a>
            <a href="https://github.com/impristyle" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-gray-700" size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pt-6">
        © {new Date().getFullYear()} ImpriStyle. All rights reserved.
      </div>
    </footer>
);
}
