import "./Hero.css";

const techStack = ["React", "TypeScript", "Vite", "UI/UX", "Animations"];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" />
      <div className="hero__grid" />
      <div className="hero__orb hero__orb--one" />
      <div className="hero__orb hero__orb--two" />

      <div className="container hero__inner">
        <div className="hero__left">
          <p className="hero__eyebrow hero__reveal">Frontend Developer</p>

          <h1 className="hero__title hero__reveal hero__reveal--delay1">
            Амир Рахимкулов
            <span className="hero__titleAccent"> React / UI / Motion</span>
          </h1>

          <p className="hero__text hero__reveal hero__reveal--delay2">
            Разрабатываю современные интерфейсы, где важны не только логика и архитектура,
            но и ощущение от продукта: анимации, аккуратная композиция, чистый UI и
            продуманный пользовательский опыт.
          </p>

          <div className="hero__actions hero__reveal hero__reveal--delay3">
            <a href="#projects" className="hero__button">
              Смотреть проекты
            </a>

            <a href="#contacts" className="hero__button hero__button--ghost">
              Связаться
            </a>
          </div>

          <div className="hero__stack hero__reveal hero__reveal--delay4">
            {techStack.map((item) => (
              <span key={item} className="hero__chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__right hero__reveal hero__reveal--delay2">
          <div className="heroCardWrap">
            <div className="heroCard" role="button" tabIndex={0} aria-label="Flip hero card">
              <div className="heroCard__inner">
                <div className="heroCard__face heroCard__face--front">
                  <div className="heroCard__top">
                    <span className="heroCard__dot heroCard__dot--red" />
                    <span className="heroCard__dot heroCard__dot--yellow" />
                    <span className="heroCard__dot heroCard__dot--green" />
                  </div>

                  <div className="heroCard__body">
                    <div className="heroCard__code">
                      <span className="heroCard__line heroCard__line--1" />
                      <span className="heroCard__line heroCard__line--2" />
                      <span className="heroCard__line heroCard__line--3" />
                      <span className="heroCard__line heroCard__line--4" />
                    </div>

                    <div className="heroCard__stats">
                      <div className="heroStat">
                        <span className="heroStat__label">Stack</span>
                        <strong className="heroStat__value">React / JS</strong>
                      </div>

                      <div className="heroStat">
                        <span className="heroStat__label">Focus</span>
                        <strong className="heroStat__value">UI + Product</strong>
                      </div>

                      <div className="heroStat">
                        <span className="heroStat__label">Style</span>
                        <strong className="heroStat__value">Clean & Animated</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="heroCard__face heroCard__face--back">
                  <p className="heroCard__backTitle">Как я работаю</p>
                  <ul className="heroCard__backList">
                    <li>Проектирую UI и поведение до начала верстки.</li>
                    <li>Делаю плавные анимации без перегруза.</li>
                    <li>Слежу за чистотой архитектуры и DX.</li>
                  </ul>
                  <p className="heroCard__backHint">Наведи / тапни, чтобы перевернуть обратно</p>
                </div>
              </div>
            </div>

            <div className="heroFloating heroFloating--one">⚡ smooth UI</div>
            <div className="heroFloating heroFloating--two">✦ modern frontend</div>
          </div>
        </div>
      </div>
    </section>
  );
}
