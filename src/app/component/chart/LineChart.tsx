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
  id: string
}

const LineChart: FC<LineChartType> = (props) => {
  const { id = "echart" } = props;
  const { theme } = useTheme();

  const option: EChartsOption = {
    title: {
      text: 'Stacked Line'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
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