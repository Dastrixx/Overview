import "./Contacts.css";
import { Mail, Github, Send, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "stricklex@gmail.com",
    href: "#",
    icon: Mail,
  },
  {
    title: "GitHub",
    value: "Dastrixx",
    href: "https://github.com/dastrixx",
    icon: Github,
  },
  {
    title: "Telegram",
    value: "@ar_titan",
    href: "https://t.me/ar_titan",
    icon: Send,
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__ambient contacts__ambient--one" />
      <div className="contacts__ambient contacts__ambient--two" />

      <div className="container contacts__container">
        <div className="contacts__head">
          <p className="contacts__eyebrow">Контакты</p>

          <h2 className="contacts__title">
            Открыт к сильным
            <br />
            продуктам и красивым интерфейсам.
          </h2>

          <p className="contacts__text">
            Если у тебя есть проект, вакансия или идея для сотрудничества — можно написать
            мне напрямую.
          </p>
        </div>

        <div className="contacts__panel">
          <div className="contacts__panelGlow" />

          <div className="contacts__intro">
            <span className="contacts__badge">Available for work</span>

            <h3 className="contacts__panelTitle">
              Давай соберём что-то
              <span> действительно сильное.</span>
            </h3>

            <p className="contacts__panelText">
              React, UI, анимации, продуктовые интерфейсы, сложные формы, таблицы и
              аккуратная реализация деталей.
            </p>
          </div>

          <div className="contacts__list">
            {contacts.map(({ title, value, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                className="contactsCard"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="contactsCard__left">
                  <div className="contactsCard__icon">
                    <Icon size={20} strokeWidth={1.9} />
                  </div>

                  <div className="contactsCard__content">
                    <div className="contactsCard__label">{title}</div>
                    <div className="contactsCard__value">{value}</div>
                  </div>
                </div>

                <div className="contactsCard__arrow">
                  <ArrowUpRight size={18} strokeWidth={2} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
