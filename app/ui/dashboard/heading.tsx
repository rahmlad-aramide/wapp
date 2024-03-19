'use client';
import Search from './search';
import UnitTab from './unit-tab';
import { formatDateToLocal } from '@/app/lib/utils';
import { varela } from '../fonts';
import LiveTime from './live-time'

function Heading() {
  return (
    <section className="mb-4 flex justify-between">
      <div>
        <LiveTime />
        <h2 className={`${varela.className} text-xl md:text-2xl`}>
          {formatDateToLocal(Date.now())}
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <Search placeholder="Search city name" />
        <UnitTab />
      </div>
    </section>
  );
}

export default Heading;
