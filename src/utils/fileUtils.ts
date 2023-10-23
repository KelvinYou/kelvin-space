// fileUtils.tsx
import { toPng, toSvg } from 'html-to-image';

// Define an enum for file formats
export enum FileFormat {
  SVG = 'svg',
  PNG = 'png',
}

export const downloadFile = (
  ref: React.RefObject<HTMLElement> | null, 
  format: FileFormat, 
  filename: string = "file") => {
  // Check if ref is not null before proceeding
  if (ref && ref.current) {
    const downloadFunction = format === FileFormat.SVG ? toSvg : toPng;

    downloadFunction(ref.current)
      .then((dataUrl: string) => {
        const extension = format === FileFormat.SVG ? 'svg' : 'png';
        const link = document.createElement('a');
        link.download = `${filename}.${extension}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((error: Error) => console.error(`Error generating ${format.toUpperCase()}:`, error));
  } else {
    console.error('Ref is null or undefined.');
  }
};
