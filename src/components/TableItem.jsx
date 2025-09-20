import React from 'react';

const TableItem = ({ table }) => (
  <div className={`p-4 rounded-lg border-2 ${table.status === 'Band' ? 'bg-red-900 border-red-600' : 'bg-green-900 border-green-600'}`}>
    <div className="text-center">
      <div className="text-gray-300 text-sm mb-2">Stol</div>
      <div className="text-white text-lg font-bold mb-2">{table.id}</div>
      <div className={`px-2 py-1 rounded text-xs ${table.status === 'Band' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}>
        {table.status}
      </div>
      {table.time && <div className="text-gray-400 text-sm mt-2">{table.time}</div>}
      {table.name !== 'Bo\'sh' && <div className="text-gray-400 text-xs mt-1">{table.name}</div>}
    </div>
  </div>
);

export default TableItem;
