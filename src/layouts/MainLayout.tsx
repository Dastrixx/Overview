import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <a href="#home" className="site-logo">
            My CV
          </a>
          <nav className="site-nav" aria-label="Основная навигация">
            <a href="#about">О себе</a>
            <a href="#skills">Навыки</a>
            <a href="#experience">Опыт</a>
            <a href="#seo">SEO/Реклама</a>
            <a href="#projects">Проекты</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div className="container">
          <p>© 2026 My CV</p>
        </div>
      </footer>
    </div>
  );
}
