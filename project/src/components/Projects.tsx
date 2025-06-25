import React, { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter(project => project.featured);
  const displayProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            problem-solving, and creating user-focused solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 flex items-center space-x-1 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    <Star size={12} />
                    <span>Featured</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                  >
                    Learn More
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="View Live Project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="View Source Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && projects.length > featuredProjects.length && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const project = projects.find(p => p.id === selectedProject)!;
                return (
                  <div>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-t-xl"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {project.longDescription}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                          >
                            <ExternalLink className="mr-2" size={16} />
                            View Live
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <Github className="mr-2" size={16} />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;