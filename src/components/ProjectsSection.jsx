import { projectsData } from "../data/projectsData";
import { Github, ExternalLink } from "lucide-react";
const ProjectsSection = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Dự án nổi bật
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Một số dự án tiêu biểu mà tôi đã thực hiện
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Hình ảnh */}
            <img
              // src={project.image[0]}
              src="https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761366564/finance-share/d5f5uzgvhogtoyanpwi2.jpg"
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              {/* Tiêu đề */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>

              {/* Mô tả */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link Code/Demo */}
              <div className="flex gap-4">
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <Github /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-green-600 hover:underline"
                  >
                    <ExternalLink /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
