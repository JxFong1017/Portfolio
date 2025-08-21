import { Geist } from "next/font/google";
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';
import TypewriterText from '../components/TypewriterText';
import { FiArrowDown, FiGithub, FiLinkedin, FiInstagram, FiDownload, FiMail, FiCode, FiDatabase, FiServer, FiMonitor, FiSmartphone, FiBrain } from 'react-icons/fi';
import { useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function IndexPage() {
  const { isDark } = useTheme();
  const yourName = "Fong Jia Xin"; 
  const yourProfession = "Full Stack Software Developer";
  
  const typewriterTexts = [
    "Full Stack Developer",
    "React Specialist", 
    "Node.js Developer",
    "Mobile App Developer",
    "Problem Solver",
    "Creative Thinker"
  ];

  const introParagraph = `A passionate ${yourProfession} 🚀 having an experience of building Web and Mobile applications with JavaScript / React.js / Node.js / React Native and some other cool libraries and frameworks.`;

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/JxFong1017',
      icon: FiGithub,
      color: 'hover:text-gray-900 dark:hover:text-white',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jiaxin1017/',
      icon: FiLinkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jiaxin.1017/',
      icon: FiInstagram,
      color: 'hover:text-pink-600 dark:hover:text-pink-400',
      bgColor: 'hover:bg-pink-50 dark:hover:bg-pink-900/20'
    },
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: FiCode,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "React.js ⚛️", percentage: 90 },
        { name: "JavaScript 🟨", percentage: 95 },
        { name: "HTML/CSS 🌐", percentage: 88 },
        { name: "Next.js ⚡", percentage: 85 },
        { name: "TypeScript 🔷", percentage: 80 }
      ]
    },
    {
      category: "Backend Development",
      icon: FiServer,
      color: "from-green-500 to-blue-600",
      skills: [
        { name: "Node.js 🟢", percentage: 88 },
        { name: "Express.js 🚂", percentage: 85 },
        { name: "Python 🐍", percentage: 75 },
        { name: "Java ☕", percentage: 70 },
        { name: "REST APIs 🔌", percentage: 90 }
      ]
    },
    {
      category: "Database & Cloud",
      icon: FiDatabase,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "MongoDB 🍃", percentage: 85 },
        { name: "PostgreSQL 🐘", percentage: 80 },
        { name: "AWS ☁️", percentage: 75 },
        { name: "Firebase 🔥", percentage: 80 },
        { name: "Redis 🔴", percentage: 70 }
      ]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.",
      category: "full-stack",
      status: "Live",
      level: "Advanced",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: "🛒"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application built with React Native for mobile and React for web. Includes real-time collaboration and offline support.",
      category: "mobile",
      status: "Live",
      level: "Intermediate",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      icon: "📱"
    },
    {
      title: "AI Chat Assistant",
      description: "An intelligent chatbot powered by OpenAI's GPT model, integrated with a modern web interface and conversation history management.",
      category: "ai-ml",
      status: "Live",
      level: "Advanced",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
      icon: "🤖"
    }
  ];

  const achievements = [
    {
      title: "First Major Project",
      description: "Successfully launched a full-stack web application that solves a real-world problem. Tech stack included React, Node.js, and PostgreSQL.",
      category: "development",
      year: "2023",
      icon: "🚀"
    },
    {
      title: "Top Performer Award",
      description: "Recognized as a top performer in my team for Q3 2023 due to significant contributions to project milestones.",
      category: "recognition",
      year: "2023",
      icon: "🏆"
    },
    {
      title: "Open Source Contribution",
      description: "Contributed a significant feature to a popular open-source library, which was merged and released.",
      category: "development",
      year: "2023",
      icon: "🛠️"
    },
    {
      title: "Technical Leadership",
      description: "Led a team of 5 developers on a critical project, delivering ahead of schedule with excellent quality.",
      category: "leadership",
      year: "2024",
      icon: "👨‍💼"
    },
    {
      title: "Performance Optimization",
      description: "Improved application performance by 40% through code optimization and best practices implementation.",
      category: "technical",
      year: "2024",
      icon: "⚡"
    },
    {
      title: "Mentorship Program",
      description: "Started mentoring junior developers, helping them grow their skills and advance their careers.",
      category: "leadership",
      year: "2024",
      icon: "🎓"
    }
  ];

  // Add useEffect for functionality
  useEffect(() => {
    // Project filtering functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        filterBtns.forEach(b => {
          if (b.getAttribute('data-category') === category) {
            b.classList.add('active');
            b.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            b.classList.add('bg-purple-600', 'text-white');
          } else {
            b.classList.remove('active');
            b.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            b.classList.remove('bg-purple-600', 'text-white');
          }
        });
        
        // Filter projects
        projectCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-in-out';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Advertisements filtering functionality
    const adsFilterBtns = document.querySelectorAll('.ads-filter-btn');
    const adsCards = document.querySelectorAll('.ads-card');
    
    adsFilterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Update active filter button
        adsFilterBtns.forEach(b => b.classList.remove('active'));
        adsFilterBtns.forEach(b => {
          if (b.getAttribute('data-category') === category) {
            b.classList.add('active');
            b.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            b.classList.add('bg-purple-600', 'text-white');
          } else {
            b.classList.remove('active');
            b.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            b.classList.remove('bg-purple-600', 'text-white');
          }
        });
        
        // Filter advertisements
        adsCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-in-out';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
          alert('Please fill in all required fields.');
          return;
        }
        
        // Here you would typically send the form data to your backend
        // For now, we'll just show a success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        this.reset();
      });
    }

    // Handle direct hash navigation
    if (window.location.hash) {
      const targetSection = document.querySelector(window.location.hash);
      if (targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }

    // Add fadeIn animation CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

  }, []);

  return (
    <div className={`flex-1 transition-colors duration-500 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    } ${geistSans.className}`}>
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 pt-24 md:pt-32 pb-12 flex items-center min-h-screen">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
            <div className="text-left">
              {/* Animated greeting */}
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                  <span className="inline-block animate-bounce">👋</span> Hi all, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                    {yourName}
                  </span>
                </h1>
              </div>

              {/* Typewriter effect */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                  I'm a{' '}
                  <TypewriterText 
                    texts={typewriterTexts} 
                    speed={100} 
                    delay={2000} 
                  />
                </h2>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {introParagraph}
              </p>
              
              {/* Enhanced social links */}
              <div className="flex space-x-4 mb-10">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.name}
                    className={`text-gray-500 dark:text-gray-400 ${social.color} transition-all duration-300 ${social.bgColor} rounded-full flex items-center justify-center w-12 h-12 relative overflow-hidden transform hover:scale-110 hover:rotate-3`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-10 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center"
                >
                  <FiDownload className="mr-2 group-hover:animate-bounce" />
                  Resume
                </a>
                <a 
                  href="#contact"
                  className="group w-full sm:w-auto text-center bg-transparent hover:bg-purple-50 dark:hover:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-semibold py-3 px-10 rounded-md border-2 border-purple-600 dark:border-purple-400 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center"
                >
                  <FiMail className="mr-2 group-hover:animate-pulse" />
                  Contact Me
                </a>
              </div>

              {/* Scroll indicator */}
              <div className="mt-16 text-center animate-bounce">
                <FiArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-600 mx-auto" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Scroll to explore more</p>
              </div>
            </div>

            {/* Enhanced image section */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative group">
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-75 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full opacity-75 animate-ping"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-500 rounded-full opacity-75 animate-bounce"></div>
                
                <div className="w-full max-w-md h-auto bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl border border-purple-200 dark:border-purple-700 shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <Image 
                    src="/myimage.jpg" 
                    alt="Portfolio Illustration" 
                    width={600} 
                    height={700} 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-lg flex items-center justify-center mr-4`}>
                    <skillGroup.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skillGroup.category}</h3>
                </div>
                <div className="space-y-4">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-in-out" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating my skills in full-stack development, mobile apps, and innovative solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="filter-btn active px-6 py-2 rounded-full bg-purple-600 text-white font-medium transition-all duration-300 hover:bg-purple-700" data-category="all">All</button>
            <button className="filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-purple-600 hover:text-white" data-category="full-stack">Full Stack</button>
            <button className="filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-purple-600 hover:text-white" data-category="frontend">Frontend</button>
            <button className="filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-purple-600 hover:text-white" data-category="mobile">Mobile</button>
            <button className="filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-purple-600 hover:text-white" data-category="ai-ml">AI/ML</button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden" data-category={project.category}>
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-6xl">{project.icon}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-sm font-medium rounded-full">{project.status}</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 text-sm font-medium rounded-full">{project.level}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">{tech}</span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href="#" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300">Live Demo</a>
                    <a href="#" className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertisements Section */}
      <section id="ads" className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Advertisements & Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my professional advertisements, career milestones, and continuous growth in the tech industry.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="ads-filter-btn active px-6 py-2 rounded-full bg-purple-600 text-white font-medium transition-all duration-300 hover:bg-purple-700" data-category="all">All</button>
            <button className="ads-filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-purple-600 hover:text-white" data-category="development">Development</button>
            <button className="ads-filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-purple-600 hover:text-white" data-category="recognition">Recognition</button>
            <button className="ads-filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-purple-600 hover:text-white" data-category="leadership">Leadership</button>
            <button className="ads-filter-btn px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-purple-600 hover:text-white" data-category="technical">Technical</button>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="ads-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300" data-category={achievement.category}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span className={`px-3 py-1 rounded-full ${
                      achievement.category === 'development' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400' :
                      achievement.category === 'recognition' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400' :
                      achievement.category === 'leadership' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' :
                      'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400'
                    }`}>
                      {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                    </span>
                    <span>{achievement.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Feel free to reach out!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Email Contact */}
              <div className="flex items-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline text-lg">
                    your.email@example.com
                  </a>
                </div>
              </div>

              {/* LinkedIn Contact */}
              <div className="flex items-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <FiLinkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/jiaxin1017/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-lg">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              
              {/* GitHub Contact */}
              <div className="flex items-center p-6 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gray-700 dark:bg-gray-600 rounded-lg flex items-center justify-center mr-4">
                  <FiGithub className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">GitHub</h3>
                  <a href="https://github.com/JxFong1017" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline text-lg">
                    View my GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">Send a Direct Message</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                Have a question or want to work together? Send me a message!
              </p>
              
              <form id="contact-form" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project, question, or opportunity..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
                  >
                    <FiMail className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
} 