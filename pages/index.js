import { Geist } from "next/font/google";
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';
import TypewriterText from '../components/TypewriterText';
import { FiArrowDown, FiGithub, FiLinkedin, FiInstagram, FiDownload, FiMail } from 'react-icons/fi';

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

  return (
    <div className={`flex-1 transition-colors duration-500 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    } ${geistSans.className}`}>
      <main className="container mx-auto px-6 pt-24 md:pt-32 pb-12 flex items-center min-h-screen">
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
              {socialLinks.map(social => (
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
                href="/contact"
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
      </main>
    </div>
  );
} 