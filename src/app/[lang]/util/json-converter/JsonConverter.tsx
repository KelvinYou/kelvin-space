"use client";

import { Button } from '@/components/ui/button';
import { jsonToString, stringToJson } from '@/utils/jsonConverter';
import React, { useState } from 'react';

const JsonConverter = () => {
  const [jsonData, setJsonData] = useState<any>({ name: 'John', age: 30 });
  const [jsonString, setJsonString] = useState<string>('');

  const handleConvertToJsonString = () => {
    const jsonString = jsonToString(jsonData);
    if (jsonString !== null) {
      setJsonString(jsonString);
    }
  };

  const handleConvertToJsonData = () => {
    const jsonData = stringToJson(jsonString);
    if (jsonData !== null) {
      setJsonData(jsonData);
    }
  };

  return (
    <div>
      <Button onClick={handleConvertToJsonString}>Convert to JSON String</Button>
      <Button onClick={handleConvertToJsonData} disabled={jsonString === ''}>Convert to JSON Data</Button>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-3'>
        <div>
          <h2>String</h2>
          <textarea 
            className='bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-sm w-full'
            value={jsonString} 
            onChange={(e) => setJsonString(e.target.value)} 
            rows={5} 
            cols={50} 
          />
        </div>

        <div>
          <h2>JSON</h2>
          <pre className='bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-sm w-full'>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      </div>

    </div>
  )
}

export default JsonConverter
