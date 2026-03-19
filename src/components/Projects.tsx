import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, List, LayoutGrid } from "lucide-react";
import ProfilePic from "@/assets/images/me.jpeg";
import LbHfarmImg from "@/assets/images/lbH_Website.webp";
import BUKSOSImg from "@/assets/images/BUKSOS.webp";
import GBAMImg from "@/assets/images/GBAM.webp";
import Ecoprotin from "@/assets/images/ecoprotin.webp";

const projects = [
  {
    num: "01",
    title: "LbHfarm",
    description:
      "Official website of LbH, an  Agrotech cooporative that empowers smallholder farmers across Africa by providing crucial support services, including input financing, agronomy guidance, and access to ready markets upon harvest. ",
    tags: ["React.js", "TypeScript", "Chakra UI", "Tailwind CSS"],
    url: "https://www.lbhfarm.com/",
    imgSrc: LbHfarmImg,
  },
  {
    num: "02",
    title: "BUKSOS Security Operations System",
    description:
      "A lightweight incident reporting web app for BUK that allows students to report security concerns with precise location data via manual input or geolocation. Security officers can review reports, receive alerts, and navigate to incident locations through Google Maps for faster response.",
    tags: ["React.js", "TypeScript", "Supabase"],
    url: "https://security-alert-system.vercel.app/",
    imgSrc: BUKSOSImg,
  },
  {
    num: "03",
    title: "GBAM - Graffiti Basketball, and Music",
    description:
      "Official website for GBAM, a platform that uses the power of sports, entertainment, and communication to create opportunities, promote peace, and strengthen ties across communities.",
    tags: ["React.js", "Tailwind CSS", "Shadcn UI"],
    url: "https://gbam.ng/",
    imgSrc: GBAMImg,
  },
  {
    num: "04",
    title: "Ecoprotin",
    description:
      "Official website for Ecoprotin, a company that transforms organic waste into high-protein, eco-friendly feed for poultry, fish, and pigs, thus, creating climate-smart value chains and sustainable farming systems.",
    tags: ["React.js", "TypeScript", "Chakra UI", "Tailwind CSS"],
    url: "https://www.ecoprotin.com/",
    imgSrc: Ecoprotin,
  },
];

const Projects = () => {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <section
      id="projects"
      className="px-6 md:px-16 lg:px-24 max-w-4xl mx-auto py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="section-label">Portfolio</p>
          <h2 className="section-heading">Featured Work</h2>
        </div>
        <div className="flex items-center bg-secondary rounded-xl p-1 border border-border">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-lg transition-colors ${view === "list" ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            title="List view">
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-lg transition-colors ${view === "grid" ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            title="Grid view">
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {view === "list" ? (
        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              className="project-row  block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}>
              <div className="flex gap-5 md:gap-10 items-start">
                <span className="project-number">{project.num}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-foreground/80 font-medium transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground hover:text-foreground/80 transition-colors " />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-0">
                    {project.tags.map((tag, j) => (
                      <span key={tag}>
                        <span className="tag">{tag}</span>
                        {j < project.tags.length - 1 && (
                          <span className="tag-separator">.</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
              transition={{ delay: i * 0.08, duration: 0.5 }}>
              <div className="aspect-vide bg-secondary/60 border-b border-border flex items-center justify-center">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-44 w-full"
                />
              </div>

              <div className="px-6 py-2 flex flex-col flex-1">
                <h3 className="text-foreground font-semibold text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-xl border border-border bg-foreground text-background  text-sm font-medium hover:bg-foreground/90 transition-colors">
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
