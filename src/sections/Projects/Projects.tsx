import "./Projects.css";

const projects = [
  {
    title: "CV / Portfolio",
    description: "Личный сайт-портфолио на React + Vite.",
    stack: "React, Vite, CSS",
  },
  {
    title: "Admin Dashboard",
    description: "Панель управления с таблицами, формами и API.",
    stack: "React, Ant Design, RHF",
  },
  {
    title: "Landing Page",
    description: "Адаптивный лендинг с акцентом на анимации и визуал.",
    stack: "React, CSS, Motion",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Проекты</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__text">{project.description}</p>
              <span className="project-card__stack">{project.stack}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
