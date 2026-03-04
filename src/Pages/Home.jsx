import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
export default function Home() {
  return (
    <>
      <section id="home" className="">
        <Hero />
      </section>

      <section id="about" className="py-20 md:py-28 lg:py-36">
        <About />
      </section>

      <section id="projects" className="py-20 md:py-28 lg:py-36 bg-gray-900/30">
        <Projects />
      </section>

      <section id="contact" className="py-20 md:py-28 lg:py-36">
        <Contact />
      </section>
    </>
  );
}