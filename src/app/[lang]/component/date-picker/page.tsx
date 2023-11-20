import { HOME_PATH, COMPONENT_PATH, COMPONENT_DATE_PICKER_PATH } from '@/constants/menu';
import { Metadata } from 'next';
import React from 'react'
import { DatePickerDemo } from './DatePickerDemo';
import BreadCrumb from '@/components/BreadCrumb';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { DatePickerWithRange } from './DatePickerWithRange';
import { DatePickerWithPresets } from './DatePickerWithPresets';
import { DatePickerForm } from './DatePickerForm';
import { DateRangePicker } from './DateRangePicker';

export const metadata: Metadata = {
  title: 'Date Picker | Kelvin You\'s Space',
  description: 'A space that to record my love',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Component', link: COMPONENT_PATH },
  { label: 'Date Picker', link: COMPONENT_DATE_PICKER_PATH },
];

const DatePickerPage = () => {
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Date Picker Demo</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <DatePickerDemo />

          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>With Range</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <DatePickerWithRange />

          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>With Presets</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <DatePickerWithPresets />

          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>With Form</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <DatePickerForm />

          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Date Range Picker</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <DateRangePicker />

          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>


    </div>
  )
}

export default DatePickerPage