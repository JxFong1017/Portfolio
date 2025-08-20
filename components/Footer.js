import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const yourName = "Fong Jia Xin";

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/JxFong1017',
      icon: FiGithub,
      color: 'hover:text-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jiaxin1017/',
      icon: FiLinkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jiaxin.1017/',
      icon: FiInstagram,
      color: 'hover:text-pink-600'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: FiMail,
      color: 'hover:text-purple-600'
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              &lt; {yourName} /&gt;
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A passionate Full Stack Software Developer focused on creating meaningful digital experiences and solving real-world problems through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="/achievements" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Achievements
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.name === 'Email' ? '_self' : '_blank'}
                    rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
                    className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800`}
                    aria-label={social.name}
                  >
                    <IconComponent className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {yourName}. All rights reserved. Built with ❤️ using Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
} 