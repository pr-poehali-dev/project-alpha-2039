export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">АЛЕСИ*</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Атмосфера</a>
          <a href="#">Адреса</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ОСТРО.
              <br />
              ЯРКО. <span>КЁРЛИ.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Ресторан Алеси — настоящая корейская кухня с огнём внутри. Острые
              соусы, аутентичные рецепты и атмосфера, от которой хочется
              вернуться снова.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white" }}
              >
                Забронировать стол
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url(https://cdn.poehali.dev/projects/3a2118fe-3064-41b4-a167-d4c1a3701719/files/ffbaea12-874f-4840-a9d5-7fc3882f487a.jpg)`,
            }}
          >
            <div className="sticker">
              ОГОНЬ
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div
              className="floating-tag hidden md:block"
              style={{ top: "20%", left: "10%" }}
            >
              #КОРЕЯ
            </div>
            <div
              className="floating-tag hidden md:block"
              style={{ bottom: "30%", right: "20%" }}
            >
              🌶 ОСТРО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КИМЧИ КОТОРОЕ ЖЖЁТ * ТТОК-ПОККИ В ОГНЕ * ТОЛЬКО КОРЕЙСКИЙ
            ВАЙБ * ОТКРЫТЫ ДО 23:00 * САМОЕ ОСТРОЕ В ГОРОДЕ * КИМЧИ КОТОРОЕ
            ЖЖЁТ * ТТОК-ПОККИ В ОГНЕ * ТОЛЬКО КОРЕЙСКИЙ ВАЙБ * ОТКРЫТЫ ДО
            23:00 * САМОЕ ОСТРОЕ В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР ШЕФА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{
                color: "var(--dark)",
                fontWeight: 800,
                textTransform: "uppercase",
              }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/3a2118fe-3064-41b4-a167-d4c1a3701719/files/5cdcc16c-19c5-4f4b-8aea-46abfc617161.jpg"
                alt="Тток-пок-ки"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Тток-пок-ки</h3>
                  <span className="price">690 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Рисовые клёцки в остром соусе гочуджан, яйцо, кунжут.
                  Классика уличной Кореи.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span
                className="menu-tag"
                style={{ background: "var(--secondary)" }}
              >
                🌶🌶🌶 Огонь
              </span>
              <img
                src="https://cdn.poehali.dev/projects/3a2118fe-3064-41b4-a167-d4c1a3701719/files/3c0b238b-6002-4706-8214-603cffc62ae0.jpg"
                alt="Корейская курица"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Янним Чикен</h3>
                  <span className="price">890 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Хрустящая курица в остро-сладком соусе янним, маринованный
                  дайкон.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span
                className="menu-tag"
                style={{ background: "var(--accent)", color: "var(--dark)" }}
              >
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/3a2118fe-3064-41b4-a167-d4c1a3701719/files/e123a7fd-d001-43de-9f05-9a0badb5ca91.jpg"
                alt="Пибимпаб"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Пибимпаб</h3>
                  <span className="price">790 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Рис с овощами, мясом и яйцом. Смешай сам — добавь остроты по
                  вкусу.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ДУША КОРЕИ В КАЖДОЙ ТАРЕЛКЕ.</h2>
            <p className="vibe-text">
              Ресторан Алеси — это не просто еда. Это Корея, которую мы
              привезли для вас. Аутентичные рецепты, острые соусы ручной работы
              и атмосфера сеульской улочки. Приходи один или с компанией —
              всегда найдётся место за нашим столом.
            </p>
            <button
              className="btn-cta"
              style={{ background: "var(--dark)", color: "white", borderColor: "white" }}
            >
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2
            className="section-title"
            style={{ marginBottom: "40px", textAlign: "center" }}
          >
            @ALESI.KOREAN
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Корейская еда 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Корейская еда 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Корейская еда 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Корейская еда 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">АЛЕСИ*</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Острая корейская кухня в ретро-атмосфере. Приходи за вкусом,
            оставайся ради атмосферы.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-hours">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 12:00 – 23:00</li>
            <li>Сб–Вс: 11:00 – 00:00</li>
          </ul>
          <p style={{ marginTop: "20px", color: "#999", fontSize: "13px" }}>
            © 2024 Ресторан Алеси
          </p>
        </div>
      </footer>
    </>
  );
}
