export default function Skill() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
      <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-white bg-clip-text text-transparent">
        My Skills
      </h3>
      <div className="space-y-4">
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
            <h4 className="text-lg sm:text-xl font-semibold text-white">
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
  );
}
