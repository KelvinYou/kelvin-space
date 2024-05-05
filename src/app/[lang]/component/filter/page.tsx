import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'

const FilterPage: React.FC = () => {
  return (
    <div className='p-4'>
      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Filter Demo</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            Pending
          </CardContent>

          <CardFooter>
            to include:

            date picker (calender) - startDate, endDate

            

            <br />
            Reference:
            <br />
            - web ui
            https://dribbble.com/shots/17312034-Web-Control-Panel-Filter-Page
            <br />
            - mobile ui
            https://dribbble.com/shots/21791516-Mobile-APP-Filters
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default FilterPage