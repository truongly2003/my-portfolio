// src/components/common/BackToTop.jsx
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-purple-600 p-4 rounded-full shadow-xl hover:bg-purple-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}