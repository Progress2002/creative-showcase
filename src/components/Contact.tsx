import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto py-20 pb-32">
      <p className="section-label">Contact</p>
      <h2 className="section-heading mb-8">Let's build something together</h2>

      <motion.p
        className="text-muted-foreground max-w-lg mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        I'm open to new opportunities — whether it's a contract, full-time role, or an interesting project. My inbox is always open.
      </motion.p>

      <div className="flex items-center gap-6">
        <a
          href="mailto:tochukwujohn24@gmail.com"
          className="flex items-center gap-1 text-foreground font-medium hover:text-foreground/80 transition-colors"
        >
          Say Hello
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <a
          href="https://x.com/xeuxdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          @xeuxdev
        </a>
      </div>
    </section>
  );
};

export default Contact;
