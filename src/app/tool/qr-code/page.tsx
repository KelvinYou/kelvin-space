import React from 'react'
import QRCodeGenerator from './QRCodeGenerator'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QR Code Generator | Kelvin You\'s Space',
  description: 'The best QR Code Generator for your company. Start creating QR Codes now. Also, monitor the number of scans, their locations, and the dates of your QR Codes. QR Code with Logo. Free QR Codes. QR Code for Website URL.',
}

const Page = () => {
  return (
    <div className='p-4'>
      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>QR Code Generator</CardTitle>
            <CardDescription>Still searching the best way and improve...</CardDescription>
          </CardHeader>
          <CardContent>
            <QRCodeGenerator />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
      
    </div>
  )
}

export default Page