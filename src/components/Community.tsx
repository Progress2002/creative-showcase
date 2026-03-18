import { motion } from "framer-motion";

const Community = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 max-w-4xl mx-auto py-16">
      <p className="section-label">Background</p>
      <h2 className="section-heading mb-10">Community & Education</h2>

      <motion.div
        className="flex gap-4 items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        <div>
          <h3 className="text-foreground font-medium">
            Bayero University, Kano
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            B.Sc. Computer Science, 2015 - 2019
          </p>

          <h3 className="text-foreground font-medium">Community Engagement</h3>
          <p className="text-sm text-muted-foreground">
            Co-Lead: GDG (Google Developers Group)
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Community;
