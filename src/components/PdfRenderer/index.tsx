import ReactPDF from '@react-pdf/renderer';
import dynamic from 'next/dynamic';
import DynamicNoSSR from './DynamicNoSSR';

export const {
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
  PDFDownloadLink,
} = ReactPDF;

export type Style = ReactPDF.Styles[string];

export const PdfViewer = DynamicNoSSR(() => import('./PdfViewer'));
export const PdfDownloader = DynamicNoSSR(() => import('./PdfDownloader'));

export * from '@react-pdf/renderer';
