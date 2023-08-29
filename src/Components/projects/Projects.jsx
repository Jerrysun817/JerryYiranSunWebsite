import { useState } from "react";
import projects from "./projects.json";
import { Fade, Slide } from "react-awesome-reveal";
import kgcPic from "../../assets/projectimg/KGC.png";
import careerleapPic from "../../assets/projectimg/careerleap.png";
import safewalkPic from "../../assets/projectimg/safewalk.png";
import shellsimPic from "../../assets/projectimg/shellsim.png";
import spacexplorePic from "../../assets/projectimg/spacexplore.png";
import styles from "./projects.module.scss";

export const Projects = () => {
  const imageMap = {
    KGC: kgcPic,
    CareerLeap: careerleapPic,
    "UBC SafeWalk": safewalkPic,
    "Shell Simulator": shellsimPic,
    SpacExplorer: spacexplorePic,
  };
  const [img, setImg] = useState(null);

  return (
    <div className="m-20 flex">
      {/* left */}
      <div className="w-[50%] hidden md:block">
        <div className=" pr-32 pt-20 overflow-hidden h-[500px]">
          {imageMap[img] && (
            // <Fade onVisibilityChange>
            <img
              src={imageMap[img]}
              alt="Project Img"
              className=" object-scale-down rounded-3xl w-full" // adjusted these classes
            />
            // </Fade>
          )}
        </div>
      </div>

      {/* right */}
      <div className="md:w-[50%] w-[100%] flex flex-col md:pr-10">
        <h1 className="md:text-[75px] text-[50px]">Projects</h1>
        <div className=" border-b-2 mb-1" />
        {projects.map((project, index) => (
          <Slide key={index} triggerOnce delay={50}>
            <div
              onMouseEnter={() => {
                setImg(project.name);
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
