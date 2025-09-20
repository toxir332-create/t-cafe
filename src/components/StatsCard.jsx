import React from 'react';

const StatsCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className={`text-3xl font-bold ${color}`}>{value}</p>
      </div>
      <div className={`bg-${color}-600 p-3 rounded-full`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

export default StatsCard;
