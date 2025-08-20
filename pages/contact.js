import { useState } from 'react';
import { Geist } from "next/font/google";
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiX } from 'react-icons/fi';
import Header from '../components/Header'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function ContactPage() {
  const yourName = "Fong Jia Xin"; // Consistent with other pages
  const yourEmail = "your.email@example.com"; // Replace with your actual email
  const yourLinkedIn = "https://www.linkedin.com/in/jiaxin1017/"; // Replace with your LinkedIn URL
  const yourGitHub = "https://github.com/JxFong1017"; // Replace with your GitHub URL

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setStatusMessage(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus(null);
    setStatusMessage('');
  };

  return (
    <div className={`flex flex-col min-h-screen bg-gray-50 ${geistSans.className}`}>
      <Header name={yourName} />

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

            {/* Contact Form */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Send a Direct Message</h3>
              <p className="text-gray-600 text-center mb-6">
                Have a question or want to work together? Send me a message!
              </p>
              
              {/* Status Message */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg flex items-center justify-between ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center">
                    {submitStatus === 'success' ? (
                      <FiCheck className="mr-2 text-green-600" />
                    ) : (
                      <FiX className="mr-2 text-red-600" />
                    )}
                    <span>{statusMessage}</span>
                  </div>
                  <button 
                    onClick={resetStatus}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiX />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project, question, or opportunity..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
                      isSubmitting
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        : 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
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