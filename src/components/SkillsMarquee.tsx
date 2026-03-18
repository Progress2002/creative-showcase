import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Braces,
  Database,
  Cloud,
  CircuitBoard,
  Atom,
  Layers,
  Cpu,
  PenSquare,
  Server,
  Palette,
} from "lucide-react";

const skills: { label: string; icon: LucideIcon }[] = [
  { label: "React.js", icon: Code2 },
  { label: "TypeScript", icon: Braces },
  { label: "Node.js", icon: Server },
  { label: "Prisma", icon: CircuitBoard },
  { label: "PostgreSQL", icon: Database },
  { label: "Tailwind CSS", icon: Palette },
  { label: "Zustand", icon: Atom },
  { label: "GraphQL", icon: Cloud },
  { label: "Redux", icon: Atom },
  { label: "React Native", icon: Cpu },
  { label: "Jest", icon: PenSquare },
  { label: "Electron", icon: Atom },
];

const SkillsMarquee = () => {
  const marqueeItems = Array.from({ length: 4 }, () => skills).flat();

  return (
    <section className="py-16">
      <div className="px-6 md:px-16 lg:px-24 max-w-4xl mx-auto mb-8">
        <p className="section-label">Stack</p>
        <h2 className="section-heading">Skills</h2>
      </div>

      <div className="relative px-6 md:px-16 lg:px-24 max-w-4xl mx-auto">
        <div className="pointer-events-none absolute inset-y-4 left-6 w-32 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-4 right-6 w-32 bg-gradient-to-l from-background via-background/80 to-transparent" />

        <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-background/40 via-background/10 to-background/40  backdrop-blur-sm group">
          <div className="skill-marquee group-hover:[animation-play-state:paused]">
            {marqueeItems.map(({ label, icon: Icon }, i) => (
              <span key={`${label}-${i}`} className="skill-pill">
                <Icon
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.8}
                />
                <span className="whitespace-nowrap">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
