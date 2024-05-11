'use client';
import { useCoordinates } from '@/app/contexts/coordinate-context';
import {
  pollutionData,
  sollarIrradianceData,
} from '@/app/lib/placeholder-data';
import {
  analyzeEnvironmentalImpact,
  getAQIRecommendation,
  getGreenTip,
  recommendAgriculturalStrategies,
  recommendBuildingDesign,
} from '@/app/lib/utils';
import AQIGaugeChart from '@/app/ui/greenergy/aqi-chart';
import PollutionCharts from '@/app/ui/greenergy/pollution-charts';
import SolarCalculator from '@/app/ui/greenergy/solar-calculator';
import SolarIrradianceChart from '@/app/ui/greenergy/solar-chart';
import { GreenergySkeleton } from '@/app/ui/skeletons';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const GreenergyContent = () => {
  const {
    coordinates: { lat, lon },
  } = useCoordinates();
  console.log("lat", lat)
  const [isClient, setIsClient] = useState(false);
  const [aqi, setAqi] = useState(1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return (<GreenergySkeleton />);
  return (
    <main>
      <h1 className="text-sm">
        <LightBulbIcon className="w-8 text-green-500" /> Green tip of the day:
      </h1>
      <h2 className="mb-6 text-xl font-medium">{getGreenTip()}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-lg bg-white shadow-lg">
          {isClient ? (
            <SolarIrradianceChart
              data={sollarIrradianceData.irradiance.hourly}
            />
          ) : null}
        </div>
        <div className="rounded-lg bg-white p-4 text-center shadow-lg">
          <h2 className="my-2 font-bold">
            Calculate your solar panel potential power generation
          </h2>
          <h3 className="mb-1 text-sm">
            Enter the area of the solar panel in square meters (m²) below:
          </h3>
          <SolarCalculator />
        </div>

        <div className="rounded-lg bg-white p-4 shadow-lg">
          <h2 className="my-2 text-center font-bold">
            Recommendation from the solar irradiance data
          </h2>
          <div>
            <p className="mb-4 text-justify">
              <strong>Agricultural Planning: </strong>
              {recommendAgriculturalStrategies(sollarIrradianceData.irradiance)}
            </p>
            <p className="mb-4 text-justify">
              <strong>Building and Planning: </strong>
              {recommendBuildingDesign(
                sollarIrradianceData.irradiance,
                lat || 1,
              )}
            </p>
            <p className="mb-4 text-justify">
              <strong>Environmental Impact: </strong>
              {analyzeEnvironmentalImpact(sollarIrradianceData.irradiance)}
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-lg">
          <h2 className="my-2 mt-4 text-center font-bold">
            Quality of the air
          </h2>
          {isClient ? <AQIGaugeChart aqi={aqi} /> : null}
          <p className="mb-10 text-center">{getAQIRecommendation(aqi)}</p>
        </div>
        <div className="rounded-lg shadow-lg md:col-span-2">
          <h2 className="mb-4 mt-2 text-lg font-medium">
            Air Pollutants Components and their levels over time
          </h2>
          {isClient ? <PollutionCharts data={pollutionData?.list} /> : null}
        </div>
      </div>
    </main>
  );
};

export default GreenergyContent;
