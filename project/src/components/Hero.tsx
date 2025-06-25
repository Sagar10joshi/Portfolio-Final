import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
              {personalInfo.name.split(' ')[0]}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {personalInfo.title}
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative web applications and solving complex problems through code. 
            Currently pursuing Computer Engineering while gaining hands-on experience in full-stack development.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;