import React from 'react';
import Header from '../components/Header';
import ToggleDayNight from '../components/ToggleDayNight';

const AdminPanel = ({ currentUser, handleLogout, darkMode, toggleDarkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <div className="p-6 space-y-6">
        <ToggleDayNight darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>Admin Paneli</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-white">Band Stollar: 2</div>
          <div className="bg-gray-800 p-6 rounded-lg text-white">Kutilayotgan To'lov: 0 so'm</div>
          <div className="bg-gray-800 p-6 rounded-lg text-white">Bugungi Cheklar: 0</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-bold mb-4">To'lovga Tayyor Stollar</h3>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p>1-stol (Band) - Administrator</p>
              <p>Jami: 0 so'm</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p>4-stol (Band) - Akmal Karimov</p>
              <p>Jami: 0 so'm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
