import { useState } from "react";
import Header from "./components/Header";
import StorePage from "./pages/StorePage";
import type { Game } from "./pages/StorePage";
import LibraryPage from "./pages/LibraryPage";
import LoginPage from "./pages/LoginPage";



type Page = "store" | "library";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [page, setPage] = useState<Page>("store");

  const [games, setGames] = useState<Game[]>([
    { id: 1, title: "Grand Theft Auto V", price: 7990, owned: false, installed: false, image: "gta-5.jpg" },
    { id: 2, title: "Total War: Rome II", price: 5990, owned: false, installed: false, image: "total-war-rome-2.jpg" },
    { id: 3, title: "Dark Souls III", price: 6990, owned: false, installed: false, image: "dark-souls-3.jpg" },
    { id: 4, title: "Elden Ring", price: 8990, owned: false, installed: false, image: "elden-ring.jpg" },
    { id: 5, title: "Cyberpunk 2077", price: 7490, owned: false, installed: false, image: "cyberpunk-2077.jpg" },
    { id: 6, title: "Mortal Kombat 11", price: 4990, owned: false, installed: false, image: "mortal-kombat-11.jpg" },
    { id: 7, title: "The Elder Scrolls V: Skyrim", price: 3990, owned: false, installed: false, image: "skyrim.jpg" },
    { id: 8, title: "The Witcher 2", price: 2990, owned: false, installed: false, image: "witcher-2.jpg" },
  ]);

  const buy = (id: number) => {
    setGames(prev => prev.map(g => (g.id === id ? { ...g, owned: true } : g)));
  };

  const install = (id: number) => {
    setGames(prev => prev.map(g => (g.id === id ? { ...g, installed: true } : g)));
  };

  if (!isAuth) return <LoginPage onLogin={() => setIsAuth(true)} />;

  return (
    <>
      <Header
        onGoStore={() => setPage("store")}
        onGoLibrary={() => setPage("library")}
        onLogout={() => setIsAuth(false)}
      />

      {page === "store" ? (
        <StorePage games={games} onBuy={buy} />
      ) : (
        <LibraryPage games={games} onInstall={install} />
      )}
    </>
  );
}
