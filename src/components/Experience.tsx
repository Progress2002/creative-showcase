import { motion } from "framer-motion";

const experiences = [
  {
    company: "Brightside Labs",
    role: "Lead Frontend Engineer",
    period: "Apr 2024 - Present",
    bullets: [
      "Own the web platform for a B2B AI copilot, guiding component architecture and pairing with design on accessibility reviews.",
      "Reduced dashboard load times from 3.2s to 1.4s by trimming bundle size, code-splitting routes, and caching read-heavy queries.",
    ],
    initial: "B",
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
  },
];

const Experience = () => {
  return (
    <section id="work" className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto py-20">
      <p className="section-label">Experience</p>
      <h2 className="section-heading mb-10">Work</h2>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="flex gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground text-sm font-medium shrink-0 mt-0.5">
              {exp.initial}
            </div>
            <div className="flex-1">
              <h3 className="text-foreground font-medium">{exp.company}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {exp.role} • {exp.period}
              </p>
              <ul className="space-y-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-muted-foreground/40 mt-0.5">-</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;


