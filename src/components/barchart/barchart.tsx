'use client';
import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function BarChart({ data, label = '', ...props }: { data: { name: string, tickets: number }[], label?: string }) {
  const chartRef: any = useRef(null);
  useEffect(() => {
    if (chartRef.current){
      if (chartRef.current.chart){
        chartRef.current.chart.destroy();
      }
      const context = chartRef.current.getContext('2d');
      const newChart = new Chart(context, {
        type: 'bar',
        data: {
          labels: data.map((item) => item.name),
          datasets: [
            {
              label,
              data: data.map((item) => item.tickets),
              backgroundColor: data.map((_) => `#${Math.floor(Math.random() * 16777215).toString(16)}`),
            },
          ],
        },
        options: {
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
