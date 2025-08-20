import { useTheme } from '../contexts/ThemeContext';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer({ name }) {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

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
    {
      name: 'Twitter',
      url: 'https://twitter.com/jiaxin1017',
      icon: FiTwitter,
      color: 'hover:text-blue-400 dark:hover:text-blue-300',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: FiMail,
      color: 'hover:text-purple-600 dark:hover:text-purple-400',
      bgColor: 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
    }
  ];

  return (
    <footer className={`border-t transition-colors duration-500 ${
      isDark ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'
    }`}>
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
              &lt; {name} /&gt;
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer passionate about creating innovative digital solutions and building the future of the web.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color} ${social.bgColor}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Skills', href: '/skills' },
                { name: 'Projects', href: '/projects' },
                { name: 'Achievements', href: '/achievements' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>📍 San Francisco, CA</p>
              <p>📧 your.email@example.com</p>
              <p>🌐 Available for remote work</p>
              <p>🚀 Open to new opportunities</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t mb-8 ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} {name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <FiHeart className="text-red-500 animate-pulse" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
} 