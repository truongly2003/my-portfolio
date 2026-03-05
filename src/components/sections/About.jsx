// src/components/sections/About.jsx
import {
  MapPin,
  Mail,
  Phone,
  Briefcase,
  User,
  GraduationCap,
} from "lucide-react";
const items = [
  {
    icon: <User size={22} />,
    title: "Name",
    value: "Ly Van Truong",
  },
  {
    icon: <MapPin size={22} />,
    title: "Location",
    value: "Ho Chi Minh City",
  },
  {
    icon: <Mail size={22} />,
    title: "Email",
    value: "truonglykhong2003@gmail.com",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Studying At",
    value: "Sai Gon University, Ho Chi Minh City",
  },
  {
    icon: <Phone size={22} />,
    title: "Phone",
    value: "0782713663",
  },
  {
    icon: <Briefcase size={22} />,
    title: "Profession",
    value: "Student",
  },
];
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
              Hello! I'm Ly Van Truong, an Information Technology graduate from{" "}
              Saigon University. I am passionate about building creative and
              impactful digital products. My goal over the next four years is to
              grow into a strong Fullstack Software Engineer.
            </p>
          </div>

          <div className=" flex items-center justify-center ">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-100 border-2 border-gray-400 rounded-xl p-4 shadow-md hover:shadow-lg transition"
                >
                  <div className="text-gray-700 mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <p className="text-gray-500 font-medium">{item.title}</p>
                    <p className="text-gray-800 font-semibold  break-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  gap-4 sm:gap-6  sm:pt-2">
            <a
              href="https://drive.google.com/file/d/1a_BxkgSm0lUUx0g6dVn_DnrLTCGP4Qj9/view?usp=sharing"
              className="inline-flex items-center px-7 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-5 border rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg   hover:scale-105 active:scale-100 transition-all duration-300"
            >
              View CV →
            </a>
            <a
              href="https://github.com/truongly2003"
              className="inline-flex items-center px-7 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-5  border rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg  hover:scale-105 active:scale-100 transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border shadow-2xl shadow-purple-900/50">
            <img
              src="https://res.cloudinary.com/dg8tvbfsg/image/upload/v1761573494/my-portfolio/avata_cv_jbbicq.jpg"
              alt="Lý Văn Trưởng"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
