const skills = [
  "React / TypeScript",
  "JavaScript (ESNext)",
  "HTML / CSS / Adaptive UI",
  "REST API integration",
  "A/B testing and conversion UX",
  "Performance & Accessibility",
];

const projects = [
  {
    title: "Portfolio Landing",
    stack: "React, Vite, CSS",
    description:
      "Лендинг-портфолио с адаптивной версткой, темной темой, SEO-мета и подготовкой под рекламу.",
  },
  {
    title: "Lead Form Promo",
    stack: "React, Analytics",
    description:
      "Промо-страница с фокусом на лидогенерацию, событиями аналитики и оптимизированной формой заявки.",
  },
  {
    title: "UI Components",
    stack: "Storybook, CSS Modules",
    description: "Набор переиспользуемых UI-компонентов с документацией и примерами.",
  },
];

export default function Home() {
  return (
    <>
      <section id="home" className="section hero">
        <div className="container hero__content scroll-reveal is-visible">
          <p className="hero__eyebrow">Frontend developer</p>
          <h1>Создаю интерфейсы, которые выглядят хорошо и приводят заявки.</h1>
          <p className="hero__subtitle">
            CV-страница с акцентом на реальные результаты: скорость, UX, SEO для рекламы и
            конверсию лендингов.
          </p>
          <div className="hero__actions">
            <a className="hero__cta" href="#projects">
              Смотреть проекты
            </a>
            <a className="hero__cta hero__cta--ghost" href="#contacts">
              Связаться
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2>Ключевые навыки</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article
                key={skill}
                className="skill-card scroll-reveal is-visible"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {skill}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="seo" className="section">
        <div className="container seo-box scroll-reveal is-visible">
          <h2>SEO и реклама</h2>
          <p>
            Подготавливаю страницы под рекламный трафик: корректные метатеги, OpenGraph,
            семантическая структура, высокая скорость загрузки и ясные CTA для роста конверсии.
          </p>
          <ul className="seo-list">
            <li>Техническое SEO для лендингов и CV-сайтов.</li>
            <li>Оптимизация Core Web Vitals.</li>
            <li>Подготовка страниц к запуску платной рекламы.</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2>Проекты</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card scroll-reveal is-visible"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3>{project.title}</h3>
                <p className="project-card__stack">{project.stack}</p>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="section">
        <div className="container contact-box scroll-reveal is-visible">
          <h2>Контакты</h2>
          <p>
            Email: <a href="mailto:you@example.com">you@example.com</a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/your-profile" target="_blank" rel="noreferrer">
              @your-profile
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
