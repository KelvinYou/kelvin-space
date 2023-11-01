"use client"

import React from 'react';
import { CodeBlock as ReactCodeBlock, a11yLight, a11yDark } from 'react-code-blocks';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, showLineNumbers = false }) => {
  return (
    <ReactCodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={a11yDark}
    />
  );
};

export default CodeBlock;
