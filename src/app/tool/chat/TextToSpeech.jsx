"use client"

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = () => {
  const [text, setText] = useState('Welcome to My Space! Don\'t be shy to follow my LinkedIn');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const { speak, voices } = useSpeechSynthesis();

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleVoiceChange = (event) => {
    const selectedVoiceName = event.target.value;
    const voice = voices.find((v) => v.name === selectedVoiceName);
    setSelectedVoice(voice);
  };

  const handleSpeak = () => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      speak(utterance);
    }
  };

  return (
    <div>
      <h1>Text to Speech App</h1>

      <Textarea
        rows="4"
        cols="50"
        placeholder="Enter text here..."
        value={text}
        onChange={handleInputChange}
      />

      <div className='mt-5'>
        <label>Select Voice: </label>
        <select onChange={handleVoiceChange}>
          <option value="">Default</option>
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </div>

      <Button onClick={handleSpeak}>Speak</Button>
    </div>
  );
};

export default TextToSpeech;
