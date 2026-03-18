import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Zero-Star Therapy",
    description: "A satirical AI web application that flips the script on modern 'therapy-speak' by acting as a deadpan, brutally honest 'anti-therapist'.",
    tags: ["2026", "AI", "React 19", "Go"],
    url: "https://zerostar.xeuxdev.com/",
  },
  {
    num: "02",
    title: "MindEase",
    description: "A real-time AI mental health companion that provides accessible, culturally aware emotional support with streaming responses and crisis detection.",
    tags: ["2024 - Present", "AI", "React", "Node.js"],
    url: "https://mindease.xeuxdev.com/",
  },
  {
    num: "03",
    title: "Queen Mother's Universal Foundation",
    description: "Official website for QMUF, an NGO dedicated to community development, youth education, and sustainable support initiatives.",
    tags: ["2022 - Present", "NGO", "Web Design", "Community"],
    url: "https://qmuf.org/",
  },
  {
    num: "04",
    title: "QMUF Backend API",
    description: "Scalable backend architecture and administrative system powering the QMUF platform, designed for secure role-based access and efficient data management.",
    tags: ["2024 - Present", "NestJS", "Prisma", "PostgreSQL"],
    url: "https://qmuf.org/",
  },
  {
    num: "05",
    title: "Christmas Wish",
    description: "A seasonal platform for creating and sharing personalized Christmas messages. Features a custom message editor, pre-defined templates, and audio attachment capabilities.",
    tags: ["2024", "Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://xmas-wish.vercel.app/",
    github: "https://github.com/xeuxdev/christmas-wish",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto py-20">
      <p className="section-label">Portfolio</p>
      <h2 className="section-heading mb-10">Featured Work</h2>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.a
            key={project.num}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row group cursor-pointer block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <span className="project-number">{project.num}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-foreground font-medium group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 ml-4" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-xl">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-0">
                {project.tags.map((tag, j) => (
                  <span key={tag}>
                    <span className="tag">{tag}</span>
                    {j < project.tags.length - 1 && <span className="tag-separator">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
