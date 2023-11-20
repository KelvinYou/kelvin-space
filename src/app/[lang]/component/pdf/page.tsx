import BreadCrumb from '@/components/BreadCrumb'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { HOME_PATH, COMPONENT_PATH, COMPONENT_PDF_PATH } from '@/constants/menu';
import React from 'react'
import PdfDemo from './PdfDemo';
import PdfResume from '@/components/PdfRenderer/examples/PdfResume';

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

      <section className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>PDF Resume</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <PdfResume />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </section>

      <section className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Reference</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              https://github.com/przpiw/PDFResumeBuilder

              Learned how to render in React
            </div>
            
            <div>
              https://www.youtube.com/watch?v=HhLa-D0SXlI

              NextJS makes a clear distinction between what code runs on the client and the server, causing a lot of problems
              Learned how to implement dynamic SSR and how to solve routing problems
            </div>
            
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

export default PdfPage