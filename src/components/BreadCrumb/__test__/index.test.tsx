// BreadCrumb.test.tsx
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import BreadCrumb, { BreadcrumbProps } from '..';

describe('BreadCrumb Component', () => {
  test('renders without links', () => {
    const items = [{ label: 'Home' }, { label: 'About' }, { label: 'Contact' }];
    const { getByText, queryByTestId } = render(<BreadCrumb items={items} />);
    
    // Check if each item label is rendered
    items.forEach(item => {
      expect(getByText(item.label)).toBeInTheDocument();
    });

    // Check if no link is present (using a test id)
    expect(queryByTestId('breadcrumb-link')).toBeNull();
  });

  test('renders with links', () => {
    const items = [{ label: 'Home', link: '/' }, { label: 'About', link: '/about' }, { label: 'Contact', link: '/contact' }];
    const { getByText } = render(<BreadCrumb items={items} />);
    
    // Check if each item label and link are rendered
    items.forEach(item => {
      const linkElement = getByText(item.label).closest('a');
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', item.link);
    });
  });

  test('renders mixed links and non-links', () => {
    const items = [
      { label: 'Home', link: '/' },
      { label: 'About', link: '/about' },
      { label: 'Contact' },
      { label: 'Blog', link: '/blog' },
    ];
    const { getByText } = render(<BreadCrumb items={items} />);
    
    // Check if each item label and link (if present) are rendered
    items.forEach(item => {
      const linkElement = getByText(item.label).closest('a');

      if (item.link) {
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', item.link);
      } else {
        // Check if non-link item label is rendered
        expect(getByText(item.label)).toBeInTheDocument();
      }
    });
  });
});
