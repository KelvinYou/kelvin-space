"use client"

import FileUploader from '@/components/FileUploader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import React, { useState } from 'react'

const LogCheckerPage: React.FC = () => {
  const [userWordCountMap, setUserWordCountMap] = useState<Map<string, number>>();

  const handleFilesUpload = async (files: File[]) => {
    try {
      // Process each file
      const textArray = await Promise.all(files.map(file => readFile(file)));

      // Filter out null values (unsupported file types)
      const validTextArray = textArray.filter(text => text !== null);

      // Combine text if multiple files
      const combinedText = validTextArray.join('\n');

      // Count words for each user
      setUserWordCountMap(countWordsByUser(combinedText));

      // Display the result
      console.log('Word count by user:', userWordCountMap);

    } catch (error) {
      console.error('Error handling files:', error);
    }
  };

  const countWordsByUser = (text: string): Map<string, number> => {
    const userWordCountMap = new Map<string, number>();
  
    const userLines = text.match(/<(\w+)>\s*(.*?)(?=(<\w+>|$))/gs);
    
    if (userLines) {
      userLines.forEach(line => {
        const match = line.match(/<(\w+)>/);
        const username = match && match[1];
  
        const chatWordsMatch = line.match(/<\w+>\s*(.*)/);
        const chatWords = chatWordsMatch && chatWordsMatch[1];
  
        // console.log("chatWords: ", chatWords)
        if (username && chatWords) {
          const wordCount = chatWords.split(/\s+/).length;
          userWordCountMap.set(username, (userWordCountMap.get(username) || 0) + wordCount);
        }
      });
    }
  
    return userWordCountMap;
  };
  

  const readFile = (file: File) => {
    return new Promise<string | null>((resolve, reject) => {
      if (file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result && typeof event.target.result === 'string') {
            resolve(event.target.result);
          } else {
            reject(new Error('Error reading file'));
          }
        };
        reader.onerror = () => {
          reject(new Error('Error reading file'));
        };
        reader.readAsText(file);
      } else {
        // Return null for unsupported file types
        resolve(null);
      }
    });
  };

  return (
    <div className='p-4'>
      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Chat Analysis</CardTitle>
            <CardDescription>Still searching the best way and improve...</CardDescription>
          </CardHeader>
          <CardContent>
            <FileUploader onFilesUpload={handleFilesUpload}/>
            {userWordCountMap && (
              <div>
                <h2>User Word Counts:</h2>
                <ul>
                  {Array.from(userWordCountMap.entries()).map(([username, wordCount]) => (
                    <li key={username}>{username}: {wordCount} words</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default LogCheckerPage