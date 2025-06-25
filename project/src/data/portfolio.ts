export const personalInfo = {
  name: "Sagar Joshi",
  title: "Full-Stack Developer & Engineering Student",
  email: "joshisagar0596@email.com",
  phone: "8218019943",
  location: "Haldwani , Uttarakhand",
  github: "https://github.com/alexjohnson",
  linkedin: "https://linkedin.com/in/alexjohnson",
  portfolio: "https://alexjohnson.dev"
};

export const skills = {
  frontend: [
    "React", "TypeScript", "Tailwind CSS", 
    "JavaScript", "HTML5", "CSS3", "Responsive Design"
  ],
  backend: [
    "Node.js", "Python", "Express.js", "FastAPI", 
    "PostgreSQL", "MongoDB","MySQL", "REST APIs"
  ],
  tools: [
    "Git", "Vercel", "Firebase", "Figma", 
    "VS Code", "Linux", "CI/CD","Postman"
  ],
  languages: [
    "JavaScript", "TypeScript", "Python", "Java", "C++", "SQL" , "C"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Quiz Website",
    description: "Full-stack quiz website with real-time score management, mail system, and admin dashboard.",
    longDescription: "Built a complete e-commerce platform using React, Node.js, and PostgreSQL. Features include user authentication, shopping cart, payment integration with Stripe, order tracking, and comprehensive admin panel for inventory management.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
    longDescription: "Developed a comprehensive task management solution using React, Express.js, and MongoDB. Includes real-time collaboration, drag-and-drop interfaces, project templates, and team analytics dashboard.",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Material-UI"],
    liveUrl: "https://taskflow-demo.com",
    githubUrl: "https://github.com/alexjohnson/taskflow",
    featured: true
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "Real-time weather data visualization with predictive analytics and interactive charts.",
    longDescription: "Created a weather analytics dashboard using Python, FastAPI, and React. Features include real-time weather data integration, predictive modeling, interactive charts, and location-based forecasting.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "FastAPI", "React", "D3.js", "PostgreSQL", "Docker"],
    liveUrl: "https://weather-analytics.com",
    githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    featured: false
  },
  {
    id: 4,
    title: "Social Media API",
    description: "RESTful API for social media platform with authentication, posts, comments, and real-time notifications.",
    longDescription: "Built a scalable social media API using Node.js, Express, and MongoDB. Includes JWT authentication, file uploads, real-time notifications, and comprehensive API documentation.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "Swagger"],
    githubUrl: "https://github.com/alexjohnson/social-api",
    featured: false
  }
];

// export const experience = [
//   {
//     id: 1,
//     company: "TechCorp Solutions",
//     position: "Full-Stack Developer Intern",
//     period: "Jun 2024 - Present",
//     description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on large-scale projects and implemented new features that improved user engagement by 25%.",
//     technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
//   },
//   {
//     id: 2,
//     company: "University of California",
//     position: "Research Assistant",
//     period: "Jan 2024 - May 2024",
//     description: "Assisted in machine learning research project focused on natural language processing. Developed data preprocessing pipelines and implemented neural network models using Python and TensorFlow.",
//     technologies: ["Python", "TensorFlow", "Jupyter", "Git"]
//   },
//   {
//     id: 3,
//     company: "Freelance",
//     position: "Web Developer",
//     period: "Sep 2023 - Dec 2023",
//     description: "Built custom websites for local businesses, focusing on responsive design and performance optimization. Delivered 5+ projects on time and within budget.",
//     technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"]
//   }
// ];

export const education = [
  {
    degree: "Bachelor of technology in Computer Science Engineering",
    school: "Graphic Era Hill University , Bhimtal",
    period: "2022 - 2026",
    // gpa: "3.8/4.0",
    relevant: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Website Development"]
  }
];