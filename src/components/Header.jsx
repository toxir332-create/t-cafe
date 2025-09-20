import React from 'react';
import { ChefHat } from 'lucide-react';

const Header = ({ currentUser, handleLogout }) => (
  <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div className="flex items-center">
      <ChefHat className="h-8 w-8 text-green-400 mr-3" />
      <h1 className="text-xl font-bold">Restoran Boshqaruv Tizimi</h1>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-gray-300">Salom, {currentUser?.name}</span>
      <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition duration-200">
        Chiqish
      </button>
    </div>
  </div>
);

export default Header;
