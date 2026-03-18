const skills = [
  "React.js", "Next.js", "TypeScript", "TailwindCSS", "Node.js",
  "PostgreSQL", "Prisma", "Motion", "GraphQL", "Zustand", "Firebase", "Redux", "Go",
];

const SkillsMarquee = () => {
  return (
    <section className="py-20">
      <div className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto mb-8">
        <p className="section-label">Stack</p>
        <h2 className="section-heading">Skills</h2>
      </div>

      <div className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto overflow-hidden">
        <div className="flex overflow-hidden group">
          <div className="skill-marquee group-hover:[animation-play-state:paused]">
            {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="whitespace-nowrap text-sm md:text-base text-muted-foreground font-medium px-4 py-2 rounded-full border border-border"
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
