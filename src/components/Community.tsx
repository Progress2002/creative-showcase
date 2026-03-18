import { motion } from "framer-motion";

const Community = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto py-20">
      <p className="section-label">Background</p>
      <h2 className="section-heading mb-10">Community & Education</h2>

      <motion.div
        className="flex gap-4 items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground text-sm font-medium shrink-0">
          B
        </div>
        <div>
          <h3 className="text-foreground font-medium">Bayero University, Kano</h3>
          <p className="text-sm text-muted-foreground mb-1">Community Engagement</p>
          <p className="text-sm text-muted-foreground">
            Co-Lead: Cowrywise@BUK & GDG (Google Developers Group)
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Community;
