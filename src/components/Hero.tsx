import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Hero = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-muted-foreground font-semibold text-sm border border-border">
            PR
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
            Hi, I'm Progress
          </h1>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
          Frontend engineer focused on crafting resilient product experiences for SaaS teams. I translate complex
          requirements into clear UX, ship performant React interfaces, and partner closely with design and platform teams.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-border text-foreground text-sm hover:bg-secondary transition-colors"
          >
            View Projects
          </a>
          <button
            onClick={() => setContactOpen(true)}
            className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Contact
          </button>
        </div>
      </motion.div>

      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="text-foreground text-xl">Let's Connect</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Reach out for contract collaborations, full-time roles, or speaking engagements.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <a
              href="mailto:hello@progress.dev"
              className="flex items-center gap-3 text-foreground hover:text-foreground/80 transition-colors"
            >
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>hello@progress.dev</span>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;


