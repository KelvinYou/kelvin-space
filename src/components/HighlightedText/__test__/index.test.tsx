// __tests__/HighlightText.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import HighlightText from '..';

describe('HighlightText Component', () => {
  test('renders without className', () => {
    const text = 'This is a sample text.';
    const highlightedText = ['sample'];

    const { getByText } = render(<HighlightText text={text} highlightedText={highlightedText} />);

    expect(getByText(/This is a/).tagName).toBe('SPAN');
    expect(getByText(/sample/)).toHaveClass('text-blue-500', 'font-bold');
    // expect(getByText(/text\./)).toHaveClass();
  });

  test('renders with className', () => {
    const text = 'This is another sample text.';
    const highlightedText = ['another', 'text'];

    const { getByText } = render(
      <HighlightText text={text} highlightedText={highlightedText} className="custom-class custom-class2" />
    );

    expect(getByText(/This is/).tagName).toBe('SPAN');
    expect(getByText(/another/)).toHaveClass('text-blue-500', 'font-bold', 'custom-class', 'custom-class2');
    expect(getByText(/text/)).toHaveClass('text-blue-500', 'font-bold', 'custom-class', 'custom-class2');
    // expect(getByText(/sample text\./)).toHaveClass(); 
  });

  test('renders without highlightedText', () => {
    const text = 'No highlighted text.';
    const { getByText } = render(<HighlightText text={text} highlightedText={undefined} />);

    expect(getByText(/No highlighted text\./).tagName).toBe('SPAN');
  });
});
