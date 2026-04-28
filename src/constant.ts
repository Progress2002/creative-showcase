import LbHLogo from "@/assets/logos/LBH-logo.webp";
import Virtual_E_Logo from "@/assets/logos/Virtual-E.webp";
import MicroverseLogo from "@/assets/logos/microvers.webp";
import LbHfarmImg from "@/assets/images/lbH_Website.webp";
import BUKSOSImg from "@/assets/images/BUKSOS.webp";
import GBAMImg from "@/assets/images/GBAM.webp";
import Ecoprotin from "@/assets/images/ecoprotin.webp";
import PRoductListImg from "@/assets/images/product-list.webp";
import AimsHubImg from "@/assets/images/AimsHubImg.webp";
import PreviousPortfolioImg from "@/assets/images/PreviousPortfolioImg.webp";
import AgroplannerImg from "@/assets/images/agroplanner.webp";

export const meteorTrails = [
  { top: "10%", left: "5%", delay: "0s", duration: "9s" },
  { top: "5%", left: "35%", delay: "1.2s", duration: "8s" },
  { top: "15%", left: "65%", delay: "0.6s", duration: "10s" },
  { top: "20%", left: "85%", delay: "2.4s", duration: "11s" },
  { top: "30%", left: "15%", delay: "1.6s", duration: "7s" },
  { top: "35%", left: "50%", delay: "2s", duration: "8s" },
  { top: "45%", left: "75%", delay: "0.8s", duration: "11s" },
  { top: "55%", left: "25%", delay: "2.6s", duration: "10s" },
];

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  initial: string;
  logo?: string | null;
};

export const experiences: ExperienceItem[] = [
  {
    company: "LbH LC ",
    role: "Full Stack Software Developer",
    period: "Dec 2023 - Apr 2026",
     bullets: [
      "Redesigned and continuously improved the company's website while restructuring the frontend architecture to enhance performance, scalability, and overall user experience.",
      "Actively contributed to the development of web applications, including DESApp, core platform features, a bulk CSV upload system for farmer profiling, and a Credit System for managing loans and resource allocation.",
    ],
    initial: "LbH",
    logo: LbHLogo,
  },
  {
    company: "VirtualE",
    role: "Frontend Engineer",
    period: "Apr 2023 - Present",
    bullets: [
      "Contributed to key desktop and web application features, including Analytics and Break functionality, improving user insights and overall experience.",
      "Designed and built the Team Management System (frontend) and supported core web development efforts, including website enhancements and migration from Chakra UI v2 to v3 for improved performance and maintainability.",
    ],
    initial: "VE",
    logo: Virtual_E_Logo,
  },
  {
    company: "Microvers (Volunteer)",
    role: "Mentor & Frontend Developer",
    period: "Jun 2021 - Dec 2022",
    bullets: [
      "Mentored junior web developers, supporting their growth in frontend development through code reviews, pair programming, and technical guidance.",
      "Provided consistent support and accountability, helping learners stay motivated and improve program completion rates.",
    ],
    initial: "M",
    logo: MicroverseLogo,
  },
  {
    company: "Freelance",
    role: "Product Designer & Developer",
    period: "Jan 2022 - Dec 2022",
    bullets: [
      "Delivered custom web solutions and led entire project lifecycles from conception to delivery, ensuring client satisfaction.",
      "Applied creative problem-solving to enhance project functionality and user experience.",
    ],
    initial: "F",
    logo: null,
  },
];

type ProjectItem = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  imgSrc: string;
};

export const projects: ProjectItem[] = [
  {
    num: "00",
    title: "Agroplanner",
    description:
      "Farm planning platform that uses intelligent insights to help farmers manage crops, schedules, and decisions effectively.",
    tags: [
      "React.js",
    "TypeScript",
    "Node.js",
    "OpenAI API",
    "Shadcn UI",
    "Tailwind CSS",
    "API",
    ],
    url: "https://agro-planner-v1.vercel.app",
    imgSrc: AgroplannerImg,
  },
  {
    num: "01",
    title: "AIMS Cooperative Hub",
    description:
      "A platform for farm cooperatives to manage and track thousands of farmers with real-time insights and reporting.",
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Chakra UI",
      "Tailwind CSS",
      "API",
      "Zod",
    ],
    url: "https://aims.lbhfarm.com/",
    imgSrc: AimsHubImg,
  },
  {
    num: "02",
    title: "BUKSOS Security Operations System",
    description:
      "Real-time incident reporting system with geolocation tracking to enable faster and more efficient security response.",
    tags: ["React.js", "TypeScript", "Supabase"],
    url: "https://security-alert-system.vercel.app/",
    imgSrc: BUKSOSImg,
  },
  {
    num: "03",
    title: "LbHfarm",
    description:
      "Official agrotech platform showcasing input financing, agronomy support, and market access for smallholder farmers.",
    tags: ["React.js", "TypeScript", "Chakra UI", "Tailwind CSS"],
    url: "https://www.lbhfarm.com/",
    imgSrc: LbHfarmImg,
  },
  {
    num: "04",
    title: "Ecoprotin",
    description:
      "Corporate website for a climate-tech company converting organic waste into sustainable high-protein animal feed.",
    tags: ["React.js", "TypeScript", "Chakra UI", "Tailwind CSS"],
    url: "https://www.ecoprotin.com/",
    imgSrc: Ecoprotin,
  },
  {
    num: "05",
    title: "GBAM - Graffiti Basketball and Music",
    description:
      "Dynamic community platform promoting peace and youth engagement through sports, music, and culture.",
    tags: ["React.js", "Tailwind CSS", "Shadcn UI"],
    url: "https://gbam.ng/",
    imgSrc: GBAMImg,
  },
  {
    num: "06",
    title: "Previous Portfolio",
    description:
      "Responsive portfolio showcasing projects and frontend expertise with a focus on clean UI and modern design patterns.",
    tags: ["React.js", "Tailwind CSS", "Chakra UI"],
    url: "https://progress2002.vercel.app/",
    imgSrc: PreviousPortfolioImg,
  },
  {
    num: "07",
    title: "Product List with Cart",
    description:
      "Interactive product listing app with real-time cart management and seamless user experience.",
    tags: ["React.js", "Tailwind CSS"],
    url: "https://product-list-two-xi.vercel.app/",
    imgSrc: PRoductListImg,
  },
];
