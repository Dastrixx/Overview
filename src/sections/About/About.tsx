import "./About.css";

const cards = [
  {
    number: "01",
    title: "Интерфейсы",
    text: "Собираю чистые и понятные UI для сложных продуктов и внутренних систем.",
  },
  {
    number: "02",
    title: "Логика",
    text: "Работаю с формами, таблицами, состоянием приложения, API и бизнес-процессами.",
  },
  {
    number: "03",
    title: "Подход",
    text: "Думаю про архитектуру, производительность и удобство дальнейшей разработки.",
  },
];

export default function About() {
  return (
    <section className="page-section about">
      <div className="about__inner">
        <div className="container about__container">
          <div className="about__intro">
            <span className="about__label">Обо мне</span>

            <h2 className="about__title">
              Делаю интерфейсы, которые удобно использовать,
              <br />
              легко развивать и приятно показывать.
            </h2>

            <p className="about__text">
              Мне интересны продукты, где frontend — это не просто визуальный слой, а
              полноценный рабочий инструмент для бизнеса и пользователей.
            </p>
          </div>

          <div className="about__cards">
            {cards.map((card) => (
              <article key={card.number} className="aboutCard">
                <span className="aboutCard__number">{card.number}</span>
                <h3 className="aboutCard__title">{card.title}</h3>
                <p className="aboutCard__text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
