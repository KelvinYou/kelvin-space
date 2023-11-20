import React from 'react'
import BarChart from './BarChart'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import LineChart from './LineChart'
import PieChart from './PieChart'
import DemoChart from './DemoChart'
import type { Metadata } from 'next'
import BreadCrumb from '@/components/BreadCrumb'
import { COMPONENT_CHART_PATH, COMPONENT_PATH, HOME_PATH } from '@/constants/menu'
import BarRaceChart from '@/components/Chart/BarRaceChart'

export const metadata: Metadata = {
  title: 'Chart | Kelvin You\'s Space',
  description: 'With our free graph and chart templates you can create beautiful charts and graphics in minutes ... Schedule a Demo. Resourses. Blog · Webinars · Video Tutorials ...',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Component', link: COMPONENT_PATH },
  { label: 'Chart', link: COMPONENT_CHART_PATH  },
];

const Page = () => {
  const initialData: number[] = [];
  for (let i = 0; i < 5; ++i) {
    initialData.push(Math.round(Math.random() * 200));
  }

  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Demo Chart</CardTitle>
            <CardDescription>Data will be generated randomly, refresh the page to see the changes</CardDescription>
          </CardHeader>
          <CardContent>
            <DemoChart />
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
            <CardTitle>Bar Race Chart</CardTitle>
            <CardDescription>Data will be generated randomly, refresh the page to see the changes</CardDescription>
          </CardHeader>
          <CardContent>
            <BarRaceChart initialData={initialData} />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Bar Chart</CardTitle>
            <CardDescription>I use the Apache ECharts as my primary chart</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart id="1"/>
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
            <CardTitle>Line Chart</CardTitle>
            <CardDescription>I use the Apache ECharts as my primary chart</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart id="2"/>
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
            <CardTitle>Pie Chart</CardTitle>
            <CardDescription>I use the Apache ECharts as my primary chart</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart id="3"/>
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