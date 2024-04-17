'use client';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  yAxis: [
    {
      label: 'Quantidade de chamados solucionados',
    },
  ],
  height: 400,
  // width: 500,
};

const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export default function HorizontalBars({ data }: any) {
  const currentMonth = meses[new Date().getMonth()];
  data.sort((a: { name: string, tickets: number }, b: { name: string, tickets: number }) => b.tickets - a.tickets);
  return (
    <BarChart
      dataset={data}
      sx={{ marginTop: '5px', marginLeft: '50px' }}
      xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
      series={[{ dataKey: 'tickets', label: currentMonth.toString() }]}
      layout="vertical"
      {...chartSetting}
    />
  );
}