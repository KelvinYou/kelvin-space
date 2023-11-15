"use client";

import React, { FC, useState } from 'react'
import * as ReactPDF from '@/components/PdfRenderer';
import { styles } from './style';

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
} = ReactPDF;



const PDFResumeDocument: FC = () => {
  return (
    <Document
      title={`Resume | Kelvin You`} 
      author={'Kelvin You'}
      keywords={'software,developer,javascript,nodejs'}
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.text}>Name</Text>
      </Page>
    </Document>
  );
}

export default PDFResumeDocument;