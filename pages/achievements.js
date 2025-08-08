import { useState } from 'react';
import { Geist } from "next/font/google";

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
  },
  {
    id: 2,
    title: 'Top Performer Award',
    emoji: '🏆',
    details: 'Recognized as a top performer in my team for Q3 2023 due to significant contributions to project milestones.',
  },
  {
    id: 3,
    title: 'Open Source Contribution',
    emoji: '🛠️',
    details: 'Contributed a significant feature to a popular open-source library, which was merged and released.',
  },
  // Add more achievements here
];

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const yourName = "Derek";

  const handleCardClick = (achievement) => {
    if (selectedAchievement && selectedAchievement.id === achievement.id) {
      setSelectedAchievement(null);
    } else {
      setSelectedAchievement(achievement);
    }
  };

  return (
    <div className={`flex flex-col min-h-screen bg-gray-50 ${geistSans.className}`}>
      <main className="flex-grow container mx-auto px-6 py-12 pt-24 md:pt-32">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10 text-center">
          My Achievements
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {achievementsData.map((ach) => (
            <div 
              key={ach.id} 
              onClick={() => handleCardClick(ach)}
              className="bg-white border border-gray-200 p-6 rounded-xl cursor-pointer text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              <div className="text-5xl mb-4">{ach.emoji}</div>
              <h2 className="text-xl font-semibold text-gray-800">{ach.title}</h2>
            </div>
          ))}
        </div>
      </main>

      {selectedAchievement && (
        <>
          <div 
            onClick={() => setSelectedAchievement(null)} 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
          />
          <div 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl z-50 w-11/12 max-w-lg transition-all duration-300 ease-in-out scale-100 opacity-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedAchievement.title} <span className="text-2xl">{selectedAchievement.emoji}</span></h2>
            <p className="text-gray-700 leading-relaxed mb-6">{selectedAchievement.details}</p>
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