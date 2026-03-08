import "./Skills.css";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Ant Design",
  "React Hook Form",
  "REST API",
  "HTML",
  "CSS",
  "Responsive UI",
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Навыки</h2>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill} className="skills__item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
