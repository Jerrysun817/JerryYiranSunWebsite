import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { Projects } from "./Components/projects/Projects";
import { Home } from "./Components/Home";
import { Experience } from "./Components/Experience";
import { Skills } from "./Components/Skills";
import { Contact } from "./Components/Contact";
import { About } from "./Components/About";

function App() {
  return (
    <div>
      <NavBar />
      <div className=" relative flex flex-col justify-center items-center">
        <section id="home" className="w-full pt-10 pb-20">
          <Home />
        </section>
        <section id="about" className="w-full pb-20">
          <About />
        </section>
        <section id="skills" className="w-full mb-20 bg-slate-100">
          <Skills />
        </section>
        <section id="experiences" className="w-full pb-20">
          <Experience />
        </section>
        <section id="projects" className="w-full mb-20 bg-slate-100">
          <Projects />
        </section>
        <section id="contact" className="w-full pb-20">
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
