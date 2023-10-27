"use client"

// MapChart.tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

import worldGeoJSON from './_config/world.json';

const MapChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize ECharts instance
    const chart = echarts.init(chartRef.current);

    // Register World map
    echarts.registerMap('world', worldGeoJSON as any);

    // ECharts configuration
    const options: echarts.EChartsOption = {
      title: {
        text: 'World Map Chart',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}',
      },
      visualMap: {
        left: 'right',
        min: 0,
        max: 1500000000,
        inRange: {
          color: [
            '#e0ffff',
            '#c1e7e7',
            '#a8d3d3',
            '#79bcbc',
            '#3d7e7e',
            '#006666',
            '#004c4c',
            '#003333',
            '#001a1a',
          ],
        },
        text: ['High', 'Low'],
        calculable: true,
      },
      series: [
        {
          name: 'Population Estimates',
          type: 'map',
          roam: true,
          map: 'world',
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { name: 'Malaysia', value: 3300000 },
            { name: 'China (Mainland)', value: 1400000000 },
            { name: 'United States', value: 400000000 },
            // Add data for other regions in Malaysia as needed
          ],
        },
      ],
    };

    // Set the options
    chart.setOption(options);

    // Clean up
    return () => {
      chart.dispose(); // Dispose of the chart when the component is unmounted
    };
  }, []);

  return <div ref={chartRef} style={{ height: '500px', width: '100%' }} />;
};

export default MapChart;
