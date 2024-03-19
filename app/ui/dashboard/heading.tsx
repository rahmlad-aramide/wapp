'use client';
import Search from './search';
import UnitTab from './unit-tab';
import { formatDateToLocal } from '@/app/lib/utils';
import { varela } from '../fonts';
import LiveTime from './live-time';

function Heading({ searchWeather }: { searchWeather: () => void }) {
  return (
    <section className="mb-4 flex flex-col justify-between lg:flex-row">
      <div className="mb-2 w-full lg:mb-0">
        <LiveTime />
        <h2 className={`${varela.className} text-xl md:text-2xl`}>
          {formatDateToLocal(Date.now())}
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-end gap-2 space-y-1 md:flex-row md:space-y-0">
        <Search
          placeholder="Search city name or post code"
          searchWeather={searchWeather}
        />
        <UnitTab />
      </div>
    </section>
  );
}

export default Heading;
