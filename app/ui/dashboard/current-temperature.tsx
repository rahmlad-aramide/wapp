'use client';
import { useUnits } from '@/app/contexts/units-context';
import { getFinalUnit, getFinalValue } from '@/app/lib/utils';

export default function CurrentTemperature({ value }: { value: number }) {
  const { units } = useUnits();
  return (
    <h2 className="text-4xl font-semibold">
      {getFinalValue('temperature', value, units)}{' '}
      {getFinalUnit('temperature', units)}
    </h2>
  );
}
