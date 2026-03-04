// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 border-t border-purple-900/30 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Lý Văn Trưởng. Built with passion.</p>
    </footer>
  );
}