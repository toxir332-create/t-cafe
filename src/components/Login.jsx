import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return;
    localStorage.setItem("user", JSON.stringify({ username, role }));
    onLogin(username, role);
  };

  return (
    <div className="login-container">
      {/* Orqa fon */}
      <div className="container"></div>

      {/* Login forma */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Kirish</h2>
        <input
          type="text"
          placeholder="Foydalanuvchi ismi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="waiter">Ofitsant</option>
          <option value="cashier">Kassir</option>
        </select>
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default Login;
