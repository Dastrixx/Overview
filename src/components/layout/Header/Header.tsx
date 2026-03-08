import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";
import "./Header.css";

const navItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Навыки", href: "#skills" },
  { label: "SEO/Реклама", href: "#seo" },
  { label: "Проекты", href: "#projects" },
  { label: "Опыт", href: "#experience" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#home" className="site-logo">
          Amir.dev
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
