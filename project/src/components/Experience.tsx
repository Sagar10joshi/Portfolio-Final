// import React from 'react';
// import { Calendar, MapPin, ExternalLink } from 'lucide-react';
// import { experience } from '../data/portfolio';

// const Experience: React.FC = () => {
//   return (
//     <section id="experience" className="py-20 bg-white dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Experience
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             My professional journey and key experiences in software development, 
//             research, and collaborative projects.
//           </p>
//         </div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>

//           <div className="space-y-12">
//             {experience.map((exp, index) => (
//               <div key={exp.id} className="relative flex items-start">
//                 {/* Timeline dot */}
//                 <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                
//                 {/* Content */}
//                 <div className="ml-20 flex-1">
//                   <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
//                           {exp.position}
//                         </h3>
//                         <p className="text-blue-600 dark:text-blue-400 font-semibold">
//                           {exp.company}
//                         </p>
//                       </div>
//                       <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-2 sm:mt-0">
//                         <Calendar size={16} className="mr-1" />
//                         {exp.period}
//                       </div>
//                     </div>
                    
//                     <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
//                       {exp.description}
//                     </p>
                    
//                     <div className="flex flex-wrap gap-2">
//                       {exp.technologies.map((tech, techIndex) => (
//                         <span
//                           key={techIndex}
//                           className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//               Interested in Working Together?
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
//               I'm always open to discussing new opportunities, collaborating on interesting projects, 
//               or just having a conversation about technology and innovation.
//             </p>
//             <a
//               href="#contact"
//               className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
//             >
//               Get In Touch
//               <ExternalLink className="ml-2" size={16} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;