'use client';
import { useUnits } from '@/app/contexts/units-context';

const UnitTab: React.FC = () => {
    const {units: selectedUnit, toggleUnits} = useUnits();


  return (
    <div className="relative flex h-fit rounded-lg bg-gray-200 py-1 transition duration-200">
      <div
        className={`absolute top-1 h-[calc(100%_-_0.5rem)] rounded-md bg-white transition-all duration-300 ease-in-out ${
          selectedUnit === 'metric'
            ? 'ml-1 w-1/2 translate-x-0'
            : '-ml-1 w-1/2 translate-x-full'
        }`}
      ></div>
      <button
        className={`relative z-10 rounded-lg px-4 py-2 text-sm font-medium ${
          selectedUnit === 'metric'
            ? 'text-gray-900'
            : 'text-gray-800 hover:text-gray-700'
        }`}
        onClick={() => toggleUnits()}
      >
        Metric: °C, m/s
      </button>
      <button
        className={`relative z-10 rounded-lg px-4 py-2 text-sm font-medium ${
          selectedUnit === 'imperial'
            ? 'text-gray-900'
            : 'text-gray-800 hover:text-gray-700'
        }`}
        onClick={() => toggleUnits()}
      >
        Imperial: °F, mph
      </button>
    </div>
  );
};

export default UnitTab;
