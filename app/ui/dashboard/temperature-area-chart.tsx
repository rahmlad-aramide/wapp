'use client';
import ReactApexChart from 'react-apexcharts';
import { unixToIsoString } from '@/app/lib/utils';
import { useLoading } from '@/app/contexts/loading-context';
import { TemperatureAreaChartSkeleton } from '../skeletons';
import { ForecastResponse } from '@/app/lib/types';
import { useEffect, useState } from 'react';

const TemperatureAreaChart = ({forecastData}:{forecastData : ForecastResponse|null}) => {
  const { loading } = useLoading();
  const [isClient, setIsClient] = useState(false);
  // const { forecastData } = useForecastData();

  const list = forecastData?.list || [];
  const series = [
    {
      name: 'Temperature',
      data: list.map((data) => data.main.temp),
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      width: '80%',
      type: 'area',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: list.map((dt) => unixToIsoString(dt.dt)),
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    title: {
      text: 'Weather Forecast',
      style: {
        fontFamily: 'Inter',
        fontWeight: '600',
      },
    },
    subtitle: { text: 'Forecast for 5days with 3hour step' },
    colors: ['#EC6E46'],
  };

  useEffect(()=>{
    setIsClient(true);
  },[])
  return (
    <>
      {loading || !isClient ? (
        <TemperatureAreaChartSkeleton />
      ) : (
        <div className="w-full p-6 pb-2">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      )}
    </>
  );
};

export default TemperatureAreaChart;
