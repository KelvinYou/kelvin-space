"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { decrypt, encrypt } from '@/utils/cryptoUtils';
import React, { useState } from 'react';

const CryptoDemo = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [encryptedData, setEncryptedData] = useState('');
  const [decryptedData, setDecryptedData] = useState('');

  const handleEncrypt = () => {
    const dataToEncrypt = { username, password };
    const encryptedResult = encrypt(dataToEncrypt);
    setEncryptedData(encryptedResult);
  };

  const handleDecrypt = () => {
    const decryptedResult = decrypt(encryptedData);
    setDecryptedData(JSON.stringify(decryptedResult, null, 2));
  };

  return (
    <div>
      <h2>Crypto Demo</h2>
      <Label>
        Username:
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Label>
      <br />
      <Label>
        Password:
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Label>
      <br />
      <Button onClick={handleEncrypt}>Encrypt</Button>
      
      <Button onClick={handleDecrypt}>Decrypt</Button>

      {encryptedData && (
        <div>
          <h3>Encrypted Data:</h3>
          <pre>{encryptedData}</pre>
        </div>
      )}

      {decryptedData && (
        <div>
          <h3>Decrypted Data:</h3>
          <pre>{decryptedData}</pre>
        </div>
      )}
    </div>
  );
};

export default CryptoDemo;
