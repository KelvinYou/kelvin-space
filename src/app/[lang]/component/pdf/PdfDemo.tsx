"use client";

import React, { FC, useState } from 'react'
import * as ReactPDF from '@/components/PdfRenderer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const {
  G,
  Svg,
  View,
  Text,
  Link,
  Page,
  Note,
  Path,
  Rect,
  Line,
  Stop,
  Defs,
  Image,
  Tspan,
  Canvas,
  Circle,
  Ellipse,
  Polygon,
  Document,
  Polyline,
  ClipPath,
  LinearGradient,
  RadialGradient,
  StyleSheet,
  PdfViewer,
  PdfDownloader
} = ReactPDF;

const styles = StyleSheet.create({
  text: {
    fontSize: 36
  }
});

const PDFDocumentDemo: FC<{ text: string }> = ({ text }) => {
  return (
    <Document>
      <Page>
        <Text style={styles.text}>{text}</Text>
      </Page>
    </Document>
  );
}

const PdfDemo: FC = () => {
  const [inputText, setInputText] = useState('Type any text here ...');

  return (
    <div className=''>
      <Input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Enter text'
      />
      
      <div className='mt-4'>
        <PdfDownloader
          document={
            <PDFDocumentDemo text={inputText} />
          }
          fileName='demo'
        >
          <Button className='w-full max-w-[200px]'>Download</Button>
        </PdfDownloader>
      </div>


      <div className='mt-4 h-[500px]'>
        <PdfViewer>
          <PDFDocumentDemo text={inputText} />
        </PdfViewer>

      </div>
    </div>
  );
}

export default PdfDemo;
