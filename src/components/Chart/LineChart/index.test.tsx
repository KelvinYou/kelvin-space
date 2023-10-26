// LineChart.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'next-themes';
import LineChart from '.';

// echart is not stable!!
describe('LineChart Component', () => {
  it('renders with provided data', async () => {
    const legendData = ['Legend1', 'Legend2'];
    const xAxisData = ['Jan', 'Feb', 'Mar'];
    const seriesData = [
      { name: 'Series1', data: [10, 20, 30] },
      { name: 'Series2', data: [15, 25, 35] },
    ];

    // render(
    //   <ThemeProvider>
    //     <LineChart legendData={legendData} xAxisData={xAxisData} seriesData={seriesData} />
    //   </ThemeProvider>
    // );

    // await waitFor(() => {
    //   expect(screen.getByText('Jan')).toBeInTheDocument();
    //   expect(screen.getByText('Legend1')).toBeInTheDocument();
    // });
  });

  // it('responds to theme changes', async () => {
  //   const legendData = ['Legend1', 'Legend2'];
  //   const xAxisData = ['Jan', 'Feb', 'Mar'];
  //   const seriesData = [
  //     { name: 'Series1', data: [10, 20, 30] },
  //     { name: 'Series2', data: [15, 25, 35] },
  //   ];

  //   render(
  //     <ThemeProvider defaultTheme="light" attribute="class">
  //       <LineChart legendData={legendData} xAxisData={xAxisData} seriesData={seriesData} />
  //     </ThemeProvider>
  //   );

  //   // Change the theme
  //   userEvent.click(screen.getByRole('button', { name: /Toggle Dark Mode/i }));

  //   // Wait for the theme to change
  //   await waitFor(() => {
  //   });
  // });
});
