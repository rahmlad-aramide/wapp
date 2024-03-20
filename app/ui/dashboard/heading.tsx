'use client';
import Search from './search';
import UnitTab from './unit-tab';
import { formatDateToLocal } from '@/app/lib/utils';
import { varela } from '../fonts';
import LiveTime from './live-time';
import { Dispatch, SetStateAction } from 'react';
import { HeadingProps } from '@/app/lib/types';

function Heading({ searchWeather, searching, setSearching }: HeadingProps) {
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
          searching={searching} setSearching={setSearching}
        />
        <UnitTab />
      </div>
    </section>
  );
}

export default Heading;
