import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

export default function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <div className="site-logo">My App</div>
          <nav className="site-nav">
            <a href="/">Главная</a>
            <a href="/about">О нас</a>
            <a href="/contacts">Контакты</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div className="container">
          <p>© 2026 My App</p>
        </div>
      </footer>
    </div>
  );
}
