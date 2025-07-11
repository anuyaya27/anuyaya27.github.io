import React from 'react';
import { Brain, BarChart3, Code2, Target } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Brain className="text-blue-600" size={24} />,
      title: "Artificial Intelligence & ML",
      description: "Fascinated by AI's potential to revolutionize financial markets and solve complex problems"
    },
    {
      icon: <BarChart3 className="text-green-600" size={24} />,
      title: "Finance & Data Analysis",
      description: "Passionate about leveraging data science for predictive modeling and market analysis"
    },
    {
      icon: <Code2 className="text-purple-600" size={24} />,
      title: "Algorithmic Trading",
      description: "Developing strategies to understand and predict market behaviors through code"
    },
    {
      icon: <Target className="text-red-600" size={24} />,
      title: "Fintech Innovation",
      description: "Eager to contribute to the intersection of technology and financial services"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            About Me
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-semibold drop-shadow-lg">
            Passionate about leveraging technology and data science to solve complex problems in finance and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-white leading-relaxed font-medium drop-shadow-md">
              Currently pursuing a double major in Mathematics-Computer Science and Economics at UC San Diego, 
              I'm passionate about the intersection of technology, finance, and data-driven insights. My focus 
              areas include artificial intelligence, machine learning, algorithmic trading, and fintech innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="p-6 bg-white/10 backdrop-blur-md rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-white/40"
              >
                <div className="flex items-center gap-3 mb-3">
                  {interest.icon}
                  <h3 className="font-semibold text-white drop-shadow-md">{interest.title}</h3>
                </div>
                <p className="text-white text-sm leading-relaxed font-medium drop-shadow-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;