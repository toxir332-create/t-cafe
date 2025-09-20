import React from 'react';
import Header from '../components/Header';
import ToggleDayNight from '../components/ToggleDayNight';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BoshliqPanel = ({ currentUser, handleLogout, financialData, darkMode, toggleDarkMode }) => {
  const data = {
    labels: ['Daromad', 'Harajat', 'Maosh', 'Foyda'],
    datasets: [
      {
        label: 'So‘m',
        data: [financialData.income, financialData.expense, financialData.salary, financialData.profit],
        borderColor: 'rgba(34,197,94,1)',
        backgroundColor: 'rgba(34,197,94,0.2)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <div className="p-6 space-y-6">
        <ToggleDayNight darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>Boshliq Paneli</h2>

        {/* Financial Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-white">
            <p>Daromad</p>
            <p className="text-green-400 text-2xl">+{financialData.income} so'm</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-white">
            <p>Harajatlar</p>
            <p className="text-red-400 text-2xl">-{financialData.expense} so'm</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-white">
            <p>Maoshlar</p>
            <p className="text-blue-400 text-2xl">-{financialData.salary} so'm</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-white">
            <p>Sof Foyda</p>
            <p className="text-green-400 text-2xl">{financialData.profit} so'm</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-4">Moliyaviy Grafik - Bugun</h3>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BoshliqPanel;
