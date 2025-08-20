import { useState, useEffect } from 'react';

export default function TypewriterText({ texts, speed = 100, delay = 2000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting) {
      if (currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex - 1);
        }, speed / 2);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentCharIndex === texts[currentTextIndex].length) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentCharIndex, isDeleting, currentTextIndex, texts, speed, delay]);

  return (
    <span className="inline-block min-w-[200px]">
      {texts[currentTextIndex].substring(0, currentCharIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
