import * as ReactPDF from '@/components/PdfRenderer';

const {
  Font,
  StyleSheet,
} = ReactPDF;

Font.register({
  family: 'Quicksand',
  fonts: [
    { src: '/assets/fonts/quicksand-v20-latin-regular.ttf' },
    { src: '/assets/fonts/quicksand-v20-latin-300.ttf', fontWeight: 300 },
    { src: '/assets/fonts/quicksand-v20-latin-600.ttf', fontWeight: 600 },
  ],
})

export const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    height: "100%",
    display: "flex",
    flexDirection: 'row',
  },
  text: {
    fontSize: 36,
    fontFamily: 'Quicksand',
  }
});