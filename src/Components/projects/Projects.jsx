import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import styles from "./projects.module.scss";
import { projects } from "../../constants/constants";

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <div className="m-20 flex">
      {/* left */}
      <div className="w-[50%] hidden md:block">
        <div className=" pr-32 pt-20 overflow-hidden h-[500px]">
          {currentProject && (
            // <Fade onVisibilityChange>
            <img
              src={currentProject.img}
              alt="Project Img"
              className=" object-scale-down rounded-3xl w-full" // adjusted these classes
            />
            // </Fade>
          )}
        </div>
      </div>

      {/* right */}
      <div className="md:w-[50%] w-[100%] flex flex-col md:pr-10">
        <h1 className="md:text-[60px] text-[40px] font-semibold">Projects</h1>
        <div className=" border-b-2 mb-1" />
        {projects.map((project, index) => (
          <Slide key={index} triggerOnce delay={50}>
            <div
              onClick={() => {
                setCurrentProject(project);
              }}
            >
              <div className=" border-b-2" />
              <div className="flex flex-row items-center justify-between cursor-pointer">
                <div
                  className={`py-3 md:text-[40px] text-[20px] ${styles.hoverEffect}`}
                >
                  {project.name}
                </div>
                <div className="md:text-[15px] text-[13px]">{project.type}</div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};
