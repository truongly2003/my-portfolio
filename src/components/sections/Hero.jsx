// src/components/sections/Hero.jsx
export default function Hero() {
  return (
    <div className="relative  flex items-center justify-center px-5 sm:px-8 lg:px-12  ">
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 sm:-top-40 sm:-left-40 w-72 h-72 sm:w-96 sm:h-96  rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -right-24 sm:-bottom-40 sm:-right-40 w-72 h-72 sm:w-96 sm:h-96  rounded-full blur-3xl opacity-20 animate-pulse-slow delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl lg:max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
        <p className=" text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase font-medium">
          Welcome to My Portfolio
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
          Hi, I'm{" "}
          <span className="bg-clip-text text-transparent text-white">
            Ly Van Truong
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I craft modern, responsive web experiences with clean code and
          user-focused design.
          <br className="hidden sm:inline" />
          {/* Full-stack • React • Tailwind • Performance */}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4 sm:pt-8">
          <a
            href="#projects"
            className="inline-flex items-center px-7 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-5 border rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg   hover:scale-105 active:scale-100 transition-all duration-300"
          >
            View Projects →
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-7 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-5  border rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg  hover:scale-105 active:scale-100 transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}
