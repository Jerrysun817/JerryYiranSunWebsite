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
  BiLogoAws,
  BiLogoGoogleCloud,
  BiLogoMongodb,
  BiLogoDocker,
} from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { SiLlvm, SiArm, SiExpress } from "react-icons/si";

import kgc from "../assets/project/kgc.png";
import safewalk from "../assets/project/safewalk.png";
import careerleap from "../assets/project/careerleap.png";

import workland from "../assets/company/workland.png";
import ubcsmartcity from "../assets/company/smartcity.png";
import leapai from "../assets/company/leapai.png";
import ubc from "../assets/company/ubc.png";
import ibm from "../assets/company/ibm.png";
import cirruslab from "../assets/company/cirrus_logo.png";

export const projects = [
  {
    name: "Undeclared Variable Detector",
    type: "Program Analysis",
    img: "https://devpost.com/software/concis",
    github: "not avaliable to public",
    techstack: ["LLVM", "C++"],
  },
  {
    name: "CONCIS-E",
    type: "Web Application/AI",
    img: "https://devpost.com/software/concis",
    github: "not avaliable to public",
    techstack: ["React JS", "Node JS", "Express JS", "MongoDB"],
  },
  {
    name: "ParkSmart",
    type: "Mobile Application/Embedded Systems",
    img: "https://devpost.com/software/parksmart",
    github: "https://github.com/UBCSmartCity/ParkSmart",
    techstack: ["React Native", "Expo", "Firebase"],
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
    name: "MongoDB",
    icon: <BiLogoMongodb />,
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
    name: "ARM",
    icon: <SiArm />,
  },
  {
    name: "C/C++",
    icon: <BiLogoCPlusPlus />,
  },
  {
    name: "LLVM",
    icon: <SiLlvm />,
  },
  {
    name: "AWS",
    icon: <BiLogoAws />,
  },
  {
    name: "Google Cloud",
    icon: <BiLogoGoogleCloud />,
  },
  {
    name: "Docker",
    icon: <BiLogoDocker />,
  },
];

export const experiences = [
  {
    title: "Compiler Developer Intern",
    company_name: "IBM Canada Software Lab",
    icon: ibm,
    date: "May 2023 - Present",
    points: ["Developing new features for Enterprise COBOL compiler on z/OS."],
  },
  {
    title: "Software Engineer",
    company_name: "LEAP A.I.",
    icon: leapai,
    date: "May 2023 - Present",
    points: [
      "Constructed an AI-powered advising chatbot for UBC Sauder School of Business using the Claude-3 model, resulting in faster and more accurate resolution of course-related questions.",
      "Developed and managed a NodeJS/ExpressJS server for API integration, enabling seamless interaction between the web interface and the machine learning model.",
      "Integrated Pinecone and VoyageAI for Retrieval-Augmented Generation (RAG), enhancing the chatbot's ability to interpret and respond to specific queries about the program.",
    ],
  },
  {
    title: "Software Lead/Transportation Team Lead",
    company_name: "UBC SmartCity",
    icon: ubcsmartcity,
    date: "May 2023 - Present",
    points: [
      "Lead the development of a smart parking system, involving the seamless integration of embedded sensors and a react native application.",
      "Implemented an Automated License Plate Recognition system using YOLO and EasyOCR for real-time vehicle identification and monitoring.",
      "Managed and led end-to-end recruitment processes, successfully hiring and training 10+ candidates in vital tools and languages such as JavaScript, Git, and Arduino, increasing team productivity.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "UBC CIRRUS Lab",
    icon: cirruslab,
    date: "Dec 2023 - Apr 2024",
    points: [
      "Conducted weekly office hours, providing personalized guidance and clarification on topics including virtualization, dynamic dispatch, virtual memory management, and etc.",
      "Facilitated weekly demo sessions for over 10 students, enhancing practical understanding and application of essential tools such as GDB, Make, and Linux/Unix Systems.",
    ],
  },
  {
    title: "Teaching Assistant (CPEN 212)",
    company_name: "UBC Electrical and Computer Engineering",
    icon: ubc,
    date: "Dec 2023 - Apr 2024",
    points: [
      "Conducted weekly office hours, providing personalized guidance and clarification on topics including virtualization, dynamic dispatch, virtual memory management, and etc.",
      "Facilitated weekly demo sessions for over 10 students, enhancing practical understanding and application of essential tools such as GDB, Make, and Linux/Unix Systems.",
    ],
  },
  {
    title: "Teaching Assistant (APSC 160)",
    company_name: "UBC Electrical and Computer Engineering",
    icon: ubc,
    date: "Sept 2023 - Apr 2024",
    points: [
      "Assist students in understanding course material and assignments in C and Embedded Systems/Microcontrollers ensuring over 90% comprehension of key concepts.",
      "Supported 300+ students in enhancing their coding skills, resulting in improved debugging efficiency and optimal use of development tools.",
      "Assessed and provided feedback on numerous assignments, leading to an improvement in student performance and mastery.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company_name: "Workland",
    icon: workland,
    date: "May 2023 - Sept 2023",
    points: [
      "Implemented and integrated various components with React for ATS software, resulting in faster loading times and more efficient code management.",
      "Developed an automated Python script that streamlined the process of converting translations into i18next compatible formats, resulting in a 90% reduction in time spent on manual conversions.",
      "Devised a secure process for Microsoft Login redirections, involving the intricate handling of storing, hashing, and auto-filling form data utilizing Redux and IndexedDB.",
      "Implemented a comprehensive calendar integration feature, enabling recruiters to seamlessly manage and synchronize meetings across multiple calendar platforms.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "UBC SmartCity",
    icon: ubcsmartcity,
    date: "Sept 2022 - May 2023",
    points: [
      "Developed a front-end interface using React Native and Expo for the UBC SafeWalk Mobile App leading to a increase in user engagement.",
      "Utilized Figma for the design of user-centric graphics, substantially improving the overall aesthetics and functionality of the application, contributing to a more intuitive and engaging user experience.",
      "Engineered adaptive interfaces tailored to different user types improving the operational flow.",
    ],
  },
];
