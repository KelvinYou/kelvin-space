import React, { FC, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  GridComponentOption,
  LegendComponent,
} from 'echarts/components';
import { LineChart as ELineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ELineChart,
  CanvasRenderer,
  UniversalTransition,
]);

type EChartsOption = echarts.ComposeOption<GridComponentOption | LineSeriesOption>;

interface LineChartProps {
  legendData: string[];
  xAxisData: string[];
  seriesData: any[];
}

const LineChart: FC<LineChartProps> = ({ legendData = [], xAxisData = [], seriesData = [] }) => {
  const { theme } = useTheme();
  const chartRef = useRef<HTMLDivElement>(null);

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: legendData,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {}, // download
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
    },
    series: seriesData,
  };

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
  }, [theme, option]);

  return <div ref={chartRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default LineChart;
