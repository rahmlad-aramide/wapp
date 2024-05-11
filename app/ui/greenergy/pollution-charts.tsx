'use client'
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

type Pollutant = 'co' | 'no' | 'no2' | 'o3' | 'so2' | 'pm2_5' | 'pm10' | 'nh3';

interface PollutionDataPoint {
  dt: number;
  value: number;
}

interface SinglePollutionChartProps {
  data: PollutionDataPoint[];
  pollutantName: string;
  color: string;
}

const SinglePollutionChart: React.FC<SinglePollutionChartProps> = ({ data, pollutantName, color }) => {
  const dates = data.map(item => new Date(item.dt * 1000).toLocaleTimeString());
  const values = data.map(item => item.value);

  const options: ApexOptions = {
    chart: {
      type: 'line',
      height: 250,
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: dates
    },
    yaxis: {
      title: {
        text: 'Concentration (µg/m³)'
      }
    },
    title: {
      text: `${pollutantName}`,
      align: 'center'
    },
    colors: [color]
  };

  const series = [{
    name: pollutantName,
    data: values
  }];

  return (
    <div className='bg-white rounded-lg p-4'>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

interface FullPollutionData {
  dt: number;
  components: Record<Pollutant, number>;
}

interface PollutionChartsProps {
  data: FullPollutionData[];
}

const PollutionCharts: React.FC<PollutionChartsProps> = ({ data }) => {
  const [more, setMore] = useState(4);
  const pollutantInfo: Record<Pollutant, { name: string; color: string }> = {
    co: { name: 'CO (Carbon Monoxide)', color: '#FF4560' },
    no: { name: 'NO (Nitric Oxide)', color: '#00E396' },
    no2: { name: 'NO2 (Nitrogen Dioxide)', color: '#775DD0' },
    o3: { name: 'O3 (Ozone)', color: '#008FFB' },
    so2: { name: 'SO2 (Sulfur Dioxide)', color: '#FEB019' },
    pm2_5: { name: 'PM2.5', color: '#00D9E9' },
    pm10: { name: 'PM10', color: '#FF66C3' },
    nh3: { name: 'NH3 (Ammonia)', color: '#546E7A' }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 shadow-xl'>
      {Object.entries(pollutantInfo).slice(0, more).map(([pollutant, { name, color }]) => (
        <SinglePollutionChart
          key={pollutant}
          data={data.map(entry => ({ dt: entry.dt, value: entry.components[pollutant as Pollutant] }))}
          pollutantName={name}
          color={color}
        />
      ))}
      <button className='w-full max-w-sm mx-auto col-span-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 active:scale-90' onClick={()=>more === 4 ? setMore(8) : setMore(4)}>See {more === 4 ? "More" : "Less"}</button>
    </div>
  );
};

export default PollutionCharts;
