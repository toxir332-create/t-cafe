// src/components/UsersList.jsx
import React, { useState, useEffect } from 'react';

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  const addUser = () => {
    const name = prompt('Foydalanuvchi ismi:');
    const role = prompt('Role (admin/waiter):');
    if (name && role) {
      const newUser = { id: Date.now(), name, role };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter(u => u.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <h2>Foydalanuvchilar</h2>
      <button onClick={addUser}>Foydalanuvchi qo'shish</button>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.role})
            <button onClick={() => deleteUser(u.id)}>O‘chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
