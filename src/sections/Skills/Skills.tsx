import { useMemo, useState, type CSSProperties } from "react";
import "./Skills.css";

const skillsData = [
  {
    id: "react",
    name: "React",
    type: "UI Development",
    level: "Advanced",
    text: "Собираю масштабируемые интерфейсы, компоненты, сложные страницы и продуктовые сценарии.",
    tags: ["Hooks", "SPA", "Component Architecture"],
  },
  {
    id: "ts",
    name: "TypeScript",
    type: "Type Safety",
    level: "Advanced",
    text: "Использую строгую типизацию для предсказуемого поведения, удобной поддержки и чистого DX.",
    tags: ["Types", "Interfaces", "Generics"],
  },
  {
    id: "vite",
    name: "Vite",
    type: "Tooling",
    level: "Strong",
    text: "Работаю с быстрым dev-сервером, сборкой проекта, конфигами и оптимизацией разработки.",
    tags: ["Build", "Dev Server", "Config"],
  },
  {
    id: "antd",
    name: "Ant Design",
    type: "UI Library",
    level: "Advanced",
    text: "Собираю формы, таблицы, модалки, сложные админки и корпоративные интерфейсы.",
    tags: ["Table", "Form", "Modal"],
  },
  {
    id: "rhf",
    name: "React Hook Form",
    type: "Forms",
    level: "Strong",
    text: "Делаю производительные формы с контролем состояния, валидацией и сложными зависимостями.",
    tags: ["Controller", "Validation", "Performance"],
  },
  {
    id: "api",
    name: "REST API",
    type: "Integration",
    level: "Strong",
    text: "Интегрирую frontend с backend, обрабатываю запросы, данные, состояния загрузки и ошибки.",
    tags: ["Fetch", "Async", "Data Flow"],
  },
];

export default function Skills() {
  const [activeId, setActiveId] = useState(skillsData[0].id);
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const activeSkill = useMemo(
    () => skillsData.find((item) => item.id === activeId) ?? skillsData[0],
    [activeId]
  );

  const handleMove = (event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setSpot({ x, y });
  };

  return (
    <section id="skills" className="page-section skills">
      <div className="skills__bg" />
      <div className="skills__glow skills__glow--one" />
      <div className="skills__glow skills__glow--two" />

      <div className="skills__inner">
        <div className="container skills__container">
          <div className="skills__top">
            <span className="skills__label">Навыки</span>

            <h2 className="skills__title">
              Не просто стек,
              <span className="skills__titleAccent">
                а набор инструментов для сильных интерфейсов
              </span>
            </h2>
          </div>

          <div className="skills__layout">
            <div className="skills__list">
              {skillsData.map((skill, index) => {
                const isActive = skill.id === activeId;

                return (
                  <button
                    key={skill.id}
                    type="button"
                    className={`skillItem ${isActive ? "skillItem--active" : ""}`}
                    onMouseEnter={() => setActiveId(skill.id)}
                    onFocus={() => setActiveId(skill.id)}
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    <div className="skillItem__head">
                      <span className="skillItem__name">{skill.name}</span>
                      <span className="skillItem__level">{skill.level}</span>
                    </div>

                    <div className="skillItem__type">{skill.type}</div>
                    <p className="skillItem__text">{skill.text}</p>
                  </button>
                );
              })}
            </div>

            <div
              className="skillsPreview"
              onMouseMove={handleMove}
              style={
                {
                  "--spot-x": `${spot.x}%`,
                  "--spot-y": `${spot.y}%`,
                } as CSSProperties
              }
            >
              <div className="skillsPreview__shine" />

              <div className="skillsPreview__top">
                <span className="skillsPreview__badge">Active Skill</span>
                <span className="skillsPreview__mini">{activeSkill.level}</span>
              </div>

              <div className="skillsPreview__center">
                <div className="skillsPreview__orb">
                  <div className="skillsPreview__orbCore" />
                  <div className="skillsPreview__ring skillsPreview__ring--one" />
                  <div className="skillsPreview__ring skillsPreview__ring--two" />
                </div>

                <div className="skillsPreview__content">
                  <h3 className="skillsPreview__title">{activeSkill.name}</h3>
                  <p className="skillsPreview__subtitle">{activeSkill.type}</p>
                  <p className="skillsPreview__desc">{activeSkill.text}</p>

                  <div className="skillsPreview__tags">
                    {activeSkill.tags.map((tag) => (
                      <span key={tag} className="skillsPreview__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="skillsPreview__footer">
                <div className="skillsMetric">
                  <span className="skillsMetric__label">Фокус</span>
                  <strong className="skillsMetric__value">UI + Logic</strong>
                </div>

                <div className="skillsMetric">
                  <span className="skillsMetric__label">Подход</span>
                  <strong className="skillsMetric__value">Clean & Scalable</strong>
                </div>

                <div className="skillsMetric">
                  <span className="skillsMetric__label">Приоритет</span>
                  <strong className="skillsMetric__value">DX / UX</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
