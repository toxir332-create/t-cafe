// src/components/OrdersList.jsx
import React, { useState, useEffect } from 'react';

export default function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  const updateStatus = (id) => {
    const updatedOrders = orders.map(o =>
      o.id === id ? { ...o, status: o.status === 'tayyor' ? 'servisda' : 'tayyor' } : o
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <h2>Buyurtmalar</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}>
            {o.item} - {o.status}
            <button onClick={() => updateStatus(o.id)}>Holatini o‘zgartirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
