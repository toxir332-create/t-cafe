// src/components/StatsDashboard.jsx
import React, { useState, useEffect } from 'react';

export default function StatsDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  const totalOrders = orders.length;
  const readyOrders = orders.filter(o => o.status === 'tayyor').length;
  const servingOrders = orders.filter(o => o.status === 'servisda').length;

  return (
    <div>
      <h2>Statistika</h2>
      <p>Umumiy buyurtmalar: {totalOrders}</p>
      <p>Tayyor buyurtmalar: {readyOrders}</p>
      <p>Servisda buyurtmalar: {servingOrders}</p>
    </div>
  );
}
