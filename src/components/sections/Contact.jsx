// src/components/sections/Contact.jsx
export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
      <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-12 sm:mb-16 text-white">
        Let's Connect
      </h3>

      <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
        I'm always open to exciting projects, collaboration opportunities,
        or simply discussing technology and backend development.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        {/* Email */}
        <a
          href="mailto:truonglykhong2003@gmail.com"
          className="inline-flex justify-center items-center px-8 sm:px-10 py-4 bg-purple-600 rounded-xl font-semibold text-base sm:text-lg hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-purple-800/40"
        >
          Send Email
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/truongly2003"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center px-8 sm:px-10 py-4 border-2 border-purple-500/70 rounded-xl font-semibold text-base sm:text-lg hover:bg-purple-950/40 hover:border-purple-400 transition duration-300"
        >
          GitHub
        </a>

        {/* Phone */}
        <a
          href="tel:+84901234567"
          className="inline-flex justify-center items-center px-8 sm:px-10 py-4 border-2 border-green-500/70 rounded-xl font-semibold text-base sm:text-lg hover:bg-green-900/40 hover:border-green-400 transition duration-300"
        >
          Call Me
        </a>
      </div>

      <p className="mt-10 text-sm sm:text-base text-gray-500">
        Ho Chi Minh City • Available for Freelance & Full-time
      </p>
    </div>
  );
}