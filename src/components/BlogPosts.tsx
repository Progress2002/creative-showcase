import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    num: "01",
    title: "How I Built an Anti-Therapist AI to Tell People to \"Go Get a Job\"",
    excerpt: "A deep dive into the architecture, prompt engineering, and sheer audacity of building an AI product designed to actively despise its users.",
    date: "February 27, 2026",
    readTime: "7 min read",
    tags: ["AI", "Go"],
    url: "https://www.xeuxdev.com/blog/building-zero-star-therapy",
  },
  {
    num: "02",
    title: "MindEase: Building an AI-Powered Mental Health Support Platform",
    excerpt: "A comprehensive look at designing, architecting, and deploying a real-time therapeutic chatbot with crisis detection.",
    date: "December 2, 2025",
    readTime: "12 min read",
    tags: ["AI", "Architecture"],
    url: "https://www.xeuxdev.com/blog/mindease-ai-mental-health-platform",
  },
  {
    num: "03",
    title: "Christmas Wish: Building a Festive Digital Card Platform With Next.js",
    excerpt: "How I built a digital Christmas card platform using Next.js, allowing anyone to send beautifully crafted greetings.",
    date: "December 25, 2023",
    readTime: "5 min read",
    tags: ["Next.js", "TypeScript"],
    url: "https://www.xeuxdev.com/blog/building-christmas-wish-platform",
  },
  {
    num: "04",
    title: "Architecting a Resilient and Secure Enterprise Backend",
    excerpt: "A deep dive into architectural design systems, data modeling strategies, and core engineering principles for enterprise backends.",
    date: "October 10, 2024",
    readTime: "8 min read",
    tags: ["Architecture", "Backend"],
    url: "https://www.xeuxdev.com/blog/architecting-resilient-secure-enterprise-backend",
  },
  {
    num: "05",
    title: "TypeScript Patterns I Reach For Every Day in React",
    excerpt: "After 4+ years of TypeScript in production React codebases, these are the patterns I install on day one of every new project.",
    date: "May 12, 2024",
    readTime: "9 min read",
    tags: ["TypeScript", "React"],
    url: "https://www.xeuxdev.com/blog/typescript-patterns-react",
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
          href="https://www.xeuxdev.com/blog"
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
                <span className="tag-separator">·</span>
                <span className="tag">{post.readTime}</span>
                <span className="tag-separator">·</span>
                {post.tags.map((tag, j) => (
                  <span key={tag}>
                    <span className="tag">{tag}</span>
                    {j < post.tags.length - 1 && <span className="tag-separator">·</span>}
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
