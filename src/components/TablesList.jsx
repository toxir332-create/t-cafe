// src/components/TablesList.jsx
import React, { useState, useEffect } from 'react';

export default function TablesList() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const savedTables = JSON.parse(localStorage.getItem('tables')) || [];
    setTables(savedTables);
  }, []);

  const addTable = () => {
    const name = prompt('Stol nomi:');
    if (name) {
      const newTable = { id: Date.now(), name, status: 'bo‘sh' };
      const updatedTables = [...tables, newTable];
      setTables(updatedTables);
      localStorage.setItem('tables', JSON.stringify(updatedTables));
    }
  };

  const deleteTable = (id) => {
    const updatedTables = tables.filter(t => t.id !== id);
    setTables(updatedTables);
    localStorage.setItem('tables', JSON.stringify(updatedTables));
  };

  return (
    <div>
      <h2>Stollar</h2>
      <button onClick={addTable}>Stol qo‘shish</button>
      <ul>
        {tables.map(t => (
          <li key={t.id}>
            {t.name} ({t.status})
            <button onClick={() => deleteTable(t.id)}>O‘chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
