import React from 'react';
import Header from '../components/Header';
import TablesGrid from '../components/TablesGrid';
import ToggleDayNight from '../components/ToggleDayNight';
import { Package, Users, Calendar } from 'lucide-react';

const OfitsantPanel = ({ currentUser, handleLogout, waiters, toggleTableStatus, darkMode, toggleDarkMode }) => {
  const totalTables = waiters.length;
  const busyTables = waiters.filter(t => t.status === 'Band').length;
  const freeTables = totalTables - busyTables;

  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <div className="p-6 space-y-6">
        <ToggleDayNight darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>Ofitsant Paneli</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Bo'sh Stollar</p>
                <p className="text-3xl font-bold text-green-400">{freeTables}</p>
              </div>
              <div className="bg-green-600 p-3 rounded-full">
                <Package className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Band Stollar</p>
                <p className="text-3xl font-bold text-red-400">{busyTables}</p>
              </div>
              <div className="bg-red-600 p-3 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Jami Stollar</p>
                <p className="text-3xl font-bold text-blue-400">{totalTables}</p>
              </div>
              <div className="bg-blue-600 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Tables Grid */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-4">Stollar</h3>
          <TablesGrid tables={waiters} toggleTableStatus={toggleTableStatus} />
        </div>
      </div>
    </div>
  );
};

export default OfitsantPanel;
