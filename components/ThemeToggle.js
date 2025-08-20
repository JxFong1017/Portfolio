import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`transition-all duration-500 transform ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}>
          <FiSun className="w-6 h-6 text-white" />
        </div>
        <div className={`absolute transition-all duration-500 transform ${isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}>
          <FiMoon className="w-6 h-6 text-white" />
        </div>
      </div>
      
      {/* Animated background ring */}
      <div className={`absolute inset-0 rounded-full border-2 border-white/20 transition-all duration-300 ${
        isDark ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
      }`} />
    </button>
  );
}
