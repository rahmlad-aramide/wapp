'use client'
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { ClimateList, ClimateResponse } from '@/app/lib/types';

interface ClimateChartProps {
  data: ClimateList[];
}
const ClimateChart: React.FC<ClimateChartProps> = ({ data }) => {
      
  const dates = data?.map(item => new Date(item.dt * 1000).toLocaleDateString());
  
  const series = [
    {
      name: 'Min Temp (°C)',
      data: data?.map(item => item.temp.min)  || 0
    },
    {
      name: 'Max Temp (°C)',
      data: data?.map(item => item.temp.max) || 0
    },
    {
      name: 'Pressure (hPa)',
      data: data?.map(item => item.pressure) || 0
    },
    {
      name: 'Humidity (%)',
      data: data?.map(item => item.humidity) || 0
    },
    {
      name: 'Wind Speed (m/s)',
      data: data?.map(item => item.speed) || 0
    }
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: dates,
      title: {
        text: 'Dates'
      }
    },
    yaxis: {
      title: {
        text: 'Values'
      }
    },
    title: {
      text: 'Climate conditions over the next 30 days',
      align: 'center'
    },
    tooltip: {
      shared: true,
      intersect: false,
    }
  };

  return (
    <ReactApexChart options={options} series={series} type="line" height={350} />
  );
};

export default ClimateChart;
