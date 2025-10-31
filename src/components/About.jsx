
function About() {
  return (
    <div className="bg-purple-500  py-10">
      <div className="flex flex-col items-center">
        <img
          src="/path/to/your/image.png"
          alt="Ly Van Truong"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-xl font-bold text-orange-500">Ly Van Truong</h2>
        <p className="text-gray-300">Web Developer</p>
      </div>

      <div className="mt-6">
        <h3 className="text-orange-500 font-semibold mb-2">INFORMATION</h3>
        <p>📞 0782713663</p>
        <p>📧 truonglvkhong2003@gmail.com</p>
        <p>🌐 <a href="https://github.com/truonglv2003" className="text-blue-400">github.com/truonglv2003</a></p>
        <p>📍 Ho Chi Minh City</p>
      </div>

      <div className="mt-6">
        <h3 className="text-orange-500 font-semibold mb-2">SKILLS</h3>
        <ul className="list-disc list-inside">
          <li>ReactJS</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
