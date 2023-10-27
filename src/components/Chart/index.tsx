"use client";

import React, { FC, useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';
import { useTheme } from 'next-themes';

interface ChartProps extends React.HTMLProps<HTMLDivElement> {
  type: string;
  option: EChartsOption;
  className?: string; // Make style property optional
}

const Chart: FC<ChartProps> = ({ 
  type, 
  option, 
  className = "w-full h-[400px]", 
  ...props 
}) => {
  const { theme } = useTheme();
  
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentChartRef = chartRef.current;

    if (currentChartRef) {
      const myChart = echarts.init(currentChartRef, theme);

      // Set the chart options
      myChart.setOption(option);

      // Make the chart responsive by listening to window resize events
      const handleResize = () => {
        myChart.resize();
      };

      window.addEventListener('resize', handleResize);

      // Cleanup the chart when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, [option, theme]);

  return <div ref={chartRef} className={className} {...props} />;
};

export type { EChartsOption };
export default Chart;