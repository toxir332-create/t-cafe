import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ToggleDayNight = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
  >
    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    <span>{darkMode ? 'Day Mode' : 'Night Mode'}</span>
  </button>
);

export default ToggleDayNight;
