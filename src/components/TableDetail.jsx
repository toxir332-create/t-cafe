// src/components/TableDetail.jsx
import React, { useState } from "react";
import { useOrders } from "../context/OrderContext";

// 📌 Menyular
const menu = {
  Ovqat: [
    { name: "Palov", price: 20000 },
    { name: "Manti", price: 18000 },
    { name: "Somsa", price: 8000 },
  ],
  Garyachi: [
    { name: "Sho‘rva", price: 15000 },
    { name: "Mastava", price: 17000 },
    { name: "Lag‘mon suyuq", price: 16000 },
  ],
  Ichimliklar: [
    { name: "Coca Cola 1L", price: 12000 },
    { name: "Fanta 1L", price: 12000 },
    { name: "Pepsi 1L", price: 11000 },
  ],
  Energetik: [
    { name: "Red Bull", price: 18000 },
    { name: "Monster", price: 20000 },
  ],
  Salat: [
    { name: "Olivye", price: 12000 },
    { name: "Sezar", price: 15000 },
  ],
  Shirinliklar: [
    { name: "Tort", price: 10000 },
    { name: "Medovik", price: 12000 },
  ],
  Sigareta: [
    { name: "Marlboro", price: 25000 },
    { name: "Kent", price: 22000 },
  ],
  Spirtnoy: [
    { name: "Vodka 0.5L", price: 50000 },
    { name: "Wine Qizil", price: 60000 },
  ],
};

export default function TableDetail({ table, goBack }) {
  const { orders, addOrder, removeOrder, clearTableOrders } = useOrders();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const tableOrders = orders[table] || [];
  const total = tableOrders.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>{table} - Buyurtmalar</h2>
      <button onClick={goBack}>⬅ Orqaga</button>

      {/* Buyurtmalar ro‘yxati */}
      <ul style={{ marginTop: "15px" }}>
        {tableOrders.length === 0 ? (
          <p>Buyurtmalar yo‘q</p>
        ) : (
          tableOrders.map((order, index) => (
            <li key={index}>
              {order.name} - {order.price.toLocaleString()} so‘m
              <button
                onClick={() => removeOrder(table, index)}
                style={{
                  marginLeft: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "3px 8px",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>

      {/* Jami hisob */}
      <h3>Jami: {total.toLocaleString()} so‘m</h3>
      <button
        onClick={() => clearTableOrders(table)}
        style={{
          background: "darkred",
          color: "white",
          padding: "8px 15px",
          borderRadius: "5px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        🗑 Stolni tozalash
      </button>

      {/* Kategoriyalar */}
      {!selectedCategory ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {Object.keys(menu).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "10px 15px",
                background: "orange",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                color: "black",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h3>{selectedCategory}</h3>
          {menu[selectedCategory].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "8px 0",
                padding: "5px 10px",
                background: "#333",
                borderRadius: "6px",
              }}
            >
              <span>
                {item.name} - {item.price.toLocaleString()} so‘m
              </span>
              <button
                onClick={() => addOrder(table, item)}
                style={{
                  background: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "3px 8px",
                  cursor: "pointer",
                }}
              >
                ➕
              </button>
            </div>
          ))}
          <button
            onClick={() => setSelectedCategory(null)}
            style={{
              marginTop: "10px",
              padding: "8px 15px",
              background: "gray",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ⬅ Kategoriyalarga qaytish
          </button>
        </div>
      )}
    </div>
  );
}
