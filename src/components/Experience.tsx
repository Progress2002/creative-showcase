import { experiences } from "@/constant";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="work"
      className="px-6 md:px-16 lg:px-24 max-w-4xl mx-auto py-20">
      <p className="section-label">Experience</p>
      <h2 className="section-heading mb-10">Work</h2>

      <div className="relative">
        <span
          className="absolute left-5 top-0 bottom-0 w-px bg-border/90"
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
                <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-border bg-card  shadow-[0_6px_20px_rgba(0,0,0,0.35)] overflow-hidden">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="size-10 object-cover bg-gray-50 "
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
                <h3 className="text-foreground text-2xl font-semibold">
                  {exp.company}
                </h3>
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
