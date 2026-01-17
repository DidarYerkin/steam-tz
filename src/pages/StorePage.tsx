import "../styles/StorePage.css";

export type Game = {
  id: number;
  title: string;
  price: number;
  owned: boolean;
  installed: boolean;
  image: string;
  discount?: number;
  
};

type Props = {
  games: Game[];
  onBuy: (id: number) => void;
};

export default function StorePage({ games, onBuy }: Props) {
  const featured = games[0];
  const specials = games.slice(1, 4);
  const list = games.slice(0, 8);

  return (
    <main className="storeBg">
      <div className="storeContainer">
      
        <div className="subNav">
          <div className="subNav__left">
            <span>Просмотр</span>
            <span>Рекомендации</span>
            <span>Категории</span>
            <span>Способы игры</span>
          </div>
          <div className="subNav__search">
            <input placeholder="Поиск по названию" />
            <button>🔍</button>
          </div>
        </div>

        <section className="block">
          <h3 className="blockTitle">ПОПУЛЯРНОЕ И РЕКОМЕНДУЕМОЕ</h3>

          <div className="featured">
            <div className="featured__poster">
              {featured?.image ? (
                <img
                  className="featured__img"
                  src={`/images/${featured.image}`}
                  alt={featured.title}
                />
              ) : (
                <div className="fakeImage">HERO</div>
              )}
            </div>

            <div className="featured__info">
              <div className="featured__name">{featured?.title ?? "Featured Game"}</div>

              <div className="featured__thumbs">
                <div className="thumb" />
                <div className="thumb" />
                <div className="thumb" />
                <div className="thumb" />
              </div>

              <div className="featured__meta">Ранний доступ уже открыт</div>

              <div className="featured__priceRow">
                {featured?.owned ? (
                  <span className="tagOwned">В библиотеке</span>
                ) : (
                  <>
                    <span className="price">{featured ? `${featured.price} ₸` : "—"}</span>
                    <button
                      className="btnBuy"
                      onClick={() => featured && onBuy(featured.id)}
                    >
                      Купить
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

     
        <section className="banner">
          <div className="banner__inner">
            <div className="banner__title">ФЕСТИВАЛЬ СКИДОК В STEAM</div>
            <div className="banner__sub">Акции, демо-версии и многое другое</div>
          </div>
        </section>


        <section className="block">
          <div className="blockHead">
            <h3 className="blockTitle">СКИДКИ И МЕРОПРИЯТИЯ</h3>
            <span className="more">БОЛЬШЕ ПРОДУКТОВ</span>
          </div>

          <div className="cards3">
            {specials.map(g => (
              <div className="card" key={g.id}>
                <div className="card__imgWrap">
                  <img className="card__img" src={`/images/${g.image}`} alt={g.title} />
                </div>

                <div className="card__name">{g.title}</div>

                <div className="card__row">
                  {typeof g.discount === "number" && (
                    <span className="discount">-{g.discount}%</span>
                  )}
                  <span className="priceSmall">{g.price} ₸</span>

                  {g.owned ? (
                    <span className="tagOwned">Куплено</span>
                  ) : (
                    <button className="btnBuySmall" onClick={() => onBuy(g.id)}>
                      Купить
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="block">
          <h3 className="blockTitle">ПОПУЛЯРНЫЕ НОВИНКИ</h3>

          <div className="twoCol">
            <div className="list">
              {list.map(g => (
                <div className="listItem" key={g.id}>
                  <div className="listItem__iconWrap">
                    <img className="listItem__icon" src={`/images/${g.image}`} alt={g.title} />
                  </div>

                  <div className="listItem__title">{g.title}</div>

                  <div className="listItem__right">
                    {typeof g.discount === "number" && (
                      <span className="discount">-{g.discount}%</span>
                    )}
                    <span className="priceSmall">{g.price} ₸</span>

                    {g.owned ? (
                      <span className="tagOwned">В библиотеке</span>
                    ) : (
                      <button className="btnBuySmall" onClick={() => onBuy(g.id)}>
                        Купить
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="preview">
              <div className="preview__title">{featured?.title ?? "Выбранная игра"}</div>

              <div className="preview__bigWrap">
                {featured?.image ? (
                  <img className="preview__big" src={`/images/${featured.image}`} alt={featured.title} />
                ) : (
                  <div className="preview__big" />
                )}
              </div>

              <div className="preview__miniRow">
                <div className="preview__mini" />
                <div className="preview__mini" />
                <div className="preview__mini" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
