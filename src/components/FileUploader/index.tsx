"use client"

import React, { useState, ChangeEvent, DragEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FileUploaderProps {
  onFilesUpload: (files: File[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFilesUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [labelText, setLabelText] = useState<string>('Select a File');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files: File[] = Array.from(e.target.files);
      setSelectedFiles(files);

      // Update label text with the names of selected files
      const fileNames = files.map(file => file.name).join(', ');
      setLabelText(fileNames || 'Select a File');
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.items) {
      const files: File[] = Array.from(e.dataTransfer.items)
        .filter(item => item.kind === 'file')
        .map(item => item.getAsFile() as File);

      setSelectedFiles(files);

      // Update label text with the names of selected files
      const fileNames = files.map(file => file.name).join(', ');
      setLabelText(fileNames || 'Select a File');
    }
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      onFilesUpload(selectedFiles);
      setSelectedFiles([]);
      setLabelText('Select a File');
    }
  };

  const preventDefault = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={preventDefault}
      onDragEnter={preventDefault}
    >

      {selectedFiles.length === 0 && <label 
        htmlFor="file-input" 
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {/* PNG, JPG or JPEG */}
          </p>
        </div>
      </label>}
      
      {selectedFiles.length !== 0 && 
        <>
          <label id="file-input-label" htmlFor="file-input">
            {labelText}
          </label>

          <br/>

          <Button className='mt-2' onClick={handleUpload}>
            Upload
          </Button>
        </>

      }

      <Input type="file" id="file-input" onChange={handleFileChange} multiple className='hidden'/>

    </div>
  );
};

export default FileUploader;
