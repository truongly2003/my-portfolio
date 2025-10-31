
import { projectsData } from "../../data/projectsData";
import { useNavigate } from "react-router-dom";
import { Github } from "lucide-react";

const Project = () => {
  const navigate = useNavigate();

  const handleClick = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-700 via-black to-gray-600">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Dự án của tôi
          </h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              onClick={() => handleClick(project)}
              key={index}
              className="bg-gradient-to-br relative z-10 border-gray-700 from-gray-900 to-gray-800  rounded-3xl  shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border-2 "
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image[0]?.url}
                  alt={project.title}
                  className="w-full h-full text-white object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div> */}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3  transition-colors">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 mb-4 line-clamp-3 h-[4.5rem] overflow-hidden">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-xs font-medium border border-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700 text-white rounded-full text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Code Link */}
                <div className="pt-4 border-t border-purple-100">
                  <a
                    href={project.link}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-semibold transition-colors group"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Xem mã nguồn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
