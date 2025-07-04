import React from 'react';
import { ExternalLink, Github, BarChart3, Smile, TrendingUp, Calculator } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "EcoSim360",
      description: "An interactive simulation platform that models the impact of economic policy changes—such as Universal Basic Income (UBI), progressive taxation, and minimum wage reforms—on different income groups using real demographic and income distribution data.",
      tech: ["Python", "Pandas", "Streamlit", "Data Science"],
      status: "In Development",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Emocia",
      description: "An AI model that recognizes facial expressions in real-time and maps them to emojis. Leverages cutting-edge computer vision and machine learning techniques to interpret subtle facial cues and create more intuitive human-AI interactions.",
      tech: ["Computer Vision", "Machine Learning", "Python", "OpenCV"],
      github: "https://github.com/anuyaya27/Emocia",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Profit Panda",
      description: "A machine-learning-powered trading bot designed to make accurate stock predictions for companies in the food and hospitality industry. Leverages financial data APIs to analyze market trends and enhance prediction accuracy.",
      tech: ["Machine Learning", "Financial APIs", "Python", "Trading Algorithms"],
      github: "https://github.com/anuyaya27/Profit-Panda",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Gradeful",
      description: "A simple and intuitive GPA calculator that helps students track academic performance and plan ahead. Enter your past grades, future course load, and GPA goal to see what it takes to stay on track.",
      tech: ["JavaScript", "HTML", "CSS", "Web Development"],
      demo: "https://ananyasaxena.com/gpa-analyzer/",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Personal Projects
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Innovative solutions combining technology, finance, and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${project.gradient} text-white rounded-xl mb-6`}>
                {project.icon}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                {project.status && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {project.status}
                  </span>
                )}
              </div>
              
              <p className="text-gray-800 leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-gray-100/70 text-gray-800 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="font-medium">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/50">
            <p className="text-gray-800 mb-6 leading-relaxed">
              I also keep working on various other smaller personal projects that can be found on my GitHub page.
            </p>
            <a
              href="https://github.com/anuyaya27"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;