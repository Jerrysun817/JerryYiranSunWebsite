import { Slide } from "react-awesome-reveal";
import Background3D from "./Components/Background3D";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { Projects } from "./Components/projects/Projects";
import { About } from "./Components/About";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className=" relative flex flex-col justify-center items-center">
          <section id="about" className="w-full pt-10">
            <About />
          </section>

          <section id="resume" className="w-full pt-48 h-[1500px]">
            <h1>resume</h1>
          </section>
          <section id="projects" className="w-full pt-48 h-[1000px]">
            <Projects />
          </section>
          <section id="contact" className="w-full">
            <h1>Contact</h1>
          </section>
        </div>

        {/* <Background3D /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
