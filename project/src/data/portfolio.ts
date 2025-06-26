export const personalInfo = {
  name: "Sagar Joshi",
  title: "Full-Stack Developer & Engineering Student",
  email: "joshisagar0596@email.com",
  phone: "8218019943",
  location: "Haldwani , Uttarakhand",
  github: "https://github.com/Sagar10joshi",
  linkedin: "https://www.linkedin.com/in/sagar-joshi123",
  portfolio: "https://portfolio-final-xp2j.vercel.app/"
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
    "JavaScript", "TypeScript", "Python", "Java", "C++" , "C"
  ]
};

export const projects = [
  {
    id: 1,
    title: "College Canteen Website",
    description: "A responsive and user-friendly college canteen website enabling students to browse the menu, place orders online, and track order status in real time.",
    longDescription: "A modern canteen management app built with MongoDB, Express.js, React, and Node.js. Students can browse the menu, order food online, and get real-time updates. Admins can manage items and track orders efficiently, making the canteen experience faster and more organized.",
    image: "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "NodeJS","Nodemailer"],
    liveUrl: "https://gehu-canteen.vercel.app/",
    githubUrl: "https://github.com/Sagar10joshi/gehuCanteen",
    featured: true
    
  },
  {
    id: 2,
    title: "Quiz Website",
    description: "Full-stack quiz website with real-time score management, mail system, and admin dashboard.",
    longDescription: "A quiz web app built with the MERN stack that lets users take quizzes by category and difficulty, with real-time scoring and results. Features include user authentication, randomized questions, and an admin dashboard to manage quizzes.",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Nodemailer", "Git and GitHub"],
    liveUrl: "https://gehuquiz-2oyc.vercel.app/",
    githubUrl: "https://github.com/Sagar10joshi/gehuquiz",
    featured: true
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "This portfolio is built using React, showcasing my skills in Website development, component-based architecture, and responsive design.",
    longDescription: " It features projects, technical skills, and contact information, with a focus on clean UI, performance, and interactive user experience.",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [ "React", "TypeScript", "CSS","GitHub","Git"],
    liveUrl: "https://portfolio-final-xp2j.vercel.app/",
    githubUrl: "https://github.com/Sagar10joshi/Portfolio-Final",
    featured: false
    
  },
  {
    id: 4,
    title: "Food Ordering Website Frontend",
    description: "The frontend of a food ordering website is the user interface that allows customers to browse restaurants or food items, customize their orders, and place them online.",
    longDescription: " Designed for usability and responsiveness, it ensures a seamless experience across devices, integrating real-time updates, smooth navigation, and visually appealing layouts to enhance user engagement and satisfaction.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["HTML5", "CSS", "React", "JavaScript", "GitHub"],
    // liveUrl: "https://weather-analytics.com",
    // githubUrl: "https://github.com/alexjohnson/weather-dashboard",
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