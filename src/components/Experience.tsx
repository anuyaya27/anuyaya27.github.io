import React from 'react';
import { Award, Building, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Algorithmic Problem Solving Intern",
      company: "ICPC Foundation",
      period: "Current",
      description: "Collaborate on designing and curating challenging algorithmic problems for programming contests held worldwide. Integrate multiple concepts to craft complex yet engaging problems while ensuring fairness and balance for all participants.",
      highlights: ["Global Impact", "Algorithm Design", "Contest Development"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Financial Analyst",
      company: "Student Life Business Office, UC San Diego",
      period: "Current",
      description: "Assist student organizations with financial procedures, including processing purchase orders, reimbursements, and payments. Awarded 'Employee of the Quarter' for Fall 2024 for professionalism and attention to detail.",
      highlights: ["Employee of the Quarter", "Financial Analysis", "Policy Compliance"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Research Assistant",
      company: "Department of Economics, UC San Diego",
      period: "Current",
      description: "Research on 'Promotion Processes in Developing Countries' and 'Schooling Markets in Ethiopia'. Work with RAIS Dataset and analyze World Bank team leads' promotion processes.",
      highlights: ["Data Analytics", "Research", "World Bank Analysis"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Data Science Intern",
      company: "KopyKitab",
      period: "Previous",
      description: "Analyzed student behaviors on website and app to provide insights for improving user experience. Enhanced the existing recommendation system to suggest relevant study materials based on student preferences.",
      highlights: ["User Analytics", "Recommendation Systems", "UX Insights"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Software Engineering Fellow",
      company: "Headstarter AI",
      period: "Previous",
      description: "Completed 5 AI-based projects and applications with a final project targeting 1000+ users. Participated in weekly hackathons and webinars hosted by renowned experts.",
      highlights: ["AI Projects", "Hackathons", "User Growth"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Mobile Development Intern",
      company: "6 Degrees",
      period: "Previous",
      description: "Developed scalable mobile application interface for Hettich India. Optimized backend code and collaborated with business management team to translate user requirements into technical specifications.",
      highlights: ["Mobile Development", "Backend Optimization", "Client Relations"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Work Experience
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-semibold drop-shadow-lg">
            A glimpse of my professional journey and the amazing teams I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-white/40"
            >
              <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{exp.title}</h3>
                    <p className="text-blue-200 font-semibold mb-2 drop-shadow-sm">{exp.company}</p>
                    <p className="text-gray-100 text-sm drop-shadow-sm">{exp.period}</p>
                  </div>
                  <Building className="text-blue-200 flex-shrink-0" size={24} />
                </div>
                
                <p className="text-white mb-4 leading-relaxed font-medium drop-shadow-sm">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium border border-white/40 drop-shadow-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;