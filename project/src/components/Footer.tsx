import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer & Engineering Student passionate about creating 
              innovative solutions and meaningful user experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>{personalInfo.location}</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-white transition-colors block"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="hover:text-white transition-colors block"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-500" size={16} /> by {personalInfo.name}
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;