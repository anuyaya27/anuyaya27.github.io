import React from 'react';
import { Brain, TrendingUp, Code, Database } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Exploring the potential of AI to revolutionize financial markets"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Fintech Innovation",
      description: "Leveraging technology to tackle complex challenges in finance"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Algorithmic Trading",
      description: "Developing strategies to understand and predict market behaviors"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Science",
      description: "Using data analysis and predictive modeling for insights"
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            My Interests
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Passionate about the intersection of technology, finance, and data-driven insights!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {interests.map((interest, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl mb-4">
                {interest.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{interest.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50">
            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <p>
                My academic journey at UCSD fuels my fascination with artificial intelligence, machine learning, 
                and finance. With a strong foundation in mathematical modeling and computational techniques, 
                I am eager to leverage these skills to tackle complex challenges in the fintech industry.
              </p>

              <p>
                My journey began with a profound curiosity for algorithms and their real-world applications,
                leading me to delve into AI/ML's potential to revolutionize financial markets. Through relevant 
                coursework and hands-on projects, I've honed my abilities in data analysis, predictive modeling, 
                and algorithmic trading strategies, driven by a desire to understand and predict market behaviors.
              </p>

              <p>
                Outside the classroom, I actively seek opportunities to expand my knowledge through internships, 
                research collaborations, and participation in events focused on fintech innovations. These 
                experiences have not only enriched my technical skills but also sharpened my ability to collaborate
                effectively in multidisciplinary teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;