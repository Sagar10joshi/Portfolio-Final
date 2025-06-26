import React from 'react';
import { Code, Database, Palette, Globe } from 'lucide-react';
import { skills, education } from '../data/portfolio';

const About: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Palette className="w-6 h-6" />,
      skills: skills.frontend,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: skills.backend,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Tools & Technologies',
      icon: <Globe className="w-6 h-6" />,
      skills: skills.tools,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: skills.languages,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a passionate full-stack developer and computer engineering student with a love for creating 
            innovative solutions and learning new technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              
              <p>
                Currently pursuing my Computer Engineering degree, I combine academic knowledge with practical 
                experience gained through many projects, and personal initiatives. I thrive on 
                the challenge of turning complex problems into elegant, user-friendly solutions.
              </p>
              <p>
                When I'm not coding, you can find me writing poems, exploring new frameworks,listning some music  
                or mentoring fellow students in programming fundamentals.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {education[0].degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {education[0].school} • {education[0].period}
                  </p>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    GPA: {education[0].gpa}
                  </p> */}
                  <div className="flex flex-wrap gap-2">
                    {education[0].relevant.map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mr-3`}>
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;