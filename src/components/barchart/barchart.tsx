"use client"

import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';


export default function BarChart({ data, label = '', width = 200, height = 150 }: { data: { name: string, tickets: number }[], label?: string, width?: number, height?: number }) {
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
              backgroundColor: [
                '#2b3a67',
                '#496A81',
                '#66999B',
                '#B3AF8F',
                '#FFC482',
              ]
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
    <canvas ref={chartRef} width={width} height={height} style={{ maxWidth: '100%', height: '50%' }} />
  )
}
