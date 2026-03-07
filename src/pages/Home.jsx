const skills = [
  "React / TypeScript / JavaScript (ESNext)",
  "Проектирование сложных UI и бизнес-логики",
  "Финансовые расчёты и формульные зависимости",
  "Многоуровневые иерархические таблицы",
  "Динамические формы и взаимозависимые поля",
  "Оптимизация рендеринга и производительности",
  "Рефакторинг legacy-кода и архитектурные решения",
  "Интеграции REST API и трансформация данных",
  "Ролевая модель доступа и бизнес-процессы",
];

const projects = [
  {
    title: "Финансовый модуль госплатформы",
    stack: "React, TypeScript, REST API",
    description:
      "Разработка интерфейсов для расчётных сценариев с большим количеством взаимозависимых полей и строгой валидацией.",
  },
  {
    title: "Административная система с иерархическими таблицами",
    stack: "React, Virtualization, Ant Design",
    description:
      "Проектирование многоуровневых таблиц, оптимизация отрисовки больших наборов данных, настройка ролевого доступа.",
  },
  {
    title: "Корпоративный портал с workflow-статусами",
    stack: "React, TypeScript, REST",
    description:
      "Реализация статусов, бизнес-процессов и интерактивных форм с учётом требований корпоративного и госсектора.",
  },
];

const experiences = [
  {
    company: "АО «Центр электронных финансов» (ЦЭФ)",
    role: "Senior Frontend Developer",
    period: "Апрель 2023 — Январь 2026",
    points: [
      "Разрабатывал и поддерживал масштабные React-системы для государственных органов с высокими требованиями к стабильности и безопасности.",
      "Реализовывал сложные финансовые расчёты, формульные зависимости и многошаговые сценарии ввода с большим количеством взаимосвязанных полей.",
      "Проектировал и внедрял многоуровневые иерархические таблицы, динамические формы и расчётные блоки для работы с крупными объёмами данных.",
      "Оптимизировал производительность интерфейсов: снижал количество лишних ререндеров, устранял узкие места и ускорял отклик UI под нагрузкой.",
      "Регулярно выполнял рефакторинг legacy-кода, повышал поддерживаемость модулей и участвовал в принятии архитектурных решений команды.",
      "Интегрировал интерфейсы с REST API, реализовывал трансформацию вложенных структур данных и поддерживал ролевую модель доступа.",
      "Взаимодействовал с backend-разработчиками, аналитиками и заказчиками в условиях высокой ответственности и строгих регламентов.",
    ],
  },
  {
    company: "Holding Samgau",
    role: "Frontend Developer",
    period: "Ноябрь 2021 — Февраль 2023 (1 год 4 месяца)",
    points: [
      "Разрабатывал и развивал фронтенд-часть корпоративных web-продуктов.",
      "Поддерживал и модернизировал legacy-код, повышал читаемость и предсказуемость поведения интерфейсов.",
      "Реализовывал новый функционал в тесной связке с командой разработки и бизнес-заказчиками.",
    ],
  },
  {
    company: "ТОО «ISME»",
    role: "Frontend Developer",
    period: "Июнь 2020 — Июнь 2021 (1 год 1 месяц)",
    points: [
      "Участвовал в разработке веб-портала на React и внедрении новых пользовательских сценариев.",
      "Работал с клиентами и участвовал в коммуникациях по требованиям и приоритизации задач.",
      "Оказывал техническую поддержку клиентов и сопровождал релизы продукта.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <section id="home" className="section hero">
        <div className="container hero__content scroll-reveal is-visible">
          <p className="hero__eyebrow">Senior Frontend Developer</p>
          <h1>Разработка сложных React-приложений для корпоративных и государственных систем.</h1>
          <p className="hero__subtitle">
            Специализируюсь на приложениях с насыщенной бизнес-логикой, финансовыми расчётами и
            высокими требованиями к производительности, стабильности и масштабируемости.
          </p>
          <div className="hero__actions">
            <a className="hero__cta" href="#experience">
              Смотреть опыт
            </a>
            <a className="hero__cta hero__cta--ghost" href="#contacts">
              Связаться
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-box scroll-reveal is-visible">
          <h2>О себе</h2>
          <p>
            Имею глубокий опыт проектирования сложных пользовательских интерфейсов, включая
            многоуровневые иерархические таблицы, динамические формы и расчётные поля с большим
            количеством взаимозависимостей. Умею работать с крупными объёмами данных,
            оптимизировать рендеринг и устранять узкие места производительности в
            React-приложениях.
          </p>
          <p>
            Регулярно работаю с крупными кодовыми базами, выполняю рефакторинг legacy-кода,
            участвую в принятии архитектурных решений и обеспечиваю масштабируемость и
            поддерживаемость фронтенд-части. Имею опыт интеграции с REST API, трансформации
            вложенных структур данных и реализации интерфейсов с ролевой моделью доступа,
            статусами и бизнес-процессами.
          </p>
          <p>
            Комфортно взаимодействую с backend-разработчиками, аналитиками и заказчиками в
            условиях высокой ответственности и строгих требований, характерных для государственных
            и корпоративных систем.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2>Ключевые компетенции</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article
                key={skill}
                className="skill-card scroll-reveal is-visible"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {skill}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2>Опыт работы</h2>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="experience-card scroll-reveal is-visible"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <h3>{experience.company}</h3>
                <p className="experience-card__meta">
                  {experience.role} · {experience.period}
                </p>
                <ul className="experience-card__list">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
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
            <li>Техническое SEO для лендингов и корпоративных страниц.</li>
            <li>Оптимизация Core Web Vitals и времени отклика интерфейса.</li>
            <li>Подготовка продукта к запуску платной рекламы и аналитике конверсии.</li>
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
