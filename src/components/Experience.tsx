import React from 'react';
import { Award, Building, Users, TrendingUp, Code, Search } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: <Code className="w-5 h-5" />,
      company: "ICPC Foundation",
      role: "Algorithmic Problem Solving Intern",
      description: "Collaborate on designing and curating challenging algorithmic problems for programming contests held worldwide. Integrate multiple concepts to craft complex yet engaging problems while ensuring fairness and balance for all participants.",
      current: true
    },
    {
      icon: <Award className="w-5 h-5" />,
      company: "UC San Diego - Student Life Business Office",
      role: "Financial Analyst",
      description: "Assist student organizations with financial procedures, including processing purchase orders, reimbursements, and payments, ensuring compliance with university policies. Awarded 'Employee of the Quarter' for Fall 2024.",
      highlight: "Employee of the Quarter - Fall 2024",
      current: true
    },
    {
      icon: <Search className="w-5 h-5" />,
      company: "UC San Diego - Department of Economics",
      role: "Research Assistant",
      description: "Research on 'Promotion Processes in Developing Countries' and 'Schooling Markets in Ethiopia'. Contribute to data analytics and algorithm development for processing the RAIS Dataset and analyzing World Bank team leads.",
      current: true
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      company: "KopyKitab",
      role: "Data Science Intern",
      description: "Analyzed student behaviors on website and app to provide insights for improving user experience. Enhanced the existing recommendation system to suggest relevant study materials based on student preferences."
    },
    {
      icon: <Code className="w-5 h-5" />,
      company: "Headstarter AI",
      role: "Software Engineering Fellow",
      description: "Completed 5 AI-based projects and applications, with a final project to bring 1000+ users to the platform. Participated in weekly hackathons and webinars hosted by renowned experts."
    },
    {
      icon: <Building className="w-5 h-5" />,
      company: "6 Degrees",
      role: "Software Development Intern",
      description: "Contributed to developing a scalable mobile application interface for Hettich India. Optimized backend code and collaborated with business management team, attending client meetings to understand user requirements."
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A glimpse of my work experiences with amazing teams and industry experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="flex-shrink-0 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-4">
                  {exp.icon}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{exp.role}</h3>
                  <p className="text-base text-blue-600 font-medium mb-3">{exp.company}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.current && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Current
                      </span>
                    )}
                    {exp.highlight && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <Award className="w-3 h-3 mr-1" />
                        {exp.highlight}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-gray-800 leading-relaxed text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;