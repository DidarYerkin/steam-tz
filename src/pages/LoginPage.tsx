import { useState } from "react";
import "../styles/LoginPage.css";


type Props = { onLogin: () => void };

export default function LoginPage({ onLogin }: Props) {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  return (
    <main className="loginBg">
      <div className="loginBox">
        <h2>Вход</h2>
        <label>Логин</label>
        <input value={login} onChange={e => setLogin(e.target.value)} placeholder="user" />
        <label>Пароль</label>
        <input value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••" type="password" />
        <button onClick={onLogin}>Войти</button>
        <div className="hint">Учебный вход: любые данные</div>
      </div>
    </main>
  );
}
