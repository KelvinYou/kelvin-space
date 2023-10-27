"use client";

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useTheme } from 'next-themes';

interface BarRaceChartProps {
  initialData: number[];
}

const BarRaceChart: React.FC<BarRaceChartProps> = ({ initialData }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current, theme);

    const option: echarts.EChartsOption = {
      xAxis: {
        max: 'dataMax',
      },
      yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 4,
      },
      series: [
        {
          realtimeSort: true,
          name: 'X',
          type: 'bar',
          data: initialData,
          label: {
            show: true,
            position: 'right',
            valueAnimation: true,
          },
        },
      ],
      legend: {
        show: true,
      },
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
    };

    chart.setOption(option);

    // Function to update chart data
    const updateChart = () => {
      const newData = initialData.map((value) => {
        return Math.random() > 0.9 ? value + Math.round(Math.random() * 2000) : value + Math.round(Math.random() * 200);
      });

      chart.setOption<echarts.EChartsOption>({
        series: [
          {
            type: 'bar',
            data: newData,
          },
        ],
      });
    };

    // Initial run after 0ms and then at intervals
    setTimeout(() => {
      updateChart();
    }, 0);

    const intervalId = setInterval(() => {
      updateChart();
    }, 3000);

    // Cleanup
    return () => {
      chart.dispose();
      clearInterval(intervalId);
    };
  }, [initialData, theme]);

  return <div ref={chartRef} style={{ height: '500px', width: '100%' }} />;
};

export default BarRaceChart;
