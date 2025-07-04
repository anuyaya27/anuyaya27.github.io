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
};

export default About;