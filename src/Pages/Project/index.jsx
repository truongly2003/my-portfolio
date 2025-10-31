// import { projectsData } from "../../data/projectsData";
// import { useNavigate } from "react-router-dom";
// import { Github } from "lucide-react";

// const Project = () => {
//   const navigate = useNavigate();
//   const handleClick = (project) => {
//     navigate(`/project/${project.id}`, { state: { project } });
//   };

//   return (
//     <div>
//       <h2 className="text-xl py-2  text-gray-800 mb-4">My Projects</h2>
//       <div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {projectsData.map((project, index) => (
//             <div
//               onClick={() => handleClick(project)}
//               key={index}
//               className="bg-white  rounded-lg shadow-md overflow-hidden hover:shadow-xl cursor-pointer transition-shadow duration-300"
//             >
//               {/* Hình ảnh */}
//               <div className="w-full h-48 bg-gray-200">
//                 <img
//                   src={project.image[0]}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="p-6">
//                 {/* Tiêu đề */}
//                 <h3 className="text-xl font-semibold text-gray-800  mb-2">
//                   {project.title}
//                 </h3>

//                 {/* Mô tả */}
//                 <p className="text-gray-600 mb-4 line-clamp-3 h-[4.5rem] overflow-hidden">
//                   {project.description}
//                 </p>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.slice(0, 3).map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="bg-gray-200 dark:bg-gray-200 text-gray-800  px-2 py-1 rounded text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                   {project.tags.length > 3 && (
//                     <span className="bg-gray-300 dark:bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
//                       +{project.tags.length - 3}
//                     </span>
//                   )}
//                 </div>

//                 {/* Link Code/Demo */}
//                 <div className="flex gap-4">
//                   <a
//                     href={project.link || "#"}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-blue-600 hover:underline"
//                   >
//                     <Github /> Code
//                   </a>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;
import { projectsData } from "../../data/projectsData";
import { useNavigate } from "react-router-dom";
import { Github } from "lucide-react";

const Project = () => {
  const navigate = useNavigate();

  const handleClick = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-900 mb-4">
            Dự án của tôi
          </h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              onClick={() => handleClick(project)}
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-500"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-purple-100">
                <img
                  src={project.image[0]?.url}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-purple-900 mb-3 hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="text-gray-600 mb-4 line-clamp-3 h-[4.5rem] overflow-hidden">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-medium">
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
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors group"
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
