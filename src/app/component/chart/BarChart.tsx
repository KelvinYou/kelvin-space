"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React, { FC, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { LegendComponent } from 'echarts/components';

import { GridComponent, GridComponentOption } from 'echarts/components';
import { BarChart as EBarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import BarChart from '@/components/Chart/BarChart';
import { EChartsOption } from '@/components/Chart';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  GridComponent, 
  EBarChart, 
  CanvasRenderer, 
  LegendComponent, 
  TooltipComponent,
]);

// type EChartsOption = echarts.ComposeOption<GridComponentOption | BarSeriesOption>;

type BarChartType = {
  id: string
}

const BarChartDemo: FC<BarChartType> = (props) => {

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    // tooltip: {
    //   trigger: 'axis',
    //      axisPointer: {
    //        type: 'shadow',
    //      },
    //     formatter: (params) => {
    //       return (
    //         "Text One" +
    //         '<br/>' +
        
    //         params[0].name
    //       );
    //     },
    //   },
    legend: {
      data: ['Direct', 'Email', 'Union Ads', 'Video Ads', 'Search Engine', 'Baidu', 'Google', 'Bing', 'Others'],
      show: true, // Set this to true to show the legend
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
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Email',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        emphasis: {
          focus: 'series'
        },
        markLine: {
          lineStyle: {
            type: 'dashed'
          },
          data: [[{ type: 'min' }, { type: 'max' }]]
        }
      },
      {
        name: 'Baidu',
        type: 'bar',
        barWidth: 5,
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [620, 732, 701, 734, 1090, 1130, 1120]
      },
      {
        name: 'Google',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 290, 230, 220]
      },
      {
        name: 'Bing',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [60, 72, 71, 74, 190, 130, 110]
      },
      {
        name: 'Others',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [62, 82, 91, 84, 109, 110, 120]
      }
    ]
  };

  return (
    <BarChart option={option} />
  );
};

export default BarChartDemo;
