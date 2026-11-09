const products = [
  { name: "Скандинавская", price: "от 5 200 ₽", image: "/catalog/scandi.png", tag: "Ткань · 180 см" },
  { name: "Лофт", price: "от 5 720 ₽", image: "/catalog/loft.png", tag: "Дерево · ткань" },
  { name: "Луна", price: "от 5 800 ₽", image: "/catalog/luna.png", tag: "Авторский рисунок" },
  { name: "Реечная", price: "от 6 000 ₽", image: "/catalog/slatted.png", tag: "Для зонирования" },
  { name: "Жалюзи", price: "от 6 000 ₽", image: "/catalog/louvered.png", tag: "Деревянная" },
  { name: "Хлопок", price: "от 4 000 ₽", image: "/catalog/cotton.png", tag: "Натуральная ткань" },
  { name: "Американо", price: "от 5 980 ₽", image: "/catalog/americano.png", tag: "Фактурный текстиль" },
  { name: "Фудзияма", price: "по запросу", image: "/catalog/fuji.png", tag: "Японские мотивы" },
];

const seasonalProducts = [
  { name: "Ностальгический Новый год", image: "/catalog/seasonal/nostalgic-new-year.jpg" },
  { name: "Петербургский Дед Мороз", image: "/catalog/seasonal/petersburg-ded-moroz.jpg" },
  { name: "Зимняя сказка Деда Мороза", image: "/catalog/seasonal/winter-tale-ded-moroz.jpg" },
  { name: "Зимняя сказка под старину", image: "/catalog/seasonal/winter-tale-vintage.jpg" },
  { name: "Зимняя сказка", image: "/catalog/seasonal/winter-tale.jpg" },
  { name: "Новогодняя ночь у окна", image: "/catalog/seasonal/new-year-night-window.jpg" },
  { name: "Петербург — Новый год", image: "/catalog/seasonal/petersburg-new-year.jpg" },
  { name: "Подарки с балкона", image: "/catalog/seasonal/gifts-from-balcony.jpg" },
  { name: "Снежная радость", image: "/catalog/seasonal/snowy-joy.jpg" },
  { name: "Хоровод у ёлки", image: "/catalog/seasonal/dance-around-tree.jpg" },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="Ширмы СПБ — на главную">
          <span>ШИРМЫ</span><b>СПБ</b>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#catalog">Каталог</a>
          <a href="#custom">На заказ</a>
          <a href="#payment">Оплата</a>
          <a href="#how">Как заказать</a>
        </nav>
        <a className="header-call" href="tel:+79111254662">+7 911 125-46-62</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Санкт-Петербург · доставка по России</p>
          <h1>Ширмы, которые<br /><em>собирают пространство</em></h1>
          <p className="lead">Складные перегородки для дома, офиса и красивых интерьеров. Выбирайте готовую модель или создавайте свою.</p>
          <div className="hero-actions">
            <a className="button" href="#catalog">Смотреть модели</a>
            <a className="text-link" href="#custom">Индивидуальный заказ <span>↗</span></a>
          </div>
          <div className="hero-note"><b>от 3 400 ₽</b><span>стоимость зависит от числа створок<br />и выбранных материалов</span></div>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src="/catalog/seasonal/new-year-night-window.jpg" alt="Новогодняя ширма в интерьере" />
          <span className="hero-stamp">новая<br />коллекция</span>
        </div>
      </section>

      <section className="statement">
        <p>Не просто перегородка.</p>
        <h2>Акцент, который<br />делает интерьер <em>вашим.</em></h2>
        <div className="facts">
          <div><b>01</b><span>Собственное<br />производство</span></div>
          <div><b>02</b><span>Любые размеры<br />и конфигурации</span></div>
          <div><b>03</b><span>Дерево и текстиль<br />с вниманием к деталям</span></div>
        </div>
      </section>

      <section className="seasonal" id="seasonal">
        <div className="section-heading"><div><p className="eyebrow">Сезонная коллекция</p><h2>Новогодние<br /><em>ширмы</em></h2></div><p>Тёплые сюжеты для дома, витрин, фотозон и праздничного настроения. Изготавливаем в нужном количестве створок.</p></div>
        <div className="product-grid">
          {seasonalProducts.map((product) => <article className="product" key={product.name}>
            <div className="product-image"><img src={product.image} alt={`Ширма «${product.name}»`} /><span>Новогодняя коллекция</span></div>
            <div className="product-info"><h3>{product.name}</h3><p>по запросу</p><a href="#custom" aria-label={`Узнать о модели ${product.name}`}>Узнать подробнее <span>→</span></a></div>
          </article>)}
        </div>
      </section>

      <section className="catalog" id="catalog">
        <div className="section-heading"><div><p className="eyebrow">Готовые решения</p><h2>Выберите<br /><em>свою ширму</em></h2></div><p>Каждую модель можно изготовить в нужном количестве створок, цвете каркаса и ткани.</p></div>
        <div className="product-grid">
          {products.map((product) => <article className="product" key={product.name}>
            <div className="product-image"><img src={product.image} alt={`Ширма «${product.name}»`} /><span>{product.tag}</span></div>
            <div className="product-info"><h3>{product.name}</h3><p>{product.price}</p><a href="#custom" aria-label={`Узнать о модели ${product.name}`}>Узнать подробнее <span>→</span></a></div>
          </article>)}
        </div>
      </section>

      <section className="custom" id="custom">
        <div className="custom-image"><img src="/catalog/sedzi.png" alt="Ширма в японском стиле" /></div>
        <div className="custom-copy"><p className="eyebrow">Индивидуальное изготовление</p><h2>Ваша идея —<br /><em>наша работа</em></h2><p>Пришлите фото, эскиз или просто расскажите о задаче. Подберём конструкцию, размер, цвет каркаса и вставку для ширмы, которой больше ни у кого не будет.</p><a className="button light" href="tel:+79111254662">Рассчитать стоимость</a></div>
      </section>

      <section className="how" id="how">
        <p className="eyebrow">Просто начать</p><h2>От идеи до ширмы<br /><em>в четыре шага</em></h2>
        <ol>
          <li><b>01</b><h3>Расскажите задачу</h3><p>Для дома, офиса, фотостудии или кафе — нам важен ваш сценарий.</p></li>
          <li><b>02</b><h3>Выберите вариант</h3><p>Готовая модель или индивидуальная конструкция по размерам.</p></li>
          <li><b>03</b><h3>Согласуем детали</h3><p>Материалы, цвет, число створок, сроки и стоимость.</p></li>
          <li><b>04</b><h3>Получите ширму</h3><p>Аккуратно изготовим и отправим в ваш город.</p></li>
        </ol>
      </section>

      <section className="payment" id="payment">
        <div><p className="eyebrow">Оплата</p><h2>Удобно для частных<br />и <em>корпоративных</em> заказов</h2></div>
        <div className="payment-options">
          <article className="payment-feature"><span>01</span><h3>Безналичный расчёт</h3><p>Для компаний и государственных учреждений — оплата по счёту.</p></article>
          <article><span>02</span><h3>Картой онлайн</h3><p>Безопасная оплата банковской картой через Альфа-Банк.</p></article>
          <article><span>03</span><h3>Курьеру при получении</h3><p>В Санкт-Петербурге можно оплатить заказ при доставке.</p></article>
        </div>
      </section>

      <section className="contact"><p className="eyebrow">Есть идея?</p><h2>Давайте сделаем<br /><em>красиво.</em></h2><a className="button" href="tel:+79111254662">Позвонить мастеру</a><p className="contact-meta">Ежедневно 10:00–21:00 · Санкт-Петербург</p></section>
      <footer><a className="brand" href="#top"><span>ШИРМЫ</span><b>СПБ</b></a><p>© 2026 · Ширмы на заказ</p><a href="mailto:mebel@alt-d.ru">mebel@alt-d.ru</a></footer>
    </main>
  );
}
