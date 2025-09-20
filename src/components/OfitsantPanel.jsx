import React, { useState } from "react";
import TableDetail from "./TableDetail";

export default function OfitsantPanel({ onLogout }) {
  const tables = Array.from({ length: 50 }, (_, i) => `Stol ${i + 1}`);
  const [selectedTable, setSelectedTable] = useState(null);

  if (selectedTable) {
    return (
      <TableDetail
        table={selectedTable}
        onBack={() => setSelectedTable(null)}
      />
    );
  }

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Ofitsant Paneli</h2>
      <button onClick={onLogout}>Chiqish</button>
      <h3>Stollar ro‘yxati</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {tables.map((table, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTable(table)}
            style={{
              padding: "20px",
              background: "#333",
              color: "white",
              border: "1px solid orange",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {table}
          </button>
        ))}
      </div>
    </div>
  );
}
