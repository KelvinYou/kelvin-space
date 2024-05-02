"use client";

import { Button } from '@/components/ui/button';
import { sortByKey } from '@/utils/arrayUtils';
import { ArrowDownUp } from 'lucide-react';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

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

const downloadAsXlsx = (data: TableData, filename: string) => {
  // Create an array to store the header titles
  const headerTitles = data.columns.map(column => `${column.label}`);

  // Create a new array of rows that includes the header titles as the first row
  const rowsWithHeader = [headerTitles, ...data.rows.map(row => data.columns.map(column => row[column.key]))];

  // Convert the rows to a worksheet
  const worksheet = XLSX.utils.aoa_to_sheet(rowsWithHeader);

  // Create a new workbook and add the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Save the workbook as a file with the provided filename
  XLSX.writeFile(workbook, filename);
};


const TableComponent: React.FC<{ data: TableData }> = ({ data }) => {
  const [sortedRows, setSortedRows] = useState<TableRow[]>(data.rows);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortKey, setSortKey] = useState<string>('');

  const handleDownload = () => {
    downloadAsXlsx(data, 'data.xlsx');
  };

  const handleSort = (key: string) => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    setSortKey(key);
    const sorted = sortByKey(data.rows, key, newSortOrder);
    setSortedRows(sorted);
  };

  return (
    <>
      <Button onClick={handleDownload}>Download</Button>

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
    </>

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
