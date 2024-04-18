'use client';
import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function AreaChart({ data, label = '', bar = false, ...props }: { data: { name: string, tickets: number }[], label?: string, bar?: boolean }) {
  const chartRef: any = useRef(null);
  useEffect(() => {
    if (chartRef.current){
      if (chartRef.current.chart){
        chartRef.current.chart.destroy();
      }
      const context = chartRef.current.getContext('2d');
      const newChart = new Chart(context, {
        type: 'line',
        data: {
          labels: data.map((item) => item.name),
          datasets: [
            {
              label,
              data: data.map((item) => item.tickets),
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              type: 'category',
            }
          },
        },
      })
      chartRef.current.chart = newChart;
    }
  }, [])
  return (
    <canvas ref={chartRef} />
  )
}
