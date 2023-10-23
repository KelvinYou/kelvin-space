"use client";
import React, { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import "./watermark.css";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { toPng, toSvg } from 'html-to-image';
import { FileFormat, downloadFile } from '@/utils/fileUtils';

const Watermark: FC = () => {
  const imgContainerRef = useRef<any>(null);
  const [watermark, setWatermark] = useState<boolean>(true);
  const [customWatermark, setCustomWatermark] = useState<string>("Example");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const imgContainerSelector = imgContainerRef.current.querySelector(
      ".watermarked"
    );

    if (selectedImage) {
      if (watermark) {
        imgContainerSelector.dataset.watermark = (
          customWatermark + "   "
        ).repeat(300);
      } else {
        imgContainerSelector.dataset.watermark = "";
      }
    }

  }, [watermark, selectedImage, customWatermark]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const toggleWatermark = () => {
    setWatermark(!watermark);
  };

  const handleCustomWatermarkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomWatermark(e.target.value);
  };

  const [color, setColor] = useState<string>('rgb(133, 133, 133)');

  const handleColorChange = (e: any) => {
    const code = e?.[0];

    setColor(`rgb(${code}, ${code}, ${code})`);
  };

  const watermarkedRef = useRef<any>(null);

  const downloadSVG = () => {
    toSvg(watermarkedRef.current)
      .then((dataUrl: string) => {
        const link = document.createElement('a');
        link.download = 'watermarked.svg';
        link.href = dataUrl;
        link.click();
      })
      .catch((error: Error) => console.error('Error generating PNG:', error));
  };

  const downloadPNG = () => {
    toPng(watermarkedRef.current)
      .then((dataUrl: string) => {
        const link = document.createElement('a');
        link.download = 'watermarked.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error: Error) => console.error('Error generating PNG:', error));
  };

  return (
    <>
      <div ref={imgContainerRef}>
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        <br />
        {selectedImage && (
          <>
            <div ref={watermarkedRef} className="watermarked flex items-center h-[500px] justify-center mt-5 
              w-full" style={{ color }} data-watermark={customWatermark}>
              <Image 
                src={selectedImage}
                alt="image"     
                width={500}
                height={500}
                // layout='fill'
                // objectFit='contain'
              />
            </div>

          </>

        )}

        <div className='mt-4'>
          <label>Custom Watermark: </label>
          <Input
            type="text"
            value={customWatermark}
            onChange={handleCustomWatermarkChange}
          />
        </div>

        <Slider 
        onValueChange={(e) => { handleColorChange(e) }}
        defaultValue={[133]} max={255} step={1} 
        className='mt-8' />

        <Button className="mt-5" onClick={toggleWatermark}>{watermark ? "Remove" : "Add"} {" "}watermark</Button>
          
        <div className='flex justify-center mt-4'>
          <Button onClick={() => downloadFile(watermarkedRef, FileFormat.SVG)} className='mr-2'>
            Download as SVG
          </Button>
          <Button onClick={() => downloadFile(watermarkedRef, FileFormat.PNG, "my watermarked")}>
            Download as PNG
          </Button>
        </div>
      </div>
    </>

  );
};

export default Watermark;
