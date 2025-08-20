import { Geist } from "next/font/google";
import Image from 'next/image';
import Header from '../components/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function SIndexPage() {
  const yourName = "Fong Jia Xin"; 
  const yourProfession = "Full Stack Software Developer";
  const introParagraph = `A passionate ${yourProfession} 🚀 having an experience of building Web and Mobile applications with JavaScript / React.js / Node.js / React Native and some other cool libraries and frameworks.`;

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/JxFong1017',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jiaxin1017/',
      iconUrl: 'https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jiaxin.1017/',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    },
  ];


  return (
    <div className={`flex flex-col min-h-screen bg-white ${geistSans.className}`}>
      <Header name={yourName} />
      <main className="flex-grow container mx-auto px-6 pt-24 md:pt-32 pb-12 flex items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi all <span role="img" aria-label="waving hand">👋</span> I'm <span className="text-purple-600">{yourName}</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {introParagraph}
            </p>
            
            <div className="flex space-x-4 mb-10">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.name}
                  className="text-gray-500 hover:text-purple-600 transition-colors duration-300 bg-gray-100 hover:bg-purple-50 rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12 relative overflow-hidden"
                >
                  <Image 
                    src={social.iconUrl} 
                    alt={`${social.name} logo`} 
                    layout="fill"
                    className={`object-contain ${social.name === 'LinkedIn' ? 'transform scale-150' : ''}`}
                  />
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-10 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Resume
              </a>
              <a 
                href="/contact"
                className="w-full sm:w-auto text-center bg-transparent hover:bg-purple-50 text-purple-600 font-semibold py-3 px-10 rounded-md border-2 border-purple-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Contact Me
              </a>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['JavaScript', 'React.js', 'Node.js', 'Next.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Git'].map((skill) => (
                  <div key={skill} className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-purple-100 transition-colors duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <div className="w-full max-w-md h-auto bg-gray-100 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
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
      </main>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on interesting projects. Let's discuss how we can bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/projects"
              className="bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="/contact"
              className="bg-transparent text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg border-2 border-white transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 