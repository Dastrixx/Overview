import { ForwardRefExoticComponent, MouseEvent, RefAttributes, useState } from "react";
import "./Contacts.css";
import { Mail, Github, Send, ArrowUpRight, Check, LucideProps } from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "stricklex@gmail.com",
    href: "#",
    icon: Mail,
    copy: true,
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
  const [copied, setCopied] = useState("");

  const handleClick = async (
    e: MouseEvent<HTMLAnchorElement, MouseEvent>,
    item:
      | {
          title: string;
          value: string;
          href: string;
          icon: ForwardRefExoticComponent<
            Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
          >;
          copy: boolean;
        }
      | {
          title: string;
          value: string;
          href: string;
          icon: ForwardRefExoticComponent<
            Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
          >;
          copy?: undefined;
        }
  ) => {
    if (!item.copy) {
      return;
    }

    e.preventDefault();

    try {
      await navigator.clipboard.writeText(item.value);
      setCopied(item.title);

      setTimeout(() => {
        setCopied("");
      }, 1800);
    } catch (error) {
      console.error("Ошибка копирования:", error);
    }
  };

  return (
    <section id="contacts" className="section-frame contacts">
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

        <div className="contacts__panel section-canon">
          <div className="contacts__panelGlow" />

          <div className="contacts__intro section-canon__intro">
            <span className="contacts__badge">Available for work</span>

            <h3 className="contacts__panelTitle">
              Открыт к<span> интересным продуктам</span>
            </h3>

            <p className="contacts__panelText">
              React, архитектура интерфейсов, сложные формы, таблицы данных и продуманные
              пользовательские сценарии.
            </p>
          </div>

          <div className="contacts__list section-canon__body">
            {contacts.map((item) => {
              const Icon = item.icon;
              const isCopied = copied === item.title;
              const isExternal = item.href.startsWith("http");

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className={`contactsCard ${isCopied ? "contactsCard--copied" : ""}`}
                  onClick={(e) => handleClick(e, item)}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <div className="contactsCard__left">
                    <div className="contactsCard__icon">
                      {isCopied ? (
                        <Check size={20} strokeWidth={2.2} />
                      ) : (
                        <Icon size={20} strokeWidth={1.9} />
                      )}
                    </div>

                    <div className="contactsCard__content">
                      <div className="contactsCard__label">{item.title}</div>

                      <div className="contactsCard__valueWrap">
                        <div className="contactsCard__value">{item.value}</div>

                        {item.copy && (
                          <span
                            className={`contactsCard__copiedBadge ${
                              isCopied ? "is-visible" : ""
                            }`}
                          >
                            Скопировано
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="contactsCard__arrow">
                    {isCopied ? (
                      <Check size={18} strokeWidth={2.4} />
                    ) : (
                      <ArrowUpRight size={18} strokeWidth={2} />
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
