import { motion } from "framer-motion";
import BrightsideLogo from "@/assets/logos/brightside.svg";
import LumenpayLogo from "@/assets/logos/lumenpay.svg";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  initial: string;
  logo?: string | null;
};

const experiences: ExperienceItem[] = [
  {
    company: "Brightside Labs",
    role: "Lead Frontend Engineer",
    period: "Apr 2024 - Present",
    bullets: [
      "Own the web platform for a B2B AI copilot, guiding component architecture and pairing with design on accessibility reviews.",
      "Reduced dashboard load times from 3.2s to 1.4s by trimming bundle size, code-splitting routes, and caching read-heavy queries.",
    ],
    initial: "B",
    logo: BrightsideLogo,
  },
  {
    company: "LumenPay",
    role: "Senior Product Engineer",
    period: "Jan 2023 - Mar 2024",
    bullets: [
      "Rebuilt the payments console in React and Tailwind, integrating audit trails and fine-grained permissions for ops teams.",
      "Partnered with backend to introduce contract tests and a shared GraphQL schema, eliminating a class of regression bugs.",
    ],
    initial: "L",
    logo: LumenpayLogo,
  },
  {
    company: "Northwind Studio",
    role: "Frontend Engineer",
    period: "Jun 2021 - Dec 2022",
    bullets: [
      "Delivered marketing sites and web apps for seed-stage startups, often embedded directly with founding teams.",
      "Set up CI pipelines, Playwright smoke suites, and reusable UI primitives so small teams could scale safely.",
    ],
    initial: "N",
    logo: null,
  },
  {
    company: "Freelance",
    role: "Product Designer & Developer",
    period: "2019 - 2021",
    bullets: [
      "Shipped end-to-end brand and web projects for agencies, from information architecture to responsive implementation.",
      "Provided retainers to iterate on conversion experiments and interpret product analytics for non-technical stakeholders.",
    ],
    initial: "F",
    logo: null,
  },
];

const Experience = () => {
  return (
    <section
      id="work"
      className="px-6 md:px-16 lg:px-24 max-w-4xl mx-auto py-20">
      <p className="section-label">Experience</p>
      <h2 className="section-heading mb-10">Work</h2>

      <div className="relative">
        <span
          className="absolute left-6 top-0 bottom-0 w-px bg-border/60"
          aria-hidden="true"
        />
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative flex gap-6 pl-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}>
              <div className="absolute left-0 top-0 flex h-full w-10 items-start justify-center">
                <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-border bg-card shadow-[0_6px_20px_rgba(0,0,0,0.35)]">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="size-10 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-foreground">
                      {exp.initial}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-medium">{exp.company}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {exp.role} • {exp.period}
                </p>
                <ul className="space-y-1">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-muted-foreground/40 mt-0.5">-</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
