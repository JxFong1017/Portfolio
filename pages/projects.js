import { useState, useEffect } from 'react';
import { Geist } from "next/font/google";
import { FiExternalLink, FiGithub, FiFilter, FiCode, FiGlobe, FiSmartphone, FiDatabase } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    difficulty: "Advanced",
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
    demoEmbed: "https://demo-ecommerce.com/embed",
    features: ["User Authentication", "Payment Processing", "Admin Dashboard", "Real-time Updates", "Responsive Design"],
    status: "Live"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application built with React Native for mobile and React for web. Includes real-time collaboration and offline support.",
    image: "/project2.jpg",
    technologies: ["React Native", "React", "Firebase", "Redux", "TypeScript"],
    category: "Mobile",
    difficulty: "Intermediate",
    liveUrl: "https://task-app-demo.com",
    githubUrl: "https://github.com/username/task-app",
    demoEmbed: "https://task-app-demo.com/embed",
    features: ["Real-time Collaboration", "Offline Support", "Push Notifications", "Cross-platform", "Dark Mode"],
    status: "Live"
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description: "An intelligent chatbot powered by OpenAI's GPT model, integrated with a modern web interface and conversation history management.",
    image: "/project3.jpg",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "AI/ML",
    difficulty: "Advanced",
    liveUrl: "https://ai-chat-demo.com",
    githubUrl: "https://github.com/username/ai-chat",
    demoEmbed: "https://ai-chat-demo.com/embed",
    features: ["AI Integration", "Conversation History", "Real-time Chat", "Markdown Support", "API Rate Limiting"],
    status: "Live"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark/light theme, animations, and contact form.",
    image: "/project4.jpg",
    technologies: ["Next.js", "Tailwind CSS", "React", "Framer Motion", "Vercel"],
    category: "Frontend",
    difficulty: "Intermediate",
    liveUrl: "https://portfolio-demo.com",
    githubUrl: "https://github.com/username/portfolio",
    demoEmbed: "https://portfolio-demo.com/embed",
    features: ["Responsive Design", "Dark/Light Theme", "Smooth Animations", "Contact Form", "SEO Optimized"],
    status: "Live"
  },
  {
    id: 5,
    title: "Real-time Dashboard",
    description: "A real-time analytics dashboard with live data visualization, built using React, D3.js, and WebSocket for real-time updates.",
    image: "/project5.jpg",
    technologies: ["React", "D3.js", "WebSocket", "Node.js", "PostgreSQL"],
    category: "Data Visualization",
    difficulty: "Advanced",
    liveUrl: "https://dashboard-demo.com",
    githubUrl: "https://github.com/username/dashboard",
    demoEmbed: "https://dashboard-demo.com/embed",
    features: ["Real-time Updates", "Interactive Charts", "Data Export", "Custom Filters", "Responsive Design"],
    status: "Live"
  },
  {
    id: 6,
    title: "Weather App",
    description: "A weather application with location-based forecasts, built using React Native and OpenWeatherMap API.",
    image: "/project6.jpg",
    technologies: ["React Native", "OpenWeatherMap API", "Geolocation", "AsyncStorage", "Expo"],
    category: "Mobile",
    difficulty: "Beginner",
    liveUrl: "https://weather-app-demo.com",
    githubUrl: "https://github.com/username/weather-app",
    demoEmbed: "https://weather-app-demo.com/embed",
    features: ["Location-based Forecast", "5-day Forecast", "Weather Alerts", "Offline Support", "Beautiful UI"],
    status: "Live"
  }
];

const categories = ["All", "Full Stack", "Frontend", "Mobile", "AI/ML", "Data Visualization"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

export default function ProjectsPage() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [animateProjects, setAnimateProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateProjects(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || project.difficulty === selectedDifficulty;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack": return FiCode;
      case "Frontend": return FiGlobe;
      case "Mobile": return FiSmartphone;
      case "AI/ML": return FiCode;
      case "Data Visualization": return FiDatabase;
      default: return FiCode;
    }
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    } ${geistSans.className}`}>
      <main className="flex-grow container mx-auto px-6 py-12 pt-24 md:pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating skills across various technologies and domains.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
              />
              <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Category and Difficulty Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedDifficulty === difficulty
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                animateProjects ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center">
                <div className="text-6xl text-purple-500 dark:text-purple-400">
                  {getCategoryIcon(project.category)({ size: 48 })}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
            onClick={() => setSelectedProject(null)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl z-50 w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Details */}
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center"
                  >
                    <FiExternalLink className="mr-2" />
                    View Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center"
                  >
                    <FiGithub className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>

              {/* Live Demo Embed */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Live Demo</h3>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <FiGlobe className="w-16 h-16 mx-auto mb-4" />
                    <p>Interactive demo would be embedded here</p>
                    <p className="text-sm mt-2">
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 hover:underline"
                      >
                        Open in new tab →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
