import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `${
      isActive
        ? "text-blue-400 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400"
        : "text-gray-300 hover:text-blue-400"
    } transition-all duration-300 pb-1`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl   w-full max-w-6xl mx-auto px-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
        {/* Logo với gradient text */}
        <NavLink to="/" className="group">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:scale-105 transition-transform duration-300">
            Portfolio 
          </h1>
        </NavLink>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClass}>
            Trang chủ
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            Giới thiệu
          </NavLink>
          <NavLink to="/project" className={navLinkClass}>
            Dự án
          </NavLink>
        </nav>

        {/* Icon menu (mobile) */}
        <button
          className="md:hidden text-gray-300 p-2 rounded-lg hover:bg-gray-800/80 transition-all duration-300 border border-blue-500/30 hover:border-blue-400/50 hover:text-blue-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu mobile overlay */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Menu panel */}
            <div className="absolute top-full right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-500/20 md:hidden overflow-hidden">
              <nav className="flex flex-col p-4 space-y-2">
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold" 
                        : "text-gray-300 hover:bg-gray-800/80 hover:text-blue-400"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Trang chủ
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold" 
                        : "text-gray-300 hover:bg-gray-800/80 hover:text-blue-400"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Giới thiệu
                </NavLink>
                <NavLink
                  to="/project"
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold" 
                        : "text-gray-300 hover:bg-gray-800/80 hover:text-blue-400"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Dự án
                </NavLink>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;