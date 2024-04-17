import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Quantidade de chamados solucionados',
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {  
    tickets: 152,
    month: 'Jan',
  },
  {
    tickets: 128,
    month: 'Fev',
  },
  { 
    tickets: 41,
    month: 'Mar',
  },
  {    
    tickets: 73,
    month: 'Abr',
  },
  {  
    tickets: 99,
    month: 'Mai',
  },
  {
    tickets: 144,
    month: 'Jun',
  },
  {    
    tickets: 319,
    month: 'Jul',
  },
  {    
    tickets: 249,
    month: 'Ago',
  },
  {
    tickets: 131,
    month: 'Set',
  },
  {    
    tickets: 55,
    month: 'Out',
  },
  {   
    tickets: 48,
    month: 'Nov',
  },
  {  
    tickets: 25,
    month: 'Dez',
  },
];

const valueFormatter = (value: number | null) => `${value}mm`;

export default function HorizontalBars() {
  const currentYear = new Date().getFullYear();
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'tickets', label: currentYear.toString(), valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}