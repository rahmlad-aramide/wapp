import { inter } from '@/app/ui/fonts';
import 'react-select-search/style.css';

import { Suspense } from 'react';
import {
  CardsSkeleton,
  OverviewCardSkeleton,
  SunCardsSkeleton,
  TemperatureAreaChartSkeleton,
  TemperaturePieChartSkeleton,
} from '@/app/ui/skeletons';
import dynamic from 'next/dynamic';
import Heading from '@/app/ui/dashboard/heading';
import CardWrapper from '@/app/ui/dashboard/card-wrapper';
import SunCard from '@/app/ui/dashboard/sun-card';
import OverviewCard from '@/app/ui/dashboard/overview-card';

const TemperatureAreaChart = dynamic(
  () => import('@/app/ui/dashboard/temperature-area-chart'),
  {
    ssr: false,
  },
);
const TemperaturePieChart = dynamic(
  () => import('@/app/ui/dashboard/temperature-pie-chart'),
  {
    ssr: false,
  },
);

export default async function Page() {
  return (
    <main>
      <Heading />
      <section className="grid grid-cols-12 gap-6">
        <section className="col-span-8">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
          <div className="mt-6 flex w-full rounded-lg bg-white shadow-lg">
            <Suspense fallback={<TemperatureAreaChartSkeleton />}>
              <TemperatureAreaChart />
            </Suspense>
          </div>
        </section>
        <section className="relative col-span-4 h-full w-full overflow-x-hidden rounded-lg bg-white p-4 shadow-lg">
          <Suspense fallback={<OverviewCardSkeleton />}>
            <OverviewCard />
          </Suspense>
          <Suspense fallback={<TemperaturePieChartSkeleton />}>
            <TemperaturePieChart />
          </Suspense>
          <h2
            className={`${inter.className} mt-4 text-sm font-medium text-[#373d3f]`}
          >
            Sunrise & Sunset
          </h2>
          <Suspense fallback={<SunCardsSkeleton />}>
            <SunCard title="Sunrise" />
            <SunCard title="Sunset" />
          </Suspense>
        </section>
      </section>
    </main>
  );
}
