import BreadCrumb from '@/components/BreadCrumb'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { HOME_PATH, COMPONENT_PATH, COMPONENT_PDF_PATH } from '@/constants/menu';
import React from 'react'
import PdfDemo from './PdfDemo';

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Component', link: COMPONENT_PATH },
  { label: 'Pdf', link: COMPONENT_PDF_PATH },
];

const PdfPage = () => {
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

      <section className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>PDF Example</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <PdfDemo />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

export default PdfPage