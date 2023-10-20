"use client";
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  GridComponentOption,
  LegendComponent
} from 'echarts/components';
import { LineChart as ELineChart, LineSeriesOption} from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { FC, useEffect } from 'react';
import { useTheme } from 'next-themes';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ELineChart,
  CanvasRenderer,
  UniversalTransition
]);

type EChartsOption = echarts.ComposeOption<GridComponentOption | LineSeriesOption>;

type LineChartType = {
  id: string,
  legendData: string[],
  xAxisData: string[],
  seriesData: any[],
}

const LineChart: FC<LineChartType> = (props) => {
  const { 
    id = "echart", 
    legendData = [],
    xAxisData = [],
    seriesData = [],
  } = props;
  const { theme } = useTheme();

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: legendData
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {} // download
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxisData
    },
    yAxis: {
      type: 'value'
    },
    series: seriesData
  };

  useEffect(() => {
    const chartDom = document.getElementById(id);

    const myChart = echarts.init(chartDom, theme);

    // Set the chart options
    myChart.setOption(option);

    // Make the chart responsive by listening to window resize events
    window.addEventListener('resize', () => {
      myChart.resize();
    });

    // Cleanup the chart when the component unmounts
    return () => {
      window.removeEventListener('resize', () => {
        myChart.resize();
      });
      myChart.dispose();
    };
  }, [theme, option]);

  return (
    <div id={id} style={{ height: '400px', width: '100%' }}></div>
  );
}

export default LineChart;