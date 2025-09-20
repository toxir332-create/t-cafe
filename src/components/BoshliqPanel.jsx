import React from "react";

const BoshliqPanel = ({ onLogout }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Boshliq Panel</h2>
      <p>Bu yerda boshliq statistikani ko‘radi.</p>
      <button onClick={onLogout}>Chiqish</button>
    </div>
  );
};

export default BoshliqPanel;
