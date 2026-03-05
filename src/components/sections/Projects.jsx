// src/components/sections/Projects.jsx
import { projectsData } from "../../data/projectsData";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
        Projects
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {projectsData.map((p, i) => {
          const visibleTags = p.tags.slice(0, 4);
          const remaining = p.tags.length - 4;

          return (
            <div
              key={i}
              className="bg-gradient-to-br relative z-10 border-gray-700 from-gray-900 to-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border-2 flex flex-col"
            >
              {/* Image */}
              <div className="h-44 sm:h-52 md:h-60 flex items-center justify-center">
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                  <img
                    src={p.image[0]?.url}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {p.title}
                </h3>

                {/* Description giới hạn 4 dòng */}
                <p className="text-sm sm:text-base text-gray-400 mb-4 line-clamp-4">
                  {p.description}
                </p>

                <p className="mb-3">Technologies:</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {visibleTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gray-400 px-3 py-1 border text-xs sm:text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}

                  {remaining > 0 && (
                    <span className="text-gray-400 px-3 py-1 border text-xs sm:text-sm rounded-full">
                      +{remaining}
                    </span>
                  )}
                </div>

                {/* Button luôn ở dưới */}
                <div className="mt-auto">
                  <a
                    href={p.link}
                    className="border px-4 py-2 rounded-lg font-medium text-sm sm:text-base inline-flex items-center gap-1.5 hover:bg-white hover:text-black transition"
                  >
                    GitHub <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}