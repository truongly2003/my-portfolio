import { Phone, Mail, MapPin, Github } from "lucide-react";

const About = () => {
  const careerObjective = {
    title: "Mục Tiêu Nghề Nghiệp",
    description: `
          Không ngừng theo đuổi sự hoàn thiện trong công nghệ, tôi định hướng trở thành
          một lập trình viên Fullstack vững vàng trong ba năm tới, với khả năng làm chủ cả Backend lẫn Frontend.  
          Sở hữu nền tảng vững chắc về Java, Spring Boot và MySQL, tôi đang từng bước 
          mở rộng kỹ năng với ReactJS và Tailwind CSS để xây dựng những sản phẩm web 
          hiện đại, tối ưu trải nghiệm người dùng.Tôi luôn sẵn sàng học hỏi, chủ động thích nghi và 
          mong muốn được đồng hành cùng một tập thể năng động — nơi mỗi dòng code không chỉ là kỹ thuật, 
          mà còn là giá trị sáng tạo mang lại cho doanh nghiệp và cộng đồng.
          `,
  };

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

  const skills = [
    {
      category: "Kỹ Năng Chuyên Môn",
      items: [
        { label: "Ngôn ngữ lập trình", value: "Java, JavaScript" },
        {
          label: "Frameworks & Thư viện",
          value: "Spring Boot, ReactJS, Tailwind CSS",
        },
        { label: "Cơ sở dữ liệu", value: "MySQL" },
        {
          label: "Công cụ",
          value: "Git, Docker, Postman, VS Code, IntelliJ IDEA",
        },
        {
          label: "Khác",
          value:
            "Lập trình hướng đối tượng (OOP), Thiết kế RESTful API, Xác thực & Phân quyền (JWT)",
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
    <div className="max-w-5xl mx-auto py-2 px-6 text-gray-800">
      {/* Thông tin cá nhân */}
      {/* Thông tin cá nhân với ảnh */}
      <section className="mb-12 bg-gradient-to-br from-purple-50 to-white shadow-lg rounded-3xl p-8 border-2 border-purple-100">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Ảnh đại diện */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-xl">
                <img
                  src="https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761573494/my-portfolio/avata_cv_jbbicq.jpg"
                  alt="Lý Văn Trưởng"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                Developer
              </div>
            </div>
          </div>

          {/* Thông tin chi tiết */}
          <div className="flex-1 w-full">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Lý Văn Trưởng
              </h2>
              <p className="text-xl text-purple-600 font-medium">
                Fullstack Developer
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {information.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100 hover:border-purple-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
                    <span className="text-purple-600">{info.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
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
                        className="text-gray-800 hover:text-purple-600 font-medium transition text-sm truncate block"
                      >
                        {info.value.replace(
                          "https://github.com/",
                          "github.com/"
                        )}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium text-sm truncate">
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
      {/* Mục tiêu nghề nghiệp */}
      <section className="mb-12 bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-white rounded-full"></div>
          <h3 className="text-2xl font-bold">{careerObjective.title}</h3>
        </div>
        <p className="text-purple-50 leading-relaxed text-justify text-lg">
          {careerObjective.description}
        </p>
      </section>

      {/* Kỹ năng */}
      <section className="bg-white shadow-lg rounded-2xl p-8 border-2 border-purple-500">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
          <h3 className="text-2xl font-bold text-purple-500">Kỹ Năng</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-500 transition-all duration-300"
            >
              <h4 className="text-xl font-bold mb-4 text-purple-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                {group.category}
              </h4>
              <div className="space-y-3">
                {group.items.map((item, i) =>
                  typeof item === "string" ? (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <p className="text-gray-700 flex-1">{item}</p>
                    </div>
                  ) : (
                    <p key={i} className="text-gray-700">
                      <span className="font-bold text-purple-500">
                        {item.label}:
                      </span>{" "}
                      <span className="text-gray-600">{item.value}</span>
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
