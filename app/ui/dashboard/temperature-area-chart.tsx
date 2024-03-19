'use client';
import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { unixToIsoString } from '@/app/lib/utils';
import { ForecastResponse } from '@/app/lib/types';
import { useForecastData } from '@/app/contexts/forecast-data-context';
import { useCoordinates } from '@/app/contexts/coordinate-context';
import { fetchForecastByCoordinate } from '@/app/lib/data';
import { useNotification } from '@/app/contexts/notification-context';
import { useLoading } from '@/app/contexts/loading-context';
import { TemperatureAreaChartSkeleton } from '../skeletons';

const TemperatureChart: React.FC = () => {
  const { notify } = useNotification();
  const { loading, setLoading } = useLoading();
  const { forecastData, setForecastData } = useForecastData();
  const {
    coordinates: { lat, lon },
  } = useCoordinates();

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

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response: ForecastResponse | null =
          await fetchForecastByCoordinate(lat, lon);
        setForecastData(response);
      } catch (error: any) {
        notify(error.message, 'error');
        console.error('Error fetching forecast data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  return (
    <>
      {loading ? (
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

export default TemperatureChart;
