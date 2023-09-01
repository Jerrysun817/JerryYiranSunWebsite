import { AttentionSeeker } from "react-awesome-reveal";
import { technologies } from "../constants/constants";

export const Skills = () => {
  return (
    <div className="p-10">
      <div>
        <h1 className="text-[40px] text-center pb-4 font-semibold">
          {"I'm familar with:"}
        </h1>
      </div>
      <div className=" w-full flex flex-row flex-wrap gap-9 items-center justify-center">
        {technologies.map((technology, index) => (
          <AttentionSeeker key={`technology-${index}`} triggerOnce>
            <div className="flex flex-col items-center justify-center">
              <div className=" text-[70px]">{technology.icon}</div>
              <div className="text-black text-lg">{technology.name}</div>
            </div>
          </AttentionSeeker>
        ))}
      </div>
    </div>
  );
};
