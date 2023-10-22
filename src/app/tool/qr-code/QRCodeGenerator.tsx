"use client";
import React, { useState, ChangeEvent, useRef } from 'react';
import QRCode from 'qrcode.react';
import { Input } from '@/components/ui/input';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { Button } from '@/components/ui/button';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const qrCodeRef = useRef<any>(null);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const downloadSVG = () => {
    toSvg(qrCodeRef.current)
      .then((dataUrl: string) => {
        const link = document.createElement('a');
        link.download = 'qrcode.svg';
        link.href = dataUrl;
        link.click();
      })
      .catch((error: Error) => console.error('Error generating PNG:', error));
  };

  const downloadPNG = () => {
    toPng(qrCodeRef.current)
      .then((dataUrl: string) => {
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error: Error) => console.error('Error generating PNG:', error));
  };

  return (
    <div>
      <Input
        type="text"
        id="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text or URL"
      />

      <div ref={qrCodeRef} className='flex flex-col items-center justify-center'>
        <h3>{text}</h3>
        <div >
          <QRCode value={text} />
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <Button onClick={downloadSVG} className='mr-2'>
          Download as SVG
        </Button>
        <Button onClick={downloadPNG}>
          Download as PNG
        </Button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
