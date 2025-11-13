import { NavLink } from "react-router-dom";
import { skillsData } from "../../data/skillsData";

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "700ms" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1000ms" }}
        ></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: "0 0 10px rgba(96, 165, 250, 0.8)",
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 50px rgba(99, 102, 241, 0.7), 0 0 80px rgba(139, 92, 246, 0.5); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main heading with gradient text */}
          <div
            className="mb-8 space-y-4"
            style={{ animation: "slideUp 1s ease-out" }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              {/* <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
                Web
              </span> */}
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
              Web Developer
            </h2>
          </div>

          {/* Description card with glassmorphism */}
          <div
            className="max-w-3xl mx-auto mb-12"
            style={{ animation: "slideUp 1s ease-out 0.2s backwards" }}
          >
            <div
              className="backdrop-blur-md bg-gray-800/60 rounded-3xl p-8 border border-blue-500/30 shadow-2xl"
              style={{ animation: "glow 3s ease-in-out infinite" }}
            >
              <p className="text-gray-200 text-xl md:text-2xl leading-relaxed mb-3">
                Đam mê lập trình và phát triển phần mềm
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                <span className="text-blue-300 font-semibold text-lg">
                  Chuyên về phát triển web hiện đại
                </span>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-6 mb-16"
            style={{ animation: "slideUp 1s ease-out 0.4s backwards" }}
          >
            <NavLink
              to="/project"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Xem dự án
                <svg
                  className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </NavLink>

            <NavLink
              to="/about"
              className="group px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg border-2 border-indigo-300 hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Liên hệ
              </span>
            </NavLink>
          </div>

          {/* Tech stack with modern card design */}
          <div
            className="max-w-4xl mx-auto space-y-8"
            style={{ animation: "slideUp 1s ease-out 0.6s backwards" }}
          >
            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-6 font-semibold text-center">
              Công nghệ sử dụng
            </h3>

            {/* Backend Section */}
            <div>
              <h4 className="text-blue-400 text-xs uppercase tracking-wider mb-4 font-semibold flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Backend
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {skillsData.backend.map((tech, index) => (
                  <div
                    key={tech.id}
                    className="group relative px-6 py-3 bg-gray-800/80 text-gray-200 rounded-xl text-sm font-medium border-2 border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg hover:shadow-blue-500/50 backdrop-blur-sm"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: "float 3s ease-in-out infinite",
                    }}
                  >
                    <span className="relative z-10">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Section */}
            <div>
              <h4 className="text-purple-400 text-xs uppercase tracking-wider mb-4 font-semibold flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Frontend
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {skillsData.frontend.map((tech, index) => (
                  <div
                    key={tech.id}
                    className="group relative px-6 py-3 bg-gray-800/80 text-gray-200 rounded-xl text-sm font-medium border-2 border-purple-500/30 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg hover:shadow-purple-500/50 backdrop-blur-sm"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: "float 3s ease-in-out infinite",
                    }}
                  >
                    <span className="relative z-10">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
