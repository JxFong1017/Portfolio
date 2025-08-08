export default function Footer({ name }) {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 text-center mt-auto">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
} 