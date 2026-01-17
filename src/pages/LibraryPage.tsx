import "../styles/LibraryPage.css";
import type { Game } from "./StorePage";

type Props = {
  games: Game[];
  onInstall: (id: number) => void;
};

export default function LibraryPage({ games, onInstall }: Props) {
  const owned = games.filter(g => g.owned);

  return (
    <main className="libBg">
      <div className="libContainer">
        <h2 className="libTitle">Библиотека</h2>

        {owned.length === 0 ? (
          <div className="libEmpty">Пока нет купленных игр.</div>
        ) : (
          <div className="libGrid">
            {owned.map(g => (
              <div className="libCard" key={g.id}>
                <img
                  className="libCard__img"
                  src={`/images/${g.image}`}
                  alt={g.title}
                />

                <div className="libCard__name">{g.title}</div>

                <div className="libCard__row">
                  {g.installed ? (
                    <span className="tagOwned">Установлено</span>
                  ) : (
                    <button className="btnInstall" onClick={() => onInstall(g.id)}>
                      Установить
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
