import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Community from "@/components/Community";
import SkillsMarquee from "@/components/SkillsMarquee";
import BlogPosts from "@/components/BlogPosts";
import Contact from "@/components/Contact";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Experience />
      <Community />
      <SkillsMarquee />
      <BlogPosts />
      <Contact />
      <BottomNav />
    </div>
  );
};

export default Index;
