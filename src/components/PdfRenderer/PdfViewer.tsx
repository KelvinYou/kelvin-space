

import React, { ReactNode } from 'react';
import { PDFViewer } from '.';

interface PdfViewProps {
  children: React.JSX.Element;
}

const PdfViewer: React.FC<PdfViewProps> = ({ children }) => {
  return (
    <PDFViewer className='w-full h-full'>
      {children}
    </PDFViewer>
  );
};

export default PdfViewer;
