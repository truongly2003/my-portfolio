import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background effects - giảm độ phức tạp */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          {/* Heading - đơn giản hơn */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Web Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Đam mê lập trình và phát triển phần mềm
            </p>
          </div>

          {/* CTA Buttons - gọn hơn */}
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink
              to="/project"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Xem dự án
            </NavLink>
            <NavLink
              to="/about"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold border border-gray-700 transition-all duration-300 hover:scale-105"
            >
              Liên hệ
            </NavLink>
          </div>

     
        </div>
      </div>
    </div>
  );
}

export default Home;
