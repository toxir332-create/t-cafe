// src/App.jsx
import React, { useState } from "react";
import LoginPanel from "./components/LoginPanel";
import AdminPanel from "./components/AdminPanel";
import OfitsantPanel from "./components/OfitsantPanel";
import BoshliqPanel from "./components/BoshliqPanel";

// ✅ OrderContext import qilamiz
import { OrderProvider } from "./context/OrderContext";

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
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
    // 🔥 Endi butun dastur OrderProvider ichida ishlaydi
    <OrderProvider>
      {content}
    </OrderProvider>
  );
}

export default App;
