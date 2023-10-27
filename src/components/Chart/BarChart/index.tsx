// BarChart.tsx
import React from 'react';
import Chart, { EChartsOption } from '..';

interface BarChartProps extends React.HTMLProps<HTMLDivElement> {
  option: EChartsOption;
}

const BarChart: React.FC<BarChartProps> = ({ option, ...rest }) => {
  return <Chart type="bar" option={option} {...rest} />;
};

export default BarChart;
