import { Geist } from "next/font/google";
import Image from 'next/image';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function SIndexPage() {
  const yourName = "Derek"; 
  const yourProfession = "Full Stack Software Developer";
  const introParagraph = `A passionate ${yourProfession} 🚀 having an experience of building Web and Mobile applications with JavaScript / React.js / Node.js / React Native and some other cool libraries and frameworks.`;

  const socialLinks = [
    {
      name: 'GitHub',
      url: '#',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
    },
    {
      name: 'LinkedIn',
      url: '#',
      iconUrl: 'https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png',
    },
    {
      name: 'Twitter',
      url: '#',
      iconUrl: 'https://cdn.freebiesupply.com/logos/large/2x/twitter-3-logo-png-transparent.png',
    },
  ];


  return (
    <div className={`flex flex-col min-h-screen bg-white ${geistSans.className}`}>
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

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
          </div>

          <div className="hidden md:flex justify-center items-center">
            <div className="w-full max-w-md h-auto bg-gray-100 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <Image 
                src="/myimage.png" 
                alt="Portfolio Illustration" 
                width={600} 
                height={700} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 