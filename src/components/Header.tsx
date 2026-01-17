import "./Header.css";

type Props = {
  onGoStore: () => void;
  onGoLibrary: () => void;
  onLogout: () => void;
};

export default function Header({ onGoStore, onGoLibrary, onLogout }: Props) {
  return (
    <header className="steamHeader">
      <div className="steamHeader__inner">
        <div className="steamLogo" onClick={onGoStore} title="Steam-edu">
          <span className="steamLogo__mark">●</span>
          <span className="steamLogo__text">STEAM</span>
        </div>

        <nav className="steamNav">
          <button className="steamNav__btn isActive" onClick={onGoStore}>МАГАЗИН</button>
          <button className="steamNav__btn" onClick={onGoLibrary}>БИБЛИОТЕКА</button>
          <span className="steamNav__link">СООБЩЕСТВО</span>
          <span className="steamNav__link">ПОДДЕРЖКА</span>
        </nav>

        <div className="steamRight">
          <button className="installBtn">Установить Steam</button>
          <button className="logoutBtn" onClick={onLogout}>выйти</button>
        </div>
      </div>
    </header>
  );
}
