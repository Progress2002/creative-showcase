import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Community from "@/components/Community";
import SkillsMarquee from "@/components/SkillsMarquee";
import Contact from "@/components/Contact";
import BottomNav from "@/components/BottomNav";
import { meteorTrails } from "@/constant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 z-0">
        {meteorTrails.map((trail, index) => (
          <span
            key={index}
            className="pointer-events-none absolute h-0.5 w-0.5 -translate-y-1/2 rotate-[215deg] animate-meteor opacity-0 bg-gray-600 shadow-[0_0_18px_rgba(255,255,255,0.8)] mix-blend-screen"
            style={{
              top: trail.top,
              left: trail.left,
              animationDelay: trail.delay,
              animationDuration: trail.duration,
            }}>
            <span className="absolute top-1/2 z-10 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-gray-400 via-white/60 to-transparent blur-[1px]" />
          </span>
        ))}
      </div>
      <Hero />
      <Projects />
      <Experience />
      <Community />
      <SkillsMarquee />
      <Contact />
      <BottomNav />
    </div>
  );
};

export default Index;
