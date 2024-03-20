'use client';
import { useLoading } from '@/app/contexts/loading-context';
import ReactApexChart from 'react-apexcharts';
import { TemperaturePieChartSkeleton } from '../skeletons';
import { CurrentWeatherResponse } from '@/app/lib/types';
import { useEffect, useState } from 'react';

const legend = {
  'series-1': 'Current',
  'series-2': 'Minimum',
  'series-3': 'Maximum',
  'series-4': 'Feels Like',
};
const TemperaturePieChart = ({
  weatherData,
}: {
  weatherData: CurrentWeatherResponse | null;
}) => {
  const { loading } = useLoading();
  const [isClient, setIsClient] = useState(false);
  const temp = weatherData?.main.temp || 0;
  const temp_max = weatherData?.main.temp_max || 0;
  const temp_min = weatherData?.main.temp_min || 0;
  const feels_like = weatherData?.main.feels_like || 0;
  const series = [temp, temp_min, temp_max, feels_like];
  const options: ApexCharts.ApexOptions = {
    chart: {
      width: '100%',
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function (
        val: 'series-1' | 'series-2' | 'series-3' | 'series-4',
        opts,
      ) {
        return legend[val] + ' - ' + opts.w.globals.series[opts.seriesIndex];
      },
    },
    tooltip: {
      y: {
        formatter: function (value, { _, seriesIndex }) {
          const labels = ['Current', 'Minimum', 'Maximum', 'Feels Like'];
          return `${labels[seriesIndex]}: ${value}°C`;
        },
      },
    },
    title: {
      text: "Today's Temperature",
      style: { fontFamily: 'Inter', fontWeight: '500' },
    },
    colors: ['#F19C69', '#EC6E46', '#EB4D4B', '#dc3545'],
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {loading || !isClient ? (
        <TemperaturePieChartSkeleton />
      ) : (
        <section className="-ml-2 mt-4 flex min-h-[120px] w-full min-w-[300px]">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            height={350}
          />
        </section>
      )}
    </>
  );
};

export default TemperaturePieChart;
