import { Phone, Mail, MapPin, Github, Code2, Target } from "lucide-react";

const About = () => {
  // ==================== GIỚI THIỆU BẢN THÂN ====================
//   const introduction = {
//     title: "Giới Thiệu Bản Thân",
//     content: `Em tên là Lý Văn Trưởng – sinh viên năm cuối Trường Đại học Sài Gòn (đang đợi tốt nghiệp) ngành công nghệ thông tin.

// Chuyên sâu về lập trình Backend với Java có kiến thức về Java Core, OOP, JWT và MySQL. Trong quá trình học em đã xây dựng các đồ án nhân như: "Quản lý tài chính cá nhân + chia sẻ bài viết (Kiến trúc microservices + Kafka cơ bản)", "Send-Flow (website gửi mail hàng loạt saas)".Bên cạnh Java, em cũng có làm các đồ án nhóm liên quan tới ASP.Net Core, NestJs và React Js

// Em luôn sẵn sàng học hỏi, cầu tiến và mong muốn được làm việc trong môi trường chuyên nghiệp để vừa học vừa đóng góp.`,
//   };

  // ==================== MỤC TIÊU NGHỀ NGHIỆP ====================
  const careerObjective = {
    title: "Mục Tiêu Nghề Nghiệp",
    description: `
Trong hai năm tới, mục tiêu của em là trở thành một Lập trình viên Backend Junior có năng lực, viết được mã sạch, duy trì hệ thống ổn định và cộng tác hiệu quả với nhóm để xây dựng các sản phẩm chất lượng cao. Em mong muốn được làm việc trong một môi trường chuyên nghiệp, nơi tôi có thể liên tục học hỏi, nâng cao kỹ năng lập trình, cải thiện thiết kế hệ thống và tối ưu hóa hiệu suất, đồng thời đóng góp vào sự phát triển nhanh chóng và bền vững của dự án.
    `.trim(),
  };

  // ==================== THÔNG TIN LIÊN HỆ ====================
  const information = [
    { icon: <Phone size={18} />, label: "Số điện thoại", value: "0782713663" },
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "truonglykhong2003@gmail.com",
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      value: "https://github.com/truongly2003",
    },
    { icon: <MapPin size={18} />, label: "Địa chỉ", value: "TP. Hồ Chí Minh" },
  ];

  // ==================== KỸ NĂNG ====================
  const skills = [
    {
      category: "Kỹ Năng Chuyên Môn",
      items: [
        { label: "Ngôn ngữ lập trình", value: "Java, JavaScript" },
        {
          label: "Frameworks & Thư viện",
          value:
            "Spring Boot, NestJS (Basic), ASP.NET Core (Basic), PHP laravel, ReactJS, Tailwind CSS",
        },
        { label: "Cơ sở dữ liệu", value: "MySQL" },
        {
          label: "Công cụ",
          value: "Git, Docker, Postman, VS Code, IntelliJ IDEA",
        },
        {
          label: "Khác",
          value:
            "Lập trình hướng đối tượng (OOP), Thiết kế RESTful API, Xác thực & Phân quyền (JWT), Microservice(cơ bản)",
        },
      ],
    },
    {
      category: "Kỹ Năng Mềm",
      items: [
        "Tư duy logic và khả năng giải quyết vấn đề tốt.",
        "Khả năng tự học và thích nghi nhanh.",
        "Chủ động trong việc học hỏi và áp dụng công nghệ mới.",
        "Có thể đọc hiểu tài liệu kỹ thuật bằng tiếng Anh.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-black to-gray-600 overflow-auto relative">
      {/* Hiệu ứng nền lấp lánh */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 8}s`,
              boxShadow: "0 0 12px rgba(96, 165, 250, 0.9)",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto py-12 px-6 relative z-10">
        {/* Thông tin cá nhân */}
        <section className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-3xl p-8 border-2 border-gray-700">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Ảnh đại diện */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-gray-600 shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761573494/my-portfolio/avata_cv_jbbicq.jpg"
                    alt="Lý Văn Trưởng"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full shadow-xl text-sm font-bold">
                  Web Developer
                </div>
              </div>
            </div>

            {/* Thông tin chi tiết */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-2">
                Lý Văn Trưởng
              </h2>
              <p className="text-xl text-gray-300 font-medium mb-8">
                Backend Developer
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {information.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-gray-800/70 backdrop-blur rounded-xl px-5 py-4 border border-gray-700 hover:border-gray-500 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-11 h-11 bg-gray-700 rounded-lg">
                      <span className="text-blue-300">{info.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        {info.label}
                      </p>
                      {info.value.startsWith("http") ||
                      info.value.includes("@") ? (
                        <a
                          href={
                            info.value.startsWith("http")
                              ? info.value
                              : `mailto:${info.value}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-200 hover:text-white font-medium text-sm block truncate"
                        >
                          {info.value.replace(
                            "https://github.com/",
                            "github.com/"
                          )}
                        </a>
                      ) : (
                        <p className="text-gray-200 font-medium text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== MỤC TIÊU NGHỀ NGHIỆP ==================== */}
        <section className="mb-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-8 border-2 border-gray-700 shadow-2xl">
          <div className="flex items-center gap-4 mb-7">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">
              {careerObjective.title}
            </h3>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed text-justify whitespace-pre-line mt-6">
            {careerObjective.description}
          </p>
        </section>
        {/* ==================== GIỚI THIỆU BẢN THÂN ==================== */}
        {/* <section className="mb-12 relative overflow-hidden bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-600/60 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/10" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-7">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl">
                <User className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                {introduction.title}
              </h3>
            </div>

            <div className="space-y-5 text-gray-200 text-lg leading-relaxed">
              {introduction.content
                .split("\n")
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i} className="text-justify">
                    {para}
                  </p>
                ))}
            </div>
          </div>
        </section> */}

        {/* ==================== KỸ NĂNG ==================== */}
        <section className="mb-12 bg-gray-900/90 backdrop-blur rounded-2xl p-8 border-2 border-gray-700 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
            <h3 className="text-3xl font-bold text-white">Kỹ Năng</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((group, idx) => (
              <div
                key={idx}
                className="bg-gray-800/60 backdrop-blur rounded-xl p-7 border border-gray-700 hover:border-gray-500 transition-all duration-400"
              >
                <h4 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
                  <Code2 className="w-7 h-7 text-blue-400" />
                  {group.category}
                </h4>
                <div className="space-y-4">
                  {group.items.map((item, i) =>
                    typeof item === "string" ? (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="mt-1.5 text-blue-400">▹</span>
                        <p>{item}</p>
                      </div>
                    ) : (
                      <p key={i} className="text-gray-300">
                        <span className="font-semibold text-white">
                          {item.label}:
                        </span>{" "}
                        <span className="text-gray-300">{item.value}</span>
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Animation CSS */}
    </div>
  );
};

export default About;
