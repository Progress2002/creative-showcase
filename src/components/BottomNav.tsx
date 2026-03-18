import { Home, Briefcase, FolderOpen, BookOpen } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: Briefcase, href: "#work", label: "Work" },
  { icon: FolderOpen, href: "#projects", label: "Projects" },
  {
    icon: FiGithub,
    href: "https://github.com/Progress2002",
    label: "GitHub",
    external: true,
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/progress-c-ezeamaka/",
    label: "LinkedIn",
    external: true,
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com/progress_dev",
    label: "Twitter",
    external: true,
  },
];

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
          title={item.label}>
          <item.icon className="w-4 h-4" />
        </a>
      ))}
    </nav>
  );
};

export default BottomNav;
