import { Slide } from "react-awesome-reveal";
import photo from "../assets/photo.jpg";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-32 md:pt-10 relative">
      <div className="w-full md:w-[700px] absolute z-10 p-4 md:p-10 bg-white bg-opacity-30 backdrop-blur-md rounded">
        <Slide direction="left" triggerOnce>
          <div className="text-2xl md:text-4xl font-bold">Greetings!</div>
        </Slide>
        <Slide direction="right" triggerOnce>
          <div className="text-6xl md:text-[150px] leading-[0.8] pb-5">
            {"I'm Jerry."}
          </div>
        </Slide>
        <div className="text-xl md:text-2xl font-semibold">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                "I'm a computer engineering student",
                "I'm a software engineer",
                "I'm a compiler developer",
                "I'm a full-stack developer",
                "I'm a mobile application developer",
                "I'm a cloud computing enthusiast",
                "I'm a UX/UI designer",
              ],
            }}
          />
        </div>
        <Slide direction="down" triggerOnce>
          <div className="text-lg md:text-xl">
            I am passionate about transforming ideas into tangible solutions
            through technology
          </div>
        </Slide>
      </div>

      <img src={photo} className="pt-10 blur-sm w-full" />
    </div>
  );
};
