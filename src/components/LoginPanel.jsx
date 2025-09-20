import React, { useState } from "react";
import "./LoginPanel.css";

function LoginPanel({ onLogin }) {
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() !== "") {
      onLogin(role);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input"
        >
          <option value="admin">Admin</option>
          <option value="ofitsant">Ofitsant</option>
          <option value="boshliq">Boshliq</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPanel;
