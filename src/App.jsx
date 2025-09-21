// src/App.jsx
import React, { useState, useEffect } from "react";
import LoginPanel from "./components/LoginPanel";
import AdminPanel from "./components/AdminPanel";
import OfitsantPanel from "./components/OfitsantPanel";
import BoshliqPanel from "./components/BoshliqPanel";

import { OrderProvider } from "./context/OrderContext";

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("currentUserRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  const handleLogin = (role) => {
    setUserRole(role);
    localStorage.setItem("currentUserRole", role);
  };

  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem("currentUserRole");
  };

  let content;
  if (!userRole) {
    content = <LoginPanel onLogin={handleLogin} />;
  } else {
    switch (userRole) {
      case "admin":
        content = <AdminPanel onLogout={handleLogout} />;
        break;
      case "ofitsant":
        content = <OfitsantPanel onLogout={handleLogout} />;
        break;
      case "boshliq":
        content = <BoshliqPanel onLogout={handleLogout} />;
        break;
      default:
        content = <LoginPanel onLogin={handleLogin} />;
    }
  }

  return (
    <OrderProvider>
      {/* Parent div qo‘shildi */}
      <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
        {content}
      </div>
    </OrderProvider>
  );
}

export default App;
