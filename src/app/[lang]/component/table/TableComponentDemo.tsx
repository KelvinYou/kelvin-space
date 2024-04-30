"use client";

import { sortByKey } from '@/utils/arrayUtils';
import { ArrowDownUp } from 'lucide-react';
import React, { useState } from 'react';

interface TableColumn {
  key: string;
  label: string;
}

interface TableRow {
  [key: string]: string | number; // Assuming column values can be string or number
}

interface TableData {
  columns: TableColumn[];
  rows: TableRow[];
}

const TableComponent: React.FC<{ data: TableData }> = ({ data }) => {
  const [sortedRows, setSortedRows] = useState<TableRow[]>(data.rows);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortKey, setSortKey] = useState<string>('');

  const handleSort = (key: string) => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    setSortKey(key);
    const sorted = sortByKey(data.rows, key, newSortOrder);
    setSortedRows(sorted);
  };

  return (
    <table>
      <thead>
        <tr>
          {data.columns.map((column, index) => (
            <th key={index} onClick={() => handleSort(column.key)}>
              {column.label}
              <ArrowDownUp />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {data.columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TableComponentDemo: React.FC = () => {
  const data: TableData = {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
    ],
    rows: [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 },
    ],
  };

  return <TableComponent data={data} />;
};

export default TableComponentDemo;
