import LbHLogo from "@/assets/logos/LBH-logo.webp";
import Virtual_E_Logo from "@/assets/logos/Virtual-E.webp";
import MicroverseLogo from "@/assets/logos/microvers.webp";

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
    period: "Dec 2023 - Present",
    bullets: [
      "Redesigning and continuously improving the company's website while restructuring the frontend architecture to enhance performance, scalability, and overall user experience.",
      "Actively contributing to the development of web applications, including DESApp, core platform features, a bulk CSV upload system for farmer profiling, and a Credit System for managing loans and resource allocation.",
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
