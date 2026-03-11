import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiHtml5,
  SiCss,
  SiGit,
  SiAntdesign,
  SiNodedotjs,
  SiFigma,
  SiRedux,
  SiSass,
  SiWebpack,
  SiTailwindcss,
  SiPostman,
  SiFirebase,
  SiGithub,
  SiAxios,
  SiMui,
  SiEslint,
} from "react-icons/si";
import "./Header.css";

const navItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Навыки", href: "#skills" },
  { label: "Опыт", href: "#experience" },
  { label: "Контакты", href: "#contacts" },
];

const icons = [
  SiReact,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiHtml5,
  SiCss,
  SiGit,
  SiAntdesign,
  SiNodedotjs,
  SiFigma,
  SiRedux,
  SiSass,
  SiWebpack,
  SiTailwindcss,
  SiPostman,
  SiFirebase,
  SiGithub,
  SiAxios,
  SiMui,
  SiEslint,
];

function createFlowIcons(total: number) {
  const layers = ["front", "mid", "back"];
  const sizes = ["sm", "md", "lg"];

  return Array.from({ length: total }, (_, index) => {
    const Icon = icons[index % icons.length];

    return {
      id: `flow-${index}`,
      Icon,
      x: `${index * 5.2}%`,
      y: `${6 + ((index * 11) % 82)}%`,
      rotate: `${((index * 17) % 26) - 13}deg`,
      driftY: `${((index * 9) % 16) - 8}px`,
      duration: `${24 + (index % 8) * 2.5}s`,
      delay: `${-(index * 1.35)}s`,
      layer: layers[index % layers.length],
      size: sizes[index % sizes.length],
    };
  });
}

export default function Header() {
  const [iconCount, setIconCount] = useState(56);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateIconCount = () => {
      if (window.innerWidth <= 520) {
        setIconCount(20);
        return;
      }

      if (window.innerWidth <= 768) {
        setIconCount(20);
        return;
      }

      if (window.innerWidth <= 992) {
        setIconCount(32);
        return;
      }

      setIconCount(56);
    };

    updateIconCount();
    window.addEventListener("resize", updateIconCount);

    return () => window.removeEventListener("resize", updateIconCount);
  }, []);

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnDesktop);
    return () => window.removeEventListener("resize", closeMenuOnDesktop);
  }, []);

  const flowIcons = useMemo(() => createFlowIcons(iconCount), [iconCount]);

  return (
    <header className="site-header">
      <div className="site-header__flow" aria-hidden="true">
        {flowIcons.map((item) => {
          const Icon = item.Icon;

          return (
            <span
              key={item.id}
              className={`site-header__floatIcon site-header__floatIcon--${item.layer} site-header__floatIcon--${item.size}`}
              style={{
                "--x-start": item.x,
                "--y": item.y,
                "--rotate": item.rotate,
                "--driftY": item.driftY,
                "--duration": item.duration,
                "--delay": item.delay,
              }}
            >
              <Icon />
            </span>
          );
        })}
      </div>

      <div className="container site-header__inner">
        <a href="#home" className="site-logo">
          Amir.dev
        </a>

        <button
          type="button"
          className={`site-menuButton ${isMobileMenuOpen ? "site-menuButton--open" : ""}`}
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className={`site-nav ${isMobileMenuOpen ? "site-nav--open" : ""}`}
          aria-label="Основная навигация"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-nav__link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__toggle">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
