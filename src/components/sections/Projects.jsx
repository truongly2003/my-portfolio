// src/components/sections/Projects.jsx
const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack shop với thanh toán Stripe, admin dashboard.',
    tags: ['React', 'Node.js', 'Tailwind', 'MongoDB'],
    link: '#',
  },
  // thêm dự án thật của bạn
];
import { projectsData } from "../../data/projectsData";
export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-white bg-clip-text text-transparent">
        Projects
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {projectsData.map((p, i) => (
          <div
            key={i}
            className="bg-gradient-to-br relative z-10 border-gray-700 from-gray-900 to-gray-800  rounded-3xl  shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border-2 "
          >
            <div className="h-44 sm:h-52 md:h-60 flex items-center justify-center">
                <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={p.image[0]?.url}
                  alt={p.title}
                  className="w-full h-full text-white object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div> */}
              </div>
            </div>
            <div className="p-5 sm:p-6 lg:p-7">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{p.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-950/60 text-purple-300 text-xs sm:text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base inline-flex items-center gap-1.5"
              >
                View Project <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}