// src/components/sections/About.jsx
export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
      <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-white bg-clip-text text-transparent">
        About Me
      </h3>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1 space-y-8">
          <div className="space-y-5 sm:space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Hello! I'm <strong className="text-white">Ly Van Truong</strong> —
              a developer passionate about building modern, fast, and beautiful
              web products.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              I focus on user experience, clean code, and high performance.
            </p>
          </div>
          {/* CAREER OBJECTIVE */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Career Objective
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              My goal is to become a strong Full-Stack Developer with a primary
              focus on backend development. I am passionate about designing
              scalable systems, building secure RESTful APIs, and optimizing
              database performance.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              At the same time, I continuously improve my frontend skills to
              create seamless, user-friendly interfaces that deliver complete
              and efficient web applications.
            </p>
          </div>
          {/* SKILLS */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              My Skills
            </h3>

            {[
              {
                title: "Languages",
                items: ["Java", "JavaScript", "C#"],
              },
              {
                title: "Frameworks",
                items: ["Spring Boot", "ASP.NET Core", "React JS"],
              },
              {
                title: "Database",
                items: ["MySQL"],
              },
              {
                title: "Tools",
                items: ["Postman", "VS Code", "IntelliJ IDEA"],
              },
              {
                title: "Others",
                items: ["OOP", "RESTful API", "JWT Authentication"],
              },
            ].map((group) => (
              <div key={group.title} className="space-y-2">
                <h4 className="text-lg sm:text-xl font-semibold text-purple-400">
                  {group.title}
                </h4>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 border rounded-full text-white text-sm sm:text-base shadow-md hover:shadow-purple-700/50 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border shadow-2xl shadow-purple-900/50">
            <img
              src="/assets/images/profile.jpg"
              alt="Lý Văn Trưởng"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
