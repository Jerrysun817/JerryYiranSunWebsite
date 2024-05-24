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
  BiLogoNodejs,
} from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { SiExpress } from "react-icons/si";

import kgc from "../assets/project/kgc.png";
import safewalk from "../assets/project/safewalk.png";
import careerleap from "../assets/project/careerleap.png";

import workland from "../assets/company/workland.png";
import ubcsmartcity from "../assets/company/smartcity.png";
import sinovatech from "../assets/company/sinovatech.png";
import leapai from "../assets/company/leapai.png";
import ubclaunchpad from "../assets/company/launchpad.png";
import ubc from "../assets/company/ubc.png";

export const projects = [
  {
    name: "CONCIS-E",
    type: "Web Application/AI",
    img: "https://devpost.com/software/concis",
    github: "not avaliable to public",
    techstack: ["React JS", "Node JS", "Express JS", "Figma", "Firebase"],
  },
  {
    name: "ParkSmart",
    type: "Mobile Application/Embedded Systems",
    img: "https://devpost.com/software/parksmart",
    github: "https://github.com/UBCSmartCity/ParkSmart",
    techstack: ["React Native", "Expo", "Firebase", "Raspberry Pi", "Python"],
  },
  {
    name: "Epilog",
    type: "Mobile Application",
    img: "https://devpost.com/software/epilog",
    github: "not avaliable to public",
    techstack: ["React Native", "Expo", "Firebase", "Express JS", "Node JS"],
  },
  {
    name: "Motion Controlled Web-Games",
    type: "Web Application",
    img: kgc,
    github: "not avaliable to public",
    techstack: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Socket.io",
      "Python",
    ],
  },
  {
    name: "UBC SafeWalk",
    type: "Mobile Application",
    img: safewalk,
    github: "https://github.com/UBCSmartCity/UBC-Safewalk-App",
    techstack: ["React Native", "Expo", "Figma", "Python"],
  },
  {
    name: "CareerLeap",
    type: "Web Application",
    img: careerleap,
    github: "https://github.com/Jerrysun817/CareerLeap",
    techstack: ["React JS", "Figma"],
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
    name: "Node JS",
    icon: <BiLogoNodejs />,
  },
  {
    name: "Express JS",
    icon: <SiExpress />,
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
    name: "C/C++",
    icon: <BiLogoCPlusPlus />,
  },
];

export const experiences = [
  {
    title: "Teaching Assistant (CPEN 212)",
    company_name: "University of British Columbia",
    icon: ubc,
    date: "Dec 2023 - Apr 2024",
    points: [
      "Assist students in understanding course material and assignments in C and Embedded Systems/Microcontrollers ensuring over 90% comprehension of key concepts.",
      "Supported 300+ students in enhancing their coding skills, resulting in improved debugging efficiency and optimal use of development tools.",
      "Assessed and provided feedback on numerous assignments, leading to an improvement in student performance and mastery.",
    ],
  },
  {
    title: "Teaching Assistant (APSC 160)",
    company_name: "University of British Columbia",
    icon: ubc,
    date: "Sept 2023 - Apr 2024",
    points: [
      "Assist students in understanding course material and assignments in C and Embedded Systems/Microcontrollers ensuring over 90% comprehension of key concepts.",
      "Supported 300+ students in enhancing their coding skills, resulting in improved debugging efficiency and optimal use of development tools.",
      "Assessed and provided feedback on numerous assignments, leading to an improvement in student performance and mastery.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "LEAP A.I.",
    icon: leapai,
    date: "May 2023 - Present",
    points: [
      "Enhanced advisor efficiency by developing a Web AI advising chatbot for UBC Sauder School of Business using fine-tuned llama2 model, aiming in a 30% reduction in advisor workload.",
      "Streamlined advisor access by implementing a login feature in ReactJS using Firebase, resulting in a secured authentication process.",
      "Enhanced sensitive student data integrity and accessibility by managing the Firestore database, resulting in increased database reliability.",
    ],
  },
  {
    title: "Software Lead",
    company_name: "UBC SmartCity",
    icon: ubcsmartcity,
    date: "May 2023 - Present",
    points: [
      "Leading the development and deployment of a smart parking system, involving the seamless integration of embedded sensors and a mobile application, which is projected to enhance parking efficiency by 60% upon implementation.",
      "Spearheaded the optimization of communication between mobile applications and hardware sensors, achieving a reduction in data transfer delay, thereby enhancing real-time data visualization capabilities.",
      "Managed and led end-to-end recruitment processes, successfully hiring and training 10+ candidates in vital tools and languages such as JavaScript, Git, and Arduino, increasing team productivity.",
    ],
  },
  {
    title: "Front-End Developer Co-op",
    company_name: "Workland",
    icon: workland,
    date: "May 2023 - Sept 2023",
    points: [
      "Migrated multiple legacy components and pages to React JS for Atlas Recruiting Web Application, leading to increased stability, a 50% reduction in loading times, and streamlined code maintenance.",
      "Demonstrated proficiency in retrieving and caching data from REST APIs endpoints using TanStack Query optimizing the data workflow, improving data efficiency and reducing backend load by 25%",
      "Developed an automated Python script that streamlined the process of converting translations into i18next compatible formats, resulting in a 90% reduction in time spent on manual conversions.",
      "Devised a secure process for Microsoft Login redirections, involving the intricate handling of storing, hashing, and auto-filling form data utilizing Redux and IndexedDB.",
      "Integrated Google Location API for location autocomplete functionality, enhancing user convenience and accuracy by 40%.",
      "Implemented a comprehensive calendar integration feature, enabling recruiters to seamlessly manage and synchronize meetings across multiple calendar platforms, such as Google Calendar and Microsoft Calendar.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "UBC SmartCity",
    icon: ubcsmartcity,
    date: "Sept 2022 - May 2023",
    points: [
      "Developed a front-end interface using React Native and Expo for the UBC SafeWalk Mobile App leading to a 25% increase in user engagement.",
      "Utilized Figma for the design of user-centric graphics, substantially improving the overall aesthetics and functionality of the application, resulting in a 35% improvement in user satisfaction ratings and contributing to a more intuitive and engaging user experience.",
      "Engineered adaptive interfaces tailored to different user types, such as customers, supervisors, and employees allowing customers to request pickups, supervisors to assign requests efficiently, and employees to access vital customer data, improving the operational flow, reducing the overall request handling time by 40% and enhancing customer satisfaction.",
    ],
  },
];
