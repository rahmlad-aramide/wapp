'use client'
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface SolarDataPoint {
  hour: number;
  clear_sky: {
    ghi: number;
    dni: number;
    dhi: number;
  };
  cloudy_sky: {
    ghi: number;
    dni: number;
    dhi: number;
  };
}

interface SolarIrradianceChartProps {
  data: SolarDataPoint[];
}

const SolarIrradianceChart: React.FC<SolarIrradianceChartProps> = ({ data }) => {
  const hours = data.map(item => item.hour.toString());

  const series = [
    {
      name: 'Clear Sky GHI',
      data: data.map(item => item.clear_sky.ghi)
    },
    {
      name: 'Cloudy Sky GHI',
      data: data.map(item => item.cloudy_sky.ghi)
    },
    {
      name: 'Clear Sky DNI',
      data: data.map(item => item.clear_sky.dni)
    },
    {
      name: 'Cloudy Sky DNI',
      data: data.map(item => item.cloudy_sky.dni)
    },
    {
      name: 'Clear Sky DHI',
      data: data.map(item => item.clear_sky.dhi)
    },
    {
      name: 'Cloudy Sky DHI',
      data: data.map(item => item.cloudy_sky.dhi)
    }
  ];

  const options: ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: hours,
      title: {
        text: 'Hour of the Day'
      }
    },
    yaxis: {
      title: {
        text: 'Irradiance (W/m²)'
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    title: {
      text: 'Solar Irradiance Data',
      align: 'center'
    }
  };

  return (
    <div className='bg-white rounded-lg p-4'>
        <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default SolarIrradianceChart;
