import { Geist } from "next/font/google";
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function ContactPage() {
  const yourName = "Derek"; // Consistent with other pages
  const yourEmail = "your.email@example.com"; // Replace with your actual email
  const yourLinkedIn = "#"; // Replace with your LinkedIn URL
  const yourGitHub = "#"; // Replace with your GitHub URL

  return (
    <div className={`flex flex-col min-h-screen bg-gray-50 ${geistSans.className}`}>
      {/* <Header name={yourName} /> */}{/* Remove Header instance */}

      <main className="flex-grow container mx-auto px-6 py-12 pt-24 md:pt-32">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10 text-center">
          Contact Me
        </h1>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-200">
          <p className="text-lg text-gray-700 mb-8 text-center">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Feel free to reach out!
          </p>

          <div className="space-y-8">
            {/* Email Contact */}
            <div className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
              <FiMail className="text-purple-600 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <a 
                  href={`mailto:${yourEmail}`}
                  className="text-purple-600 hover:text-purple-700 hover:underline text-lg"
                >
                  {yourEmail}
                </a>
              </div>
            </div>

            {/* LinkedIn Contact */}
            <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
              <FiLinkedin className="text-blue-600 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">LinkedIn</h3>
                <a 
                  href={yourLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline text-lg"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            
            {/* GitHub Contact */}
            <div className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300">
              <FiGithub className="text-gray-700 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">GitHub</h3>
                <a 
                  href={yourGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 hover:underline text-lg"
                >
                  View my GitHub Profile
                </a>
              </div>
            </div>

            {/* Placeholder for a Contact Form or other info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Or Send a Direct Message</h3>
              <p className="text-gray-600 text-center mb-6">
                (Placeholder for a contact form integration or further contact instructions)
              </p>
              <div className="text-center">
                <button 
                  disabled 
                  className="bg-gray-300 text-gray-500 font-semibold py-3 px-8 rounded-md cursor-not-allowed"
                >
                  Contact Form (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer is now in _app.js */}
      {/*
      <footer className="bg-gray-100 border-t border-gray-200 py-8 text-center mt-auto">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} {yourName}. All rights reserved.
        </p>
      </footer>
      */}
    </div>
  );
} 