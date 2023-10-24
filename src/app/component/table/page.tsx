import ProgressBar from '@/components/ProgressBar'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import type { Metadata } from 'next'
import { COMPONENT_PATH, COMPONENT_TABLE_PATH, HOME_PATH } from '@/constants/menu'
import BreadCrumb from '@/components/BreadCrumb'
import { TableDemo } from './TableDemo'
import { DataTableDemo } from './DataTableDemo'

export const metadata: Metadata = {
  title: 'Progress Bar | Kelvin You\'s Space',
  description: 'A space that to record my love',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Component', link: COMPONENT_PATH },
  { label: 'Table', link: COMPONENT_TABLE_PATH },
];

const Page = () => {
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Table Demo</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <TableDemo />
          </CardContent>
          <CardFooter>
            {/* <p>Reference: 
              <a href="https://echarts.apache.org/examples/en/index.html" target="_blank">
                https://echarts.apache.org/examples/en/index.html
              </a>
            </p> */}
          </CardFooter>
        </Card>
      </div>

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Data Table Demo</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <DataTableDemo />
          </CardContent>
          <CardFooter>
            {/* <p>Reference: 
              <a href="https://echarts.apache.org/examples/en/index.html" target="_blank">
                https://echarts.apache.org/examples/en/index.html
              </a>
            </p> */}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Page