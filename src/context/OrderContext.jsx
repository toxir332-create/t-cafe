// src/context/OrderContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    // 🔥 Brauzer localStorage dan saqlangan buyurtmalarni olish
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : {};
  });

  // 🔥 Har safar orders o‘zgarsa localStorage ga yozib qo‘yiladi
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ✅ Buyurtma qo‘shish
  const addOrder = (table, item) => {
    setOrders((prev) => {
      const tableOrders = prev[table] || [];
      return {
        ...prev,
        [table]: [...tableOrders, item],
      };
    });
  };

  // ✅ Buyurtmani o‘chirish
  const removeOrder = (table, index) => {
    setOrders((prev) => {
      const tableOrders = prev[table] || [];
      const updated = tableOrders.filter((_, i) => i !== index);
      return {
        ...prev,
        [table]: updated,
      };
    });
  };

  // ✅ Stolni tozalash
  const clearTableOrders = (table) => {
    setOrders((prev) => {
      const updated = { ...prev };
      delete updated[table];
      return updated;
    });
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, removeOrder, clearTableOrders }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
