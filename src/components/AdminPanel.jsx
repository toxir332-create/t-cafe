import React from "react";

const AdminPanel = ({ onLogout }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>
      <p>Bu yerda admin funksiyalari bo‘ladi.</p>
      <button onClick={onLogout}>Chiqish</button>
    </div>
  );
};

export default AdminPanel;
