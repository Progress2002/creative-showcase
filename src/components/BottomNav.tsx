import { Home, Briefcase, FolderOpen, BookOpen, Github, Linkedin } from "lucide-react";

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: Briefcase, href: "#work", label: "Work" },
  { icon: FolderOpen, href: "#projects", label: "Projects" },
  { icon: BookOpen, href: "#blog", label: "Blog" },
  { icon: Github, href: "https://github.com/progress-dev", label: "GitHub", external: true },
  { icon: Linkedin, href: "https://www.linkedin.com/in/progress-okoro", label: "LinkedIn", external: true },
];

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const BottomNav = () => {
  return (
    <nav className="nav-dock">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="nav-dock-item"
          title={item.label}
        >
          <item.icon className="w-4 h-4" />
        </a>
      ))}
      <a
        href="https://x.com/progress_codes"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-dock-item"
        title="X / Twitter"
      >
        <XIcon />
      </a>
    </nav>
  );
};

export default BottomNav;


