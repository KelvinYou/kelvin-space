"use client";

import React, { FC, useState } from 'react'
import * as ReactPDF from '@/components/PdfRenderer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PDFResumeDocument from './PdfResumeDocument';

const {
  PdfViewer,
  PdfDownloader
} = ReactPDF;

const PdfResume: FC = () => {
  const [render, setRender] = useState("as1a");

  return (
    <div className=''>
      <div className='mt-4'>
        <PdfDownloader
          document={
            <PDFResumeDocument />
          }
          fileName='demo'
        >
          <Button className='w-full max-w-[200px]'>Download</Button>
        </PdfDownloader>
      </div>

      <div className='mt-4 h-[500px]'>
        <PdfViewer>
          <PDFResumeDocument />
        </PdfViewer>

      </div>
    </div>
  );
}

export default PdfResume;
