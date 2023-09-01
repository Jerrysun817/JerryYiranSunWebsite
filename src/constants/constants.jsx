import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoFigma,
  BiLogoPython,
  BiLogoJava,
  BiLogoCPlusPlus,
} from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";

import spaceexplorer from "../assets/project/spacexplore.png";
import kgc from "../assets/project/KGC.png";
import safewalk from "../assets/project/safewalk.png";
import shellsim from "../assets/project/shellsim.png";
import careerleap from "../assets/project/careerleap.png";

import workland from "../assets/company/workland.png";
import ubcsmartcity from "../assets/company/smartcity.png";
import sinovatech from "../assets/company/sinovatech.png";
import leapai from "../assets/company/leapai.png";

export const projects = [
  {
    name: "SpacExplorer",
    type: "Web Application",
    img: spaceexplorer,
  },
  {
    name: "KGC",
    type: "Web Application",
    img: kgc,
  },
  {
    name: "UBC SafeWalk",
    type: "Mobile Application",
    img: safewalk,
  },
  {
    name: "Shell Simulator",
    type: "Computer Systems",
    img: shellsim,
  },
  {
    name: "CareerLeap",
    type: "Web Application",
    img: careerleap,
  },
];

export const technologies = [
  {
    name: "HTML",
    icon: <BiLogoHtml5 />,
  },
  {
    name: "CSS",
    icon: <BiLogoCss3 />,
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript />,
  },
  {
    name: "React JS",
    icon: <BiLogoReact />,
  },
  {
    name: "React Native",
    icon: <BiLogoReact />,
  },
  {
    name: "Redux",
    icon: <BiLogoRedux />,
  },
  {
    name: "Tailwind CSS",
    icon: <BiLogoTailwindCss />,
  },
  {
    name: "Bootstrap",
    icon: <BsBootstrapFill />,
  },
  {
    name: "Git",
    icon: <BiLogoGit />,
  },
  {
    name: "Figma",
    icon: <BiLogoFigma />,
  },
  {
    name: "Python",
    icon: <BiLogoPython />,
  },
  {
    name: "Java",
    icon: <BiLogoJava />,
  },
  {
    name: "C++",
    icon: <BiLogoCPlusPlus />,
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "LEAP A.I.",
    icon: leapai,
    date: "May 2023 - Present",
    points: [
      "Currently developing a Web Chatbot for online advising to reduce the workload of advisors and improve the efficiency of the advising process.",
    ],
  },
  {
    title: "Software Team Sub-Lead",
    company_name: "UBC SmartCity",
    icon: ubcsmartcity,
    date: "May 2023 - Present",
    points: [
      "Currently developing a react native mobile smart parking application integrating sensors and cameras to provide real-time parking availability and navigation to the nearest parking spot.",
    ],
  },
  {
    title: "Frontend Developer Co-op",
    company_name: "Workland",
    icon: workland,
    date: "May 2023 - Sept 2023",
    points: [
      "Migrated multiple legacy components and pages to React JS for Atals Recruiting Web Application, leading to increased stability, a 50% reduction in loading times, and streamlined code maintenance.",
      "Developed highly reusable components and custom hooks facilitating code reusability, reducing redundancy, and accelerating development by 30%.",
      "Demonstrated proficiency in retrieving and caching data from REST APIs endpoints using TanStack Query optimizing the data workflow, improving data efficiency and reducing backend load by 25%",
      "Developed an automated Python script that streamlined the process of converting translations into i18next compatible formats, resulting in a 90% reduction in time spent on manual conversions.",
      "Implemented form field control and validation using react-hook-form within a customer-facing application, enhancing input accuracy and reducing user errors by 60%.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "UBC SmartCity",
    icon: ubcsmartcity,
    date: "Sept 2022 - May 2023",
    points: [
      "Developed a front-end interface using React Native and Expo for the UBC SafeWalk Mobile App leading to a 25% increase in user engagement.",
      "Utilized Figma for the design of user-centric graphics, substantially improving the overall aesthetics and functionality of the application, resulting in a 35% improvement in user satisfaction ratings and contributing to a more intuitive and engaging user experience.",
      "Engineered adaptive interfaces tailored to different user types, such as customers, supervisors, and employees allowing customers to request pickups, supervisors to assign requests efficiently, and employees to access vital customer data, improving the operational flow, reducing the overall request handling time by 40% and enhancing customer satisfaction.",
    ],
  },
  {
    title: "Software Testing Engineer",
    company_name: "Sinovatech Network",
    icon: sinovatech,
    date: "Jul 2020 - Sept 2020",
    points: [
      "Conducted comprehensive testing on functionality, compatibility, and user experience for China Unicom's mobile app, catering to over 100 million users. Ensuring high performance and reliability, resulting in a 25% reduction in user-reported issues and elevating the satisfaction rate.",
      "Systematically organized and authored technical reports using Microsoft Office, enabling clear and concise communication of errors and bugs to the development team leading to a 40% faster resolution time for critical issues, enhancing collaboration between teams and increasing the overall efficiency of the development cycle.",
    ],
  },
];
