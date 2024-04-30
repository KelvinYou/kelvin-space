"use client";
import dayjs from 'dayjs'; // Import dayjs
import React, { useState } from 'react'
import { useInterval } from 'usehooks-ts'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


const FormatDates = () => {
  const initFormattedDates = [
    {
      id: 1,
      format: 'DD MMMM YYYY, h:mm:ss a',
      output: dayjs().format('Do MMMM YYYY, h:mm:ss a'),
    },
    {
      id: 2,
      format: 'dddd',
      output: dayjs().format('dddd'),
    },
    {
      id: 3,
      format: 'DD MMM YY',
      output: dayjs().format('Do MMM YY'),
    },
    {
      id: 4,
      format: '',
      output: dayjs().format(),
    },
  ];
  
  const [formattedDates, setFormattedDates] = useState<typeof initFormattedDates>(initFormattedDates);

  const updateDateTime = () => {
    const updatedDates = formattedDates.map((date) => ({
      ...date,
      output: dayjs().format(date.format),
    }));

    setFormattedDates(updatedDates);
  };

  useInterval(updateDateTime, 1000);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-1/2'>Format</TableHead>
            <TableHead className='w-1/2'>Output</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formattedDates.map((formattedDate, index) => {
            return (
              <TableRow key={formattedDate.id + index}>
                <TableCell>{`dayjs().format(${formattedDate.format})`}</TableCell>
                <TableCell>{formattedDate.output}</TableCell>
              </TableRow>
            )
          })}

        </TableBody>
      </Table>

    </>

  )
}

export default FormatDates
