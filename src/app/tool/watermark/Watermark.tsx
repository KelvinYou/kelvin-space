"use client";
import React, { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import "./watermark.css";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Watermark: FC = () => {
  const imgContainerRef = useRef<any>(null);
  const [watermark, setWatermark] = useState<boolean>(true);
  const [customWatermark, setCustomWatermark] = useState<string>("Example");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const imgContainerSelector = imgContainerRef.current.querySelector(
      ".watermarked"
    );

    console.log("watermark ", watermark);

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

  return (
    <div className="App" ref={imgContainerRef}>

      <Input type="file" accept="image/*" onChange={handleImageChange} />
      <br />
      <br />

      <div>
        <label>Custom Watermark: </label>
        <Input
          type="text"
          value={customWatermark}
          onChange={handleCustomWatermarkChange}
        />
      </div>

      {selectedImage && (
        <div className="watermarked flex items-center justify-center mt-5 w-full" data-watermark={customWatermark}>
          <Image 
          src={selectedImage}
          alt="image"     
          width={500}
          height={500}
          // layout='fill'
          // objectFit='contain'
          />
        </div>
      )}

      <Button className="mt-5" onClick={toggleWatermark}>{watermark ? "Remove" : "Add"} {" "}watermark</Button>
    </div>
  );
};

export default Watermark;
