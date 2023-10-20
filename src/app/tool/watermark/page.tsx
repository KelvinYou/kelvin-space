import React from 'react'
import Watermark from './Watermark'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

const Page = () => {
  return (
    <>
      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Watermark</CardTitle>
            <CardDescription>Still searching the best way and improve...</CardDescription>
          </CardHeader>
          <CardContent>
            <Watermark />

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