import React from 'react';
import { FileText, Code, Heart, ExternalLink } from 'lucide-react';

const More = () => {
  const skills = {
    programming: ["Java", "Python", "JavaScript", "HTML", "MATLAB", "SQL", "CSS", "Git", "Kotlin"],
    languages: ["English", "Hindi", "French", "Sanskrit", "Urdu", "Korean (basic)"]
  };

  const sections = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Resume",
      description: "Click here to download my most recent resume!",
      link: "https://drive.google.com/file/d/1sNyF4LU3uCN-OBPTZasL-mOyGoaITjzg/view?usp=drive_link",
      buttonText: "Download Resume",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Quant Blog",
      description: "My latest Quant Blog on Black Scholes Model!",
      link: "https://tquantt.com/Blog",
      buttonText: "Read Blog",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "iHomecure",
      description: "Hailing from a family of healthcare professionals, I have always felt the need to make healthcare easily accessible to everyone. My most recent project, a startup, iHomecure is founded with the same vision.",
      link: "https://ihomecure.com/",
      buttonText: "Visit Website",
      gradient: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            More About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${section.gradient} text-white rounded-2xl mb-6 shadow-lg`}>
                {section.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
              <p className="text-gray-800 leading-relaxed mb-6">{section.description}</p>
              
              <a
                href={section.link}
                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${section.gradient} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 font-medium`}
              >
                <span>{section.buttonText}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Code className="w-5 h-5 mr-3 text-blue-600" />
                Programming Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.programming.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-50/70 to-purple-50/70 text-gray-800 rounded-full border border-blue-200/50 font-medium backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-5 h-5 mr-3 text-xl">🌍</span>
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((language, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-green-50/70 to-teal-50/70 text-gray-800 rounded-full border border-green-200/50 font-medium backdrop-blur-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;