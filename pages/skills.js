import { useState, useEffect } from 'react';
import { Geist } from "next/font/google";
import { FiCode, FiDatabase, FiSmartphone, FiGlobe, FiServer, FiLayers } from 'react-icons/fi';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const skillsData = [
  {
    category: "Frontend Development",
    icon: FiCode,
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "HTML/CSS", level: 88, icon: "🌐" },
      { name: "Next.js", level: 85, icon: "⚡" },
      { name: "TypeScript", level: 80, icon: "🔷" },
    ]
  },
  {
    category: "Backend Development",
    icon: FiServer,
    color: "from-green-500 to-blue-600",
    skills: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express.js", level: 85, icon: "🚂" },
      { name: "Python", level: 75, icon: "🐍" },
      { name: "Java", level: 70, icon: "☕" },
      { name: "REST APIs", level: 90, icon: "🔌" },
    ]
  },
  {
    category: "Database & Cloud",
    icon: FiDatabase,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "AWS", level: 75, icon: "☁️" },
      { name: "Firebase", level: 80, icon: "🔥" },
      { name: "Redis", level: 70, icon: "🔴" },
    ]
  },
  {
    category: "Mobile Development",
    icon: FiSmartphone,
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "React Native", level: 85, icon: "📱" },
      { name: "Flutter", level: 70, icon: "🦋" },
      { name: "iOS Development", level: 65, icon: "🍎" },
      { name: "Android Development", level: 70, icon: "🤖" },
    ]
  },
  {
    category: "DevOps & Tools",
    icon: FiLayers,
    color: "from-gray-600 to-gray-800",
    skills: [
      { name: "Git", level: 90, icon: "📚" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "CI/CD", level: 80, icon: "🔄" },
      { name: "Linux", level: 85, icon: "🐧" },
    ]
  },
  {
    category: "Other Technologies",
    icon: FiGlobe,
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "GraphQL", level: 75, icon: "🔷" },
      { name: "WebSocket", level: 80, icon: "🔌" },
      { name: "PWA", level: 70, icon: "📱" },
      { name: "Testing", level: 75, icon: "🧪" },
    ]
  }
];

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateSkills(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-white ${geistSans.className}`}>
      <main className="flex-grow container mx-auto px-6 py-12 pt-24 md:pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillsData.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === index
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <category.icon className="inline mr-2" />
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData[selectedCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-500 ${
                animateSkills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${skillsData[selectedCategory].color} transition-all duration-1000 ease-out`}
                  style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Skill Level Guide</h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>90-100%: Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>80-89%: Advanced</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span>70-79%: Intermediate</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span>60-69%: Beginner</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
