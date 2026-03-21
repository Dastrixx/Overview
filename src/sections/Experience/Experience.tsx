import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import "./Experience.css";

const experience = [
  {
    id: 1,
    company: "ТОО «ISME»",
    role: "Frontend Developer",
    period: "Июнь 2020 — Июнь 2021",
    duration: "1 год 1 месяц",
    description:
      "Разработка интерфейсов, форм, таблиц и интеграций с API. Работа с клиентской частью продукта, аккуратной вёрсткой и логикой взаимодействия.",
    stack: ["JavaScript", "React", "REST API"],
  },
  {
    id: 2,
    company: "Holding Samgau",
    role: "Frontend Developer",
    period: "Ноябрь 2021 — Февраль 2023",
    duration: "1 год 4 месяца",
    description:
      "Поддержка и развитие клиентских веб-приложений. Формы, таблицы, UI-сценарии, улучшение пользовательского опыта и развитие внутренней логики интерфейсов.",
    stack: ["React", "SCSS", "Ant Design"],
  },
  {
    id: 3,
    company: "АО «Центр электронных финансов»",
    role: "Senior Frontend Developer",
    period: "Апрель 2023 — Январь 2026",
    duration: "2 года 10 месяцев",
    description:
      "Сложные frontend-системы, архитектура интерфейсов, производительность, большие формы, таблицы, бизнес-логика и развитие масштабных внутренних продуктов.",
    stack: ["React", "TypeScript", "Vite", "Ant Design"],
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState(experience[0].id);

  const activeItem = experience.find((item) => item.id === activeId) ?? null;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="experience" className="section-frame experience">
      <div className="experience__ambient experience__ambient--one" />
      <div className="experience__ambient experience__ambient--two" />

      <div className="container experience__container">
        <div className="experience__head">
          <p className="experience__eyebrow">Опыт</p>

          <h2 className="experience__title">
            От первых интерфейсов
            <br />к сложным продуктовым системам.
          </h2>

          <p className="experience__text">
            Формы, таблицы, бизнес-логика, производительность, аккуратный UI и развитие
            больших внутренних продуктов.
          </p>
        </div>

        <div className="experience__summary section-canon">
          <div className="experienceStat">
            <span className="experienceStat__value">5+</span>
            <span className="experienceStat__label">лет в разработке</span>
          </div>

          <div className="experienceStat">
            <span className="experienceStat__value">3</span>
            <span className="experienceStat__label">ключевые компании</span>
          </div>

          <div className="experienceStat">
            <span className="experienceStat__value">UI + Logic</span>
            <span className="experienceStat__label">главный фокус</span>
          </div>
        </div>

        <div className="experience__panel section-canon">
          <div className="experience__panelGlow" />

          <div className="experience__list section-canon__intro">
            {experience.map((item) => {
              const isActive = item.id === activeId;

              return (
                <motion.article
                  key={item.id}
                  className={`expCard ${isActive ? "expCard--active" : ""}`}
                  onClick={() => setActiveId(item.id)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="expCard__top">
                    <span className="expCard__period">{item.period}</span>

                    <span className="expCard__arrow">
                      <ArrowUpRight size={18} strokeWidth={2} />
                    </span>
                  </div>

                  <h3 className="expCard__company">{item.company}</h3>
                  <p className="expCard__role">{item.role}</p>
                  <span className="expCard__duration">{item.duration}</span>
                </motion.article>
              );
            })}
          </div>

          <div className="experience__detailsCol section-canon__body">
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div
                  key={activeItem.id}
                  className="experienceDetails"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="experienceDetails__card">
                    <button
                      type="button"
                      className="experienceDetails__close"
                      onClick={() => setActiveId(null)}
                      aria-label="Закрыть"
                    >
                      <X size={18} strokeWidth={2.2} />
                    </button>

                    <div className="experienceDetails__meta">
                      <span className="experienceBadge">{activeItem.duration}</span>
                      <span className="experienceBadge experienceBadge--soft">
                        Career step
                      </span>
                    </div>

                    <p className="experienceDetails__period">{activeItem.period}</p>

                    <h3 className="experienceDetails__company">{activeItem.company}</h3>

                    <p className="experienceDetails__role">{activeItem.role}</p>

                    <p className="experienceDetails__description">
                      {activeItem.description}
                    </p>

                    <div className="experienceDetails__stack">
                      {activeItem.stack.map((tech) => (
                        <span key={tech} className="experienceChip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
