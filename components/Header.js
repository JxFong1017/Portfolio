import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors duration-300">
            &lt; {name} /&gt;
          </a>
        </Link>
        <div className="space-x-4 md:space-x-6">
          <Link href="/projects" legacyBehavior><a className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">Projects</a></Link>
          <Link href="/achievements" legacyBehavior><a className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">Achievements</a></Link>
          <Link href="/contact" legacyBehavior><a className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">Contact Me</a></Link>
        </div>
      </nav>
    </header>
  );
} 