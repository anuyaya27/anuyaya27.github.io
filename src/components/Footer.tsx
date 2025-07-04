import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Ananya Saxena
            </h3>
            <p className="text-gray-700">Mathematics-CS & Economics @ UCSD</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/a3saxena/"
              className="p-3 bg-white/30 backdrop-blur-sm rounded-xl hover:bg-white/40 transition-colors duration-200 transform hover:-translate-y-1 shadow-sm hover:shadow-md border border-white/50"
            >
              <Linkedin size={20} className="text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="https://github.com/anuyaya27"
              className="p-3 bg-white/30 backdrop-blur-sm rounded-xl hover:bg-white/40 transition-colors duration-200 transform hover:-translate-y-1 shadow-sm hover:shadow-md border border-white/50"
            >
              <Github size={20} className="text-gray-700 hover:text-gray-900" />
            </a>
            <a
              href="mailto:27ananyasaxena@gmail.com"
              className="p-3 bg-white/30 backdrop-blur-sm rounded-xl hover:bg-white/40 transition-colors duration-200 transform hover:-translate-y-1 shadow-sm hover:shadow-md border border-white/50"
            >
              <Mail size={20} className="text-gray-700 hover:text-red-500" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/30 mt-8 pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            Made by Ananya Saxena
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;