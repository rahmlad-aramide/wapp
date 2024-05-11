'use client';
import Image from 'next/image';
import { inter } from '@/app/ui/fonts';
import { useUnits } from '@/app/contexts/units-context';
import temperature from '@/app/ui/icons/temperature.png';
import pressure from '@/app/ui/icons/pressure.png';
import humidity from '@/app/ui/icons/humidity.png';
import wind from '@/app/ui/icons/wind.png';
import { getFinalUnit, getFinalValue } from '@/app/lib/utils';
import { WeatherType } from '@/app/lib/types';

const iconMap = {
  temperature,
  humidity,
  wind,
  pressure,
};

export function GreenCard({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: WeatherType;
}) {
  const { units } = useUnits();
  const iconSrc = iconMap[type];

  return (
    <div className="flex justify-center rounded-lg bg-white p-2 shadow-lg md:justify-start md:px-6">
      {iconSrc ? (
        <Image
          src={iconSrc}
          width={64}
          height={64}
          alt={type}
          className="my-auto h-16 w-16 md:h-12 md:w-12 lg:h-16 lg:w-16"
          loading="lazy"
          priority={false}
        />
      ) : null}
      <div className="ml-8 flex flex-col items-start justify-center py-8 md:ml-4 lg:ml-8">
        <h3 className="mb-2 text-sm font-medium text-gray-800 whitespace-nowrap">{title}</h3>
        <p
          className={`${inter.className}
        truncate rounded-xl text-3xl font-semibold md:text-xl lg:text-3xl`}
        >
          {getFinalValue(type, value, units)}
          {getFinalUnit(type, units)}
        </p>
      </div>
    </div>
  );
}
