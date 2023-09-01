/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants/constants";

export const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      contentStyle={{
        background: "#e5e7eb",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "10px solid #e5e7eb" }}
      iconStyle={{
        overflow: "hidden",
      }}
      icon={<img src={experience.icon} alt={experience.company_name} />}
    >
      <div>
        <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
        <p className=" text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience?.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export const Experience = () => {
  return (
    <div>
      <div>
        <h1 className="md:text-[60px] text-[40px] font-semibold text-center">
          Work Experiences
        </h1>
      </div>

      <div className="mt-10 flex flex-col">
        <VerticalTimeline lineColor="#e5e7eb">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
