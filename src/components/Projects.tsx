import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, List, LayoutGrid } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "InsightFlow Analytics",
    description:
      "Self-serve analytics workspace that lets customer success teams build dashboards without touching SQL, complete with role-based sharing and metrics alerts.",
    tags: ["React", "TypeScript", "Vite", "Supabase"],
    year: "2025",
    url: "https://progress.dev/insightflow",
  },
  {
    num: "02",
    title: "Atlas Lending",
    description:
      "Modernized the lending experience for a regional bank with a responsive borrower portal, document tracking, and an internal review console.",
    tags: ["Fintech", "Design Systems", "Testing"],
    year: "2024",
    url: "https://progress.dev/atlas",
  },
  {
    num: "03",
    title: "Northwind Commerce",
    description:
      "Composable storefront starter for brands launching limited collections. Includes product drops, waitlists, and content blocks managed in headless CMS.",
    tags: ["Next.js", "CMS", "Tailwind"],
    year: "2023",
    url: "https://progress.dev/northwind",
  },
  {
    num: "04",
    title: "FieldGuide",
    description:
      "Internal knowledge base that syncs with Slack and captures product decisions. Built opinionated editor blocks and granular search filters.",
    tags: ["Docs", "React Query", "Elasticsearch"],
    year: "2024",
    url: "https://progress.dev/fieldguide",
  },
  {
    num: "05",
    title: "Pulse UI Kit",
    description:
      "A production-ready UI kit for fast-moving marketing teams. Includes themable tokens, 40+ components, and paired Figma styles.",
    tags: ["Design", "Storybook", "Accessibility"],
    year: "2022",
    url: "https://progress.dev/pulse",
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
                      {j < project.tags.length - 1 && <span className="tag-separator">•</span>}
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
              <div className="aspect-video bg-secondary/60 border-b border-border flex items-center justify-center">
                <span className="text-muted-foreground/40 text-sm font-mono">{project.title}</span>
              </div>

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
