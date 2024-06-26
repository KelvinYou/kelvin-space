import ReactPDF from '@react-pdf/renderer';
import dynamic from 'next/dynamic';
import DynamicNoSSR from './utils';

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
  Font,
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
  PDFViewer
} = ReactPDF;

export type Style = ReactPDF.Styles[string];

export const PdfViewer = DynamicNoSSR(() => import('./_components/PdfViewer'));
export const PdfDownloader = DynamicNoSSR(() => import('./_components/PdfDownloader'));
