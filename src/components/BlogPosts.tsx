import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    num: "01",
    title: "Shipping Design Systems Without Slowing the Roadmap",
    excerpt: "Playbook for pairing foundations work with product delivery so stakeholders see value every sprint.",
    date: "March 3, 2026",
    readTime: "6 min read",
    tags: ["Design Systems", "Team Process"],
    url: "https://progress.dev/blog/design-systems-roadmap",
  },
  {
    num: "02",
    title: "Reducing Bundle Size in a React 18 SaaS",
    excerpt: "Profiling, message splitting, and shared dependency strategies that cut 47% from the initial payload.",
    date: "January 20, 2026",
    readTime: "8 min read",
    tags: ["Performance", "React"],
    url: "https://progress.dev/blog/react-performance",
  },
  {
    num: "03",
    title: "What We Learned Pairing Designers and Engineers Each Tuesday",
    excerpt: "Our small ritual for pairing on animations, review checklists, and writing more inclusive copy.",
    date: "October 12, 2025",
    readTime: "5 min read",
    tags: ["Collaboration", "Culture"],
    url: "https://progress.dev/blog/pairing-rituals",
  },
  {
    num: "04",
    title: "Turning Customer Interviews Into Product Experiments",
    excerpt: "A repeatable loop for synthesizing interviews into measurable hypotheses your PM will actually back.",
    date: "June 7, 2025",
    readTime: "7 min read",
    tags: ["Product", "Research"],
    url: "https://progress.dev/blog/customer-research-loop",
  },
  {
    num: "05",
    title: "A Practical Guide to Animations in Framer Motion",
    excerpt: "How to move beyond fade-and-scale with staggered timelines, reduced motion fallbacks, and viewport triggers.",
    date: "April 22, 2024",
    readTime: "9 min read",
    tags: ["Framer Motion", "UI"],
    url: "https://progress.dev/blog/framer-motion-guide",
  },
];

const BlogPosts = () => {
  return (
    <section id="blog" className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="section-label">Writing</p>
          <h2 className="section-heading">Selected Posts</h2>
        </div>
        <a
          href="https://progress.dev/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          All posts
        </a>
      </div>

      <div className="space-y-0">
        {posts.map((post, i) => (
          <motion.a
            key={post.num}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row group cursor-pointer block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <span className="project-number">{post.num}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-foreground font-medium group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 ml-4 hidden md:block" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-xl">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-0">
                <span className="tag">{post.date}</span>
                <span className="tag-separator">•</span>
                <span className="tag">{post.readTime}</span>
                <span className="tag-separator">•</span>
                {post.tags.map((tag, j) => (
                  <span key={tag}>
                    <span className="tag">{tag}</span>
                    {j < post.tags.length - 1 && <span className="tag-separator">•</span>}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;


