const skills = [
  "React.js", "Next.js", "TypeScript", "TailwindCSS", "Node.js",
  "PostgreSQL", "Prisma", "Motion", "GraphQL", "Zustand", "Firebase", "Redux", "Go",
];

const SkillsMarquee = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto mb-8">
        <p className="section-label">Stack</p>
        <h2 className="section-heading">Skills</h2>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <div className="skill-marquee">
            {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="whitespace-nowrap text-lg md:text-xl text-muted-foreground/70 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
