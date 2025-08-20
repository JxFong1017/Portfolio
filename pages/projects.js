import { useState } from 'react';
import { Geist } from "next/font/google";
import { FiExternalLink, FiGithub, FiEye, FiCode, FiStar } from 'react-icons/fi';
import Header from '../components/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    image: '/globe.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    githubUrl: 'https://github.com/JxFong1017/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
    category: 'Full-Stack'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/file.svg',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
    githubUrl: 'https://github.com/JxFong1017/task-manager',
    liveUrl: 'https://task-manager-demo.com',
    featured: false,
    category: 'Frontend'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.',
    image: '/window.svg',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'OpenWeatherMap API'],
    githubUrl: 'https://github.com/JxFong1017/weather-dashboard',
    liveUrl: 'https://weather-demo.com',
    featured: false,
    category: 'Frontend'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This portfolio website built with Next.js, featuring modern design, responsive layout, and contact form functionality.',
    image: '/myimage.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/JxFong1017/portfolio',
    liveUrl: 'https://jiaxin-portfolio.com',
    featured: true,
    category: 'Full-Stack'
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const yourName = "Fong Jia Xin";

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Mobile'];
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className={`flex flex-col min-h-screen bg-gray-50 ${geistSans.className}`}>
      <Header name={yourName} />
      
      <main className="flex-grow container mx-auto px-6 py-12 pt-24 md:pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've built. Each one represents a learning journey and showcases different technologies and problem-solving approaches.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200 hover:border-purple-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <FiStar className="text-yellow-500 text-lg" />
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <FiGithub className="text-lg" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <FiExternalLink className="text-lg" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category or check back later for new projects.</p>
          </div>
        )}
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <>
          <div 
            onClick={() => setSelectedProject(null)} 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
          />
          <div 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl z-50 w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto transition-all duration-300 ease-in-out scale-100 opacity-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 leading-relaxed mb-4">
                {selectedProject.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
              >
                <FiGithub className="text-lg" />
                View Code
              </a>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
              >
                <FiExternalLink className="text-lg" />
                Live Demo
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
