import { NavLink } from "react-router-dom";
import { skillsData } from "../../data/skillsData";
function Home() {
  return (
    <div className=" bg-gradient-to-br min-h-screen from-purple-50 via-white to-purple-100">
      <div className="flex flex-col items-center justify-center py-40 px-6">
        {/* Animated gradient background circle */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>

        <div className="relative z-10 text-center">
          {/* Description with accent */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <p className="text-gray-600 text-lg leading-relaxed">
                Đam mê lập trình và phát triển phần mềm
              </p>
              <span className="text-purple-500 font-semibold">
                Chuyên về phát triển web
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink
              to="/project"
              className="group relative w-44 px-8 py-4 bg-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Xem dự án
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              <div className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </NavLink>
            <NavLink
           to="/about"
              className="group w-44 px-8 py-4 bg-white text-purple-500 rounded-xl font-semibold shadow-lg hover:shadow-xl border-2 border-purple-500 hover:bg-purple-50 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Liên hệ
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform"
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
              </span>
            </NavLink>
          </div>

          {/* Tech stack indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {skillsData.map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-100 text-purple-500 rounded-lg text-sm font-medium border border-purple-200 hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
