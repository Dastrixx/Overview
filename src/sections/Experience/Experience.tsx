import "./Experience.css";

const experience = [
  {
    period: "2024 — 2026",
    role: "Frontend Developer",
    company: "Компания / Проект",
    description: "Разработка интерфейсов, таблиц, форм и интеграций с API.",
  },
  {
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "Компания / Проект",
    description: "Поддержка и развитие клиентской части веб-приложений.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Опыт</h2>

        <div className="experience__list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="experience-card">
              <div className="experience-card__period">{item.period}</div>
              <h3 className="experience-card__role">{item.role}</h3>
              <p className="experience-card__company">{item.company}</p>
              <p className="experience-card__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
