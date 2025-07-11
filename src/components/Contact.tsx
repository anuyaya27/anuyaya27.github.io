import React from 'react';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/a3saxena/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/anuyaya27",
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-gray-900"
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:27ananyasaxena@gmail.com",
      color: "from-red-600 to-red-700",
      hoverColor: "hover:from-red-700 hover:to-red-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Let's Connect
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-semibold drop-shadow-lg">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply chat about technology and finance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 bg-gradient-to-r ${link.color} ${link.hoverColor} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-center justify-center gap-3">
                  {link.icon}
                  <span className="text-white font-semibold text-lg">{link.name}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/40">
              <MessageCircle className="text-blue-200" size={24} />
              <span className="text-white font-semibold drop-shadow-sm">
                Open to internships, research opportunities, and collaborations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white mb-2 font-medium drop-shadow-sm">
              © 2024 Ananya Saxena. All rights reserved.
            </p>
            <p className="text-gray-100 text-sm drop-shadow-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;