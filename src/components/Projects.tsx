import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, List, LayoutGrid } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Zero-Star Therapy",
    description: "A satirical AI web application that flips the script on modern 'therapy-speak' by acting as a deadpan, brutally honest 'anti-therapist'.",
    tags: ["AI", "React 19", "Go", "Tailwind CSS"],
    year: "2026",
    url: "https://zerostar.xeuxdev.com/",
  },
  {
    num: "02",
    title: "MindEase",
    description: "A real-time AI mental health companion that provides accessible, culturally aware emotional support with streaming responses and crisis detection.",
    tags: ["AI", "React", "Node.js", "Socket.IO"],
    year: "2024 - Present",
    url: "https://mindease.xeuxdev.com/",
  },
  {
    num: "03",
    title: "Queen Mother's Universal Foundation",
    description: "Official website for QMUF, an NGO dedicated to community development, youth education, and sustainable support initiatives.",
    tags: ["NGO", "Web Design", "Community"],
    year: "2022 - Present",
    url: "https://qmuf.org/",
  },
  {
    num: "04",
    title: "QMUF Backend API",
    description: "Scalable backend architecture and administrative system powering the QMUF platform, designed for secure role-based access and efficient data management.",
    tags: ["NestJS", "Prisma", "PostgreSQL"],
    year: "2024 - Present",
    url: "https://qmuf.org/",
  },
  {
    num: "05",
    title: "Christmas Wish",
    description: "A seasonal platform for creating and sharing personalized Christmas messages. Features a custom message editor, pre-defined templates, and audio attachment capabilities.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    year: "2024",
    url: "https://xmas-wish.vercel.app/",
  },
];

const Projects = () => {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="section-label">Portfolio</p>
          <h2 className="section-heading">Featured Work</h2>
        </div>
        <div className="flex items-center bg-secondary rounded-xl p-1 border border-border">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-lg transition-colors ${view === "list" ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            title="List view"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-lg transition-colors ${view === "grid" ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            title="Grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {view === "list" ? (
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              className="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-secondary/60 border-b border-border flex items-center justify-center">
                <span className="text-muted-foreground/40 text-sm font-mono">{project.title}</span>
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-foreground font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{project.year}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
