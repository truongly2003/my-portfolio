import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Skill from "../components/sections/Skill";
export default function Home() {
  return (
    <>
      <section id="home" className="py-10 md:py-28 lg:py-24">
        <Hero />
      </section>

      <section id="about" className="py-10 md:py-28 lg:py-24">
        <About />
      </section>

      <section id="projects" className="py-10 md:py-28 lg:py-24 ">
        <Projects />
      </section>
      <section id="skill" className="py-10 md:py-28 lg:py-24">
        <Skill />
      </section>
      <section id="contact" className="py-10 md:py-28 lg:py-24">
        <Contact />
      </section>
    </>
  );
}
