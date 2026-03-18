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
        I'm currently partnering with SaaS and fintech teams on audits, design system work, and core product refreshes.
        Send a note with a short brief and timeline, and I'll reply within two business days.
      </motion.p>

      <div className="flex items-center gap-6">
        <a
          href="mailto:hello@progress.dev"
          className="flex items-center gap-1 text-foreground font-medium hover:text-foreground/80 transition-colors"
        >
          Say Hello
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <a
          href="https://x.com/progress_codes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          @progress_codes
        </a>
      </div>
    </section>
  );
};

export default Contact;


