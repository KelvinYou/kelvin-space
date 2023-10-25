import React from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

const escapeRegExp = (text: string) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const highlightText = (text: string, highlightedText: string[] | undefined) => {
  if (!highlightedText || highlightedText.length === 0) {
    return <span>{text}</span>;
  }

  const escapedHighlightedText = highlightedText.map(escapeRegExp);
  const parts = text.split(new RegExp(`(${escapedHighlightedText.join('|')})`, 'gi'));

  return parts.map((part, index) => {
    return highlightedText.includes(part) ? (
      <span key={index} className="text-blue-600 font-bold">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  });
};


const Ciphers = () => {
  const initCiphers = [
    {
      name: 'AES',
      description: 'The Advanced Encryption Standard (AES) is a U.S. Federal Information Processing Standard (FIPS). It was selected after a 5-year process where 15 competing designs were evaluated.',
      highlightedText: ['Advanced Encryption Standard (AES)']
    },
    {
      name: 'DES',
      description: 'Data Encryption Standard (DES) is a previously dominant algorithm for encryption, and was published as an official Federal Information Processing Standard (FIPS). DES is now considered to be insecure due to the small key size.',
      highlightedText: ['Data Encryption Standard (DES)']
    },
    {
      name: 'Triple DES',
      description: 'Triple DES applies DES three times to each block to increase the key size. The algorithm is believed to be secure in this form.',
    },
    {
      name: 'Rabbit',
      description: 'Rabbit is a high-performance stream cipher and a finalist in the eSTREAM Portfolio. It is one of the four designs selected after a 3 1/2-year process where 22 designs were evaluated.',
    },
    {
      name: 'RC4',
      description: 'RC4 is a widely-used stream cipher. It\'s used in popular protocols such as SSL and WEP. Although remarkable for its simplicity and speed, the algorithm\'s history doesn\'t inspire confidence in its security.',
    },
    {
      name: 'RC4Drop',
      description: 'It was discovered that the first few bytes of keystream are strongly non-random and leak information about the key. We can defend against this attack by discarding the initial portion of the keystream. This modified algorithm is traditionally called RC4-drop',
    },
  ];

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initCiphers.map((cipher, index) => (
            <TableRow key={index + cipher.name}>
              <TableCell>{cipher.name}</TableCell>
              <TableCell>
                {highlightText(cipher.description, cipher.highlightedText)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Ciphers;
