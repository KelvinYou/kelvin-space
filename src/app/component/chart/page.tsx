import React from 'react'
import BarChart from './BarChart'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import LineChart from './LineChart'

const Page = () => {
  return (
    <>
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
    </>
  )
}

export default Page