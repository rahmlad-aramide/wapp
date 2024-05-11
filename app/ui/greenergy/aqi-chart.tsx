'use client'
import React from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

interface AQIGaugeChartProps {
  aqi: number;
}

const AQIGaugeChart: React.FC<AQIGaugeChartProps> = ({ aqi }) => {
  const options: ApexOptions = {
    chart: {
      type: "radialBar",
      height: 50
    },
    plotOptions: {
      radialBar: {
        startAngle: -120,
      endAngle: 120,
      track: {
        background: "#e7e7e7",
        startAngle: -120,
        endAngle: 120,
        strokeWidth: '97%',
        margin: 5,
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2
        }
      },
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            fontSize: '22px',
            formatter: function(val: number) {
              const labels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
              return labels[5 - val];
            }
          }
        },
    },
    },
    labels: ['Air Quality'],
    colors: ['#22c55e', '#facc15', '#f97316', '#ef4444', '#b91c1c'],
  };

  const series = [(6 - aqi) * 20];
  return (
    <ReactApexChart 
      options={options} 
      series={series} 
      type="radialBar" 
      height={350}
      />
  );
};

export default AQIGaugeChart;
