"use client";
import moment from 'moment';
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
      format: 'Do MMMM YYYY, h:mm:ss a',
      output: moment().format('Do MMMM YYYY, h:mm:ss a'),
    },
    {
      id: 2,
      format: 'dddd',
      output: moment().format('dddd'),
    },
    {
      id: 3,
      format: 'Do MMM YY',
      output: moment().format('Do MMM YY'),
    },
    {
      id: 4,
      format: '',
      output: moment().format(),
    },
  ];
  
  const [formattedDates, setFormattedDates] = useState<typeof initFormattedDates>(initFormattedDates);

  const updateDateTime = () => {
    const updatedDates = formattedDates.map((date) => ({
      ...date,
      output: moment().format(date.format),
    }));

    setFormattedDates(updatedDates);
  };

  // Use the useInterval hook to call updateDateTime every second (1000 milliseconds)
  useInterval(updateDateTime, 1000);

  return (
    <>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
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
                <TableCell>{`moment().format(${formattedDate.format})`}</TableCell>
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