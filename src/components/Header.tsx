import React from 'react';
import { ChevronDown, Code, Calculator, TrendingUp } from 'lucide-react';

const Header = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi! I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ananya Saxena
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-6">
            Junior at <span className="font-semibold">UC San Diego</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/30">
              <Code className="text-blue-400" size={20} />
              <span className="text-white font-semibold drop-shadow-lg">Mathematics-Computer Science</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/30">
              <TrendingUp className="text-purple-400" size={20} />
              <span className="text-white font-semibold drop-shadow-lg">Economics</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 animate-fade-in-delay">
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto font-semibold drop-shadow-lg">
            Passionate about the intersection of technology, finance, and data-driven insights
          </p>
          <button
            onClick={scrollToNext}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More About Me
            <ChevronDown className="animate-bounce" size={20} />
          </button>
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Calculator className="text-blue-400/30" size={48} />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delay">
        <Code className="text-purple-400/30" size={48} />
      </div>
    </section>
  );
};

export default Header;