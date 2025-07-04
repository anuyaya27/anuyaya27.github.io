import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration with reduced opacity to let gradient show through */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">Hi!</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              I am <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ananya Saxena</span>
            </h1>
          </div>
          
          <div className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed space-y-2">
            <p>Currently a Junior at <strong className="text-gray-800">University of California, San Diego</strong></p>
            <p>Double majoring in</p>
            <p><strong className="text-gray-800">Mathematics-Computer Science</strong> and <strong className="text-gray-800">Economics</strong></p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#about"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
            >
              <span>About Me</span>
              <ArrowDown size={20} />
            </a>
            
            <a
              href="mailto:27ananyasaxena@gmail.com"
              className="inline-flex items-center justify-center space-x-2 border-2 border-gray-400 text-gray-800 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium bg-white/20 backdrop-blur-sm"
            >
              <Mail size={20} />
              <span>Get in Touch</span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/a3saxena/"
              className="p-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/anuyaya27"
              className="p-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-700 hover:text-gray-900"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:27ananyasaxena@gmail.com"
              className="p-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-700 hover:text-red-500"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;