import React from 'react';
import { ExternalLink, Github, Zap, Bot, Calculator, Heart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EcoSim360",
      description: "Interactive simulation platform modeling economic policy impacts using real demographic data. Features UBI, taxation, and wage reform simulations with Python, Pandas, and Streamlit.",
      tech: ["Python", "Pandas", "Streamlit", "Data Science"],
      status: "In Development",
      icon: <Zap className="text-blue-500" size={24} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "NeoCred",
      description: "Creditworthiness assessment platform for individuals with limited traditional credit history. Leverages alternative signals like utility payments, psychometric insights, and social media activity to generate alternate credit scores using RESTful APIs.",
      tech: ["Python", "Flask", "API", "JSON", "Credit Analysis"],
      github: "https://github.com/anuyaya27/NeoCred",
      icon: <Calculator className="text-emerald-500" size={24} />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Eleganza",
      description: "Full-stack AI fashion assistant generating personalized outfit recommendations using wardrobe data, location, weather, and style preferences. Features wardrobe digitization, real-time weather integration, and intelligent filtering for seasonality and occasion-based looks.",
      tech: ["React.js", "Firebase", "AI", "Weather API", "UI/UX"],
      github: "https://github.com/anuyaya27/Eleganza",
      icon: <Heart className="text-pink-500" size={24} />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "PhishNet",
      description: "Chrome extension that helps users stay safe online by identifying potentially harmful content on Twitter (X) and Gmail. Automatically scans tweets and emails in real time, analyzing content for phishing, scams, and malicious links. Features seamless integration and a practice game for user education.",
      tech: ["Python", "PyTorch", "Flask", "AWS", "JavaScript", "MongoDB", "HTML", "CSS", "Machine Learning", "Docker"],
      github: "https://github.com/Sachin-dot-py/PhishNet",
      icon: <Bot className="text-cyan-500" size={24} />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Emocia",
      description: "AI model that recognizes facial expressions and maps them to emojis in real-time using computer vision and machine learning techniques.",
      tech: ["Python", "Computer Vision", "Machine Learning", "AI"],
      github: "https://github.com/anuyaya27/Emocia",
      icon: <Bot className="text-purple-500" size={24} />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Profit Panda",
      description: "Machine learning-powered trading bot for stock predictions in the food and hospitality industry, inspired by Panda Express.",
      tech: ["Python", "Machine Learning", "Financial APIs", "Trading"],
      github: "https://github.com/anuyaya27/Profit-Panda",
      icon: <Bot className="text-green-500" size={24} />,
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Personal Projects
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-semibold drop-shadow-lg">
            Innovative solutions at the intersection of technology, finance, and social impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-white/40"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
                  {project.status && (
                    <span className="px-2 py-1 bg-blue-500/30 text-blue-100 text-xs rounded-full border border-blue-400/30">
                      {project.status}
                    </span>
                  )}
                </div>
                
                <p className="text-white mb-4 leading-relaxed font-medium drop-shadow-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-white/20 text-white rounded text-sm border border-white/40 drop-shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-100 mb-4 font-medium">
            Find more projects and contributions on my GitHub profile
          </p>
          <a 
            href="https://github.com/anuyaya27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;