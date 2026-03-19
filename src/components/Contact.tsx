import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-3 md:px-16 lg:px-24 max-w-4xl mx-auto py-20 pb-32">
      <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-background/70 via-background/30 to-background/70 p-10 md:p-14 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative z-10 space-y-8">
          <div>
            <p className="section-label mb-2">Contact</p>
            <h2 className="text-3xl md:text-4xl font-serif italic text-foreground leading-tight">
              Let's build something together
            </h2>
          </div>

          <p className="text-muted-foreground max-w-md text-sm  leading-relaxed">
            I'm open to new opportunities — whether it's a contract, full-time
            role, or an interesting project. My inbox is always open.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:ezeamakachisom2002@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background">
              Say Hello
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="https://twitter.com/Progress_2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              @progress_2002
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
