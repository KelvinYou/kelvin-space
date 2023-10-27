import React from 'react'
// import WorldMap from "@/components/Map/WorldMap";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import MapChart from '@/components/MapChart';

const MapPage = () => {
  return (
    <div className='p-4'>
      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>World Map</CardTitle>
            <CardDescription>Demo</CardDescription>
          </CardHeader>
          <CardContent>
            <MapChart />
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

export default MapPage