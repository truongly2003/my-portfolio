import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

function DetailProject() {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(project);
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg mb-4">
            Không tìm thấy dữ liệu dự án.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-purple-600 font-medium transition-colors"
          >
            ← Quay lại trang trước
          </button>
        </div>
      </div>
    );
  }

  // Handle navigation for carousel
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.image.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  <div className="bg-gradient-to-br from-gray-800 via-black to-gray-700 ">
      <div className="max-w-4xl mx-auto py-8 px-4 ">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-2 text-white hover:text-gray-100 transition-colors font-medium group"
      >
        <ArrowLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Quay lại
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6  bg-gradient-to text-white bg-clip-text text-transparent">
        {project.title}
      </h1>
      {/* description image */}
      {Array.isArray(project.image) &&
        project.image.length > 0 &&
        project.image[currentImageIndex]?.description && (
          <p className="text-gray-200 mb-2 italic text-sm sm:text-base">
            {project.image[currentImageIndex].description}
          </p>
        )}

      {/* Project Images Carousel */}
      <div className="mb-8">
        {Array.isArray(project.image) && project.image.length > 0 ? (
          <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-purple-100">
            {/* Image */}
            <img
              src={project.image[currentImageIndex]?.url}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-auto aspect-video object-cover md:h-[450px]  brightness-90"
            />
            {/* Navigation Buttons */}
            {project.image.length > 1 && (
              <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
                <button
                  onClick={handlePrevImage}
                  className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
            {/* Image Counter */}
            {project.image.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.image.length}
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-200">Không có hình ảnh nào để hiển thị.</p>
        )}
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">
          Mô tả dự án
        </h2>
        <p className="text-gray-200 leading-relaxed">{project.description}</p>
      </div>
      {/* Architecture Section */}
      {project.architectureImage && project.architectureImage.url && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Mô tả kiến trúc
          </h2>
          <div className="flex flex-col items-center">
            <img
              src={project.architectureImage.url}
              alt="Architecture Diagram"
              className="rounded-xl shadow-lg border border-gray-500 mb-4 brightness-90"
            />
            {project.architectureImage.description && (
              <p className="text-gray-600 text-center max-w-2xl">
                {project.architectureImage.description}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Key Features */}
      {project.keyFeatures && Object.keys(project.keyFeatures).length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Các tính năng chính
          </h2>

          <div className="text-gray-200 leading-relaxed ml-8">
            {Object.entries(project.keyFeatures).map(
              ([key, features]) =>
                features.length > 0 && (
                  <div key={key} className="mb-4">
                    <h3 className="text-lg font-medium text-white mb-2 capitalize">
                      {(() => {
                        const titles = {
                          user: "Người dùng",
                          finance: "Tài chính",
                          community: "Cộng đồng",
                          notifications: "Thông báo",
                          responsibilities:"Chịu trách nhiệm"
                        };
                        return titles[key] || key;
                      })()}
                    </h3>

                    <ul className="list-disc pl-5">
                      {features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">
          Công nghệ sử dụng
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className=" text-gray-200 border border-purple-200 px-4 py-2 rounded-full text-sm font-medium  transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border hover:text-gray-300 text-white rounded-lg hover:bg-gray-600 transition-colors shadow-md hover:shadow-lg font-medium"
        >
          <Github size={20} />
          <span>Xem mã nguồn</span>
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-white border-2 border-purple-500 rounded-lg hover:bg-purple-50 transition-colors shadow-md hover:shadow-lg font-medium"
          >
            <ExternalLink size={20} />
            <span>Xem Demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
  );
}

export default DetailProject;
