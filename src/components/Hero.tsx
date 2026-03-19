import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ProfilePic from "@/assets/images/me.jpeg";

const headingText = "Hi, I'm Progress";

const Hero = () => {
  const [typedHeading, setTypedHeading] = useState("");
  const [contactOpen, setContactOpen] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "-16% 0px",
  });

  useEffect(() => {
    if (!headingInView) return;

    setTypedHeading(" ");
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex += 1;
      setTypedHeading(headingText.slice(0, currentIndex));
      if (currentIndex === headingText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [headingInView]);

  return (
    <section
      id="home"
      className="min-h-[70vh] md:min-h-[70vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}>
        <div className="flex items-center gap-4 mb-8">
          <span
            data-slot="avatar"
            className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-20 w-20 border-2 border-border">
            <img
              data-slot="avatar-image"
              className="aspect-square size-full object-cover rounded-full"
              alt="Profile"
              src={ProfilePic}
            />
          </span>
          <h1
            ref={headingRef}
            className="font-semibold drop-shadow-sm text-left text-2xl leading-none tracking-wider sm:text-2xl md:text-2xl lg:text-3xl">
            {typedHeading}
          </h1>
        </div>

        <p className="text-lg  text-muted-foreground max-w-2xl leading-relaxed mb-8">
          Frontend Engineer passionate about building scalable, high-performance
          web applications. I turn complex ideas into seamless, user-friendly
          experiences and collaborate closely with teams to deliver impactful
          digital products.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">
            View My Work
          </a>
          <button
            onClick={() => setContactOpen(true)}
            className="px-4 py-2 rounded-full border border-border text-foreground text-sm hover:bg-secondary transition-colors">
            Contact Me
          </button>
        </div>
      </motion.div>

      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="text-foreground text-xl">
              Let's Connect
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Reach out for contract collaborations, full-time roles, or
              speaking engagements.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <a
              href="mailto:ezeamakachisom2002@gmail.com"
              className="flex items-center gap-3 text-foreground hover:text-foreground/80 transition-colors">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>ezeamakachisom2002@gmail.com</span>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
