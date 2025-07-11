import React from 'react';
import { Code, Globe, Database, FileText, ExternalLink } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "SQL", "MATLAB", "Kotlin"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Spoken Languages",
      icon: <Globe className="text-green-600" size={24} />,
      skills: ["English", "Hindi", "French", "Sanskrit", "Urdu", "Korean (Basic)"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="text-purple-600" size={24} />,
      skills: ["Git", "Machine Learning", "Data Analysis", "Financial Modeling", "Streamlit"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Skills & More
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-semibold drop-shadow-lg">
            Technical expertise and resources to help you learn more about my work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-white/40"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors border border-white/40 drop-shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-white/40">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-blue-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Resume</h3>
            <p className="text-white mb-4 font-medium drop-shadow-sm">
              Download my most recent resume to learn more about my experiences and qualifications.
            </p>
            <a 
              href="https://drive.google.com/file/d/1sNyF4LU3uCN-OBPTZasL-mOyGoaITjzg/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileText size={20} />
              Download Resume
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-white/40">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="text-green-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Quant Blog</h3>
            <p className="text-white mb-4 font-medium drop-shadow-sm">
              Check out my latest quantitative analysis blog post on the Black Scholes Model.
            </p>
            <a 
              href="https://tquantt.com/Blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <ExternalLink size={20} />
              Read Blog
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-white/40">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-purple-200" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">GitHub Portfolio</h3>
            <p className="text-white mb-4 font-medium drop-shadow-sm">
              Explore my complete collection of projects, contributions, and open-source work.
            </p>
            <a 
              href="https://github.com/anuyaya27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <ExternalLink size={20} />
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;