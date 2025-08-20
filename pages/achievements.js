import { useState, useEffect } from 'react';
import { Geist } from "next/font/google";
import { useTheme } from '../contexts/ThemeContext';
import Timeline from '../components/Timeline';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const achievementsData = [
  {
    id: 1,
    title: 'First Major Project',
    emoji: '🚀',
    details: 'Successfully launched a full-stack web application that solves a real-world problem. Tech stack included React, Node.js, and PostgreSQL.',
    category: 'Development',
    date: '2023'
  },
  {
    id: 2,
    title: 'Top Performer Award',
    emoji: '🏆',
    details: 'Recognized as a top performer in my team for Q3 2023 due to significant contributions to project milestones.',
    category: 'Recognition',
    date: '2023'
  },
  {
    id: 3,
    title: 'Open Source Contribution',
    emoji: '🛠️',
    details: 'Contributed a significant feature to a popular open-source library, which was merged and released.',
    category: 'Open Source',
    date: '2023'
  },
  {
    id: 4,
    title: 'Technical Leadership',
    emoji: '👨‍💼',
    details: 'Led a team of 5 developers on a critical project, delivering ahead of schedule with excellent quality.',
    category: 'Leadership',
    date: '2024'
  },
  {
    id: 5,
    title: 'Performance Optimization',
    emoji: '⚡',
    details: 'Improved application performance by 40% through code optimization and best practices implementation.',
    category: 'Technical',
    date: '2024'
  },
  {
    id: 6,
    title: 'Mentorship Program',
    emoji: '🎓',
    details: 'Started mentoring junior developers, helping them grow their skills and advance their careers.',
    category: 'Leadership',
    date: '2024'
  }
];

export default function AchievementsPage() {
  const { isDark } = useTheme();
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [animateAchievements, setAnimateAchievements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateAchievements(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'Development', 'Recognition', 'Open Source', 'Leadership', 'Technical'];
  
  const filteredAchievements = selectedCategory === 'All' 
    ? achievementsData 
    : achievementsData.filter(achievement => achievement.category === selectedCategory);

  const handleCardClick = (achievement) => {
    if (selectedAchievement && selectedAchievement.id === achievement.id) {
      setSelectedAchievement(null);
    } else {
      setSelectedAchievement(achievement);
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
            My Achievements & Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my professional achievements, career milestones, and continuous growth in the tech industry.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredAchievements.map((ach, index) => (
              <div 
                key={ach.id} 
                onClick={() => handleCardClick(ach)}
                className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl cursor-pointer text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
                  animateAchievements ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{ach.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{ach.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{ach.category} • {ach.date}</p>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Career Journey</h2>
          <div className="max-w-6xl mx-auto">
            <Timeline />
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Impact & Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Years Experience', icon: '⏰' },
              { number: '20+', label: 'Projects Completed', icon: '🚀' },
              { number: '15+', label: 'Technologies Mastered', icon: '🛠️' },
              { number: '100%', label: 'Client Satisfaction', icon: '😊' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-500 ${
                  animateAchievements ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Achievement Modal */}
      {selectedAchievement && (
        <>
          <div 
            onClick={() => setSelectedAchievement(null)} 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
          />
          <div 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl z-50 w-11/12 max-w-lg transition-all duration-300 ease-in-out scale-100 opacity-100"
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{selectedAchievement.emoji}</div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {selectedAchievement.title}
              </h2>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                  {selectedAchievement.category}
                </span>
                <span>{selectedAchievement.date}</span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
              {selectedAchievement.details}
            </p>
            <button 
              onClick={() => setSelectedAchievement(null)} 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
} 