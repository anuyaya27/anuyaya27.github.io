import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and finance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">Get in Touch</h3>
            
            <div className="space-y-6">
              <a
                href="mailto:27ananyasaxena@gmail.com"
                className="flex items-center space-x-4 p-4 bg-white/30 backdrop-blur-sm rounded-xl hover:bg-white/40 transition-colors duration-200 group border border-white/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-700">27ananyasaxena@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/a3saxena/"
                className="flex items-center space-x-4 p-4 bg-white/30 backdrop-blur-sm rounded-xl hover:bg-white/40 transition-colors duration-200 group border border-white/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <p className="text-gray-700">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/anuyaya27"
                className="flex items-center space-x-4 p-4 bg-white/30 backdrop-blur-sm rounded-xl hover:bg-white/40 transition-colors duration-200 group border border-white/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">GitHub</p>
                  <p className="text-gray-700">Check out my projects</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-white/30 backdrop-blur-sm rounded-xl border border-white/50">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-700">San Diego, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-semibold mb-6">Ready to Collaborate?</h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Whether you're looking for a passionate developer, a research collaborator, 
              or someone to discuss the latest in fintech and AI, I'd love to hear from you.
            </p>
            <a
              href="mailto:27ananyasaxena@gmail.com"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={20} />
              <span>Send Message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;