import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `${
      isActive
        ? "text-purple-600 font-semibold"
        : "text-gray-700 hover:text-purple-600"
    } transition-colors duration-200`;

  return (
    <header className="sticky top-0 z-50  shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4 relative">
        {/* Logo */}
        <h1 className="text-xl font-bold text-purple-800">
          {/* <NavLink to="/" onClick={() => setMenuOpen(false)}>
            {"Truong Xin Chao".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-bounce"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: "2s",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </NavLink> */}

          <NavLink to="/" className={navLinkClass}>
            Trưởng Xin Chào
          </NavLink>
        </h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8">
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
          className="md:hidden text-gray-700 ml-4 p-2 rounded hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={26} />
        </button>

        {/* Menu mobile — dùng absolute */}
        {menuOpen && (
          <div className="absolute top-full right-0  bg-white z-20 border-t border-gray-100 shadow-md md:hidden animate-fadeIn">
            <nav className="flex flex-col   space-y-4 p-6">
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Trang chủ
              </NavLink>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Giới thiệu
              </NavLink>
              <NavLink
                to="/project"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Dự án
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
