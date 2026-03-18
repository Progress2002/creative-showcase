import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-muted-foreground font-semibold text-sm border border-border">
            TO
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
            Hi I'm Xeux
          </h1>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
          Frontend Developer with 4+ years of experience specializing in AI, Fintech, and Web3. I build pixel-perfect, scalable web applications with a focus on performance optimization and intuitive UX.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-border text-foreground text-sm hover:bg-secondary transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
