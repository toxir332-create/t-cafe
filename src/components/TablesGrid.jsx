import React from 'react';
import TableItem from './TableItem';

const TablesGrid = ({ tables, toggleTableStatus }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    {tables.map((table) => (
      <div key={table.id} onClick={() => toggleTableStatus(table.id)}>
        <TableItem table={table} />
      </div>
    ))}
  </div>
);

export default TablesGrid;
