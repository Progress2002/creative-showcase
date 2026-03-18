import { motion } from "framer-motion";

const experiences = [
  {
    company: "Gbikna Limited",
    role: "Lead Frontend Engineer",
    period: "July 2024 – Feb 2025",
    bullets: [
      "Directed the frontend redesign of a fintech administration platform and spearheaded crypto payment integrations.",
      "Enhanced system security through the implementation of a robust Role-Based Access Control (RBAC) framework.",
    ],
    initial: "G",
  },
  {
    company: "Dokto (Contract)",
    role: "Lead Frontend Engineer",
    period: "June 2024 – July 2025",
    bullets: [
      "Engineered a high-performance telehealth platform focusing on sub-second load times and optimized user experiences.",
      "Directed frontend architectural strategy and real-time data synchronization for a multi-disciplinary team.",
    ],
    initial: "D",
  },
  {
    company: "Schoolable HQ (YC W'19)",
    role: "Frontend Engineer",
    period: "Nov 2023 – June 2024",
    bullets: [
      "Spearheaded the development of administrative interfaces with advanced data visualization techniques.",
      "Collaborated on cross-functional architecture to ensure seamless service integration.",
    ],
    initial: "S",
  },
  {
    company: "Tranexx (Contract)",
    role: "Frontend Developer",
    period: "Jan 2024 – Mar 2024",
    bullets: [
      "Led the implementation of pixel-perfect marketing pages and a reusable design system.",
      "Integrated real-time content delivery APIs and contributed to the fintech dashboard.",
    ],
    initial: "T",
  },
  {
    company: "Collx",
    role: "Software Engineer",
    period: "Jan 2023 – Dec 2023",
    bullets: [
      "Implemented end-to-end event and account management solutions, optimizing page load speeds to under 3 seconds.",
      "Led feature implementation integrating third-party APIs for enhanced automation.",
    ],
    initial: "C",
  },
  {
    company: "Freelancer",
    role: "Frontend Developer",
    period: "Jan 2022 – Dec 2022",
    bullets: [
      "Delivered custom web solutions and led entire project lifecycles from conception to delivery.",
      "Applied creative problem-solving to enhance project functionality and user experience.",
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
              <p className="text-sm text-muted-foreground mb-2">{exp.role} • {exp.period}</p>
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
