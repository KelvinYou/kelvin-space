"use client";
import React, { useState, ChangeEvent, useRef } from 'react';
import QRCode from 'qrcode.react';
import { Input } from '@/components/ui/input';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { Button } from '@/components/ui/button';
import { FileFormat, downloadFile } from '@/utils/fileUtils';

import "./index.scss";


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

      <div className='flex flex-col items-center justify-center mt-4'>
        <h3>{text}</h3>
        <div ref={qrCodeRef} className='p-4 bg-white'>
          <QRCode value={text} />
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <Button 
          onClick={() => downloadFile(qrCodeRef, FileFormat.SVG)} 
          className='mr-2 download-qr-btn' 
          variant={'outline'}
        >
          Download as SVG
        </Button>
        <Button 
          onClick={() => downloadFile(qrCodeRef, FileFormat.PNG)} 
          className='download-qr-btn'
          variant={'outline'}
        >
          Download as PNG
        </Button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
