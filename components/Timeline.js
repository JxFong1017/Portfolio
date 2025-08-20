import { useState, useEffect } from 'react';
import { FiCalendar, FiMapPin, FiAward, FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';

const timelineData = [
  {
    id: 1,
    year: "2024",
    month: "Present",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    description: "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    icon: FiTrendingUp,
    color: "from-purple-500 to-pink-500",
    achievements: ["Led team of 5 developers", "Improved app performance by 40%", "Implemented CI/CD pipeline"],
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
  },
  {
    id: 2,
    year: "2023",
    month: "Q3",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    location: "New York, NY",
    description: "Developed and maintained multiple web applications, collaborated with cross-functional teams, and contributed to architectural decisions.",
    icon: FiCode,
    color: "from-blue-500 to-purple-500",
    achievements: ["Built 3 major applications", "Reduced bug reports by 60%", "Introduced testing framework"],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Jest"]
  },
  {
    id: 3,
    year: "2022",
    month: "Q2",
    title: "Frontend Developer",
    company: "WebCraft Studios",
    location: "Austin, TX",
    description: "Specialized in creating responsive and accessible user interfaces, optimized performance, and ensured cross-browser compatibility.",
    icon: FiUsers,
    color: "from-green-500 to-blue-500",
    achievements: ["Improved page load speed by 50%", "Enhanced accessibility compliance", "Created design system"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"]
  },
  {
    id: 4,
    year: "2021",
    month: "Q4",
    title: "Junior Developer",
    company: "StartupHub",
    location: "Remote",
    description: "Started career building small applications, learning modern web technologies, and contributing to open source projects.",
    icon: FiCode,
    color: "from-yellow-500 to-green-500",
    achievements: ["First major project completion", "Open source contributions", "Learning new technologies"],
    technologies: ["JavaScript", "React", "Node.js", "Git", "HTML/CSS"]
  },
  {
    id: 5,
    year: "2021",
    month: "Q1",
    title: "Computer Science Graduate",
    company: "University of Technology",
    location: "Graduation",
    description: "Completed degree with focus on software engineering, web development, and computer science fundamentals.",
    icon: FiAward,
    color: "from-orange-500 to-yellow-500",
    achievements: ["Dean's List", "Capstone Project Excellence", "Programming Competition Winner"],
    technologies: ["Java", "Python", "C++", "Data Structures", "Algorithms"]
  }
];

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(null);
  const [animateTimeline, setAnimateTimeline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateTimeline(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform transition-all duration-1000 ease-out">
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transition-all duration-1000 ease-out ${
          animateTimeline ? 'scale-y-100' : 'scale-y-0'
        }`} style={{ transformOrigin: 'top' }} />
      </div>

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex items-start space-x-8 transform transition-all duration-700 ease-out ${
              animateTimeline ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            {/* Timeline Dot */}
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg transform transition-all duration-300 ${
                activeItem === item.id ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
              }`}>
                <item.icon className="w-8 h-8" />
              </div>
              
              {/* Date Badge */}
              <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md border border-gray-200 dark:border-gray-600">
                <div className="text-sm font-bold text-gray-900 dark:text-white">{item.year}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{item.month}</div>
              </div>
            </div>

            {/* Content Card */}
            <div className={`flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-300 ${
              activeItem === item.id ? 'scale-105 shadow-2xl' : 'scale-100'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <FiMapPin className="mr-1" />
                      {item.company}
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      {item.location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
