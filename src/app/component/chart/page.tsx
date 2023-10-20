import React from 'react'
import BarChart from './BarChart'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import LineChart from './LineChart'
import PieChart from './PieChart'
import DemoChart from './DemoChart'

const Page = () => {
  return (
    <>
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
    </>
  )
}

export default Page