import "./Contacts.css";

export default function Contacts() {
  return (
    <section id="contacts" className="contacts section">
      <div className="container">
        <h2 className="section-title">Контакты</h2>

        <div className="contacts__list">
          <a href="mailto:yourmail@example.com">yourmail@example.com</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://t.me/yourusername" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
