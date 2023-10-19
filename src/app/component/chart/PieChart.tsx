"use client";
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponentOption
} from 'echarts/components';
import { PieChart as EPieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { FC, useEffect } from 'react';
import { useTheme } from 'next-themes';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  EPieChart,
  CanvasRenderer,
  LabelLayout
]);

type EChartsOption = echarts.ComposeOption<GridComponentOption | PieSeriesOption>;

type PieChartType = {
  id: string
}

const PieChart: FC<PieChartType> = (props) => {
  const { id = "echart" } = props;
  const { theme } = useTheme();

  useEffect(() => {
    const chartDom = document.getElementById(id);

    const myChart = echarts.init(chartDom, theme);

    const option: EChartsOption = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

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
  }, [theme]);

  return (
    <div id={id} style={{ height: '400px', width: '100%' }}></div>
  );
}

export default PieChart;