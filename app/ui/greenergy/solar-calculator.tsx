'use client'
import React, { useState } from 'react';

type CalculateParams = {
  panelArea: number,
  panelEfficiency: number
};

type SolarCalculatorProps = {
  sunlightHours?: number, 
  cloudPercentage?: number
}

const SolarCalculator: React.FC<SolarCalculatorProps> = ({sunlightHours = 10, cloudPercentage = 20}) => {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');

  const handleInput = (value: string) => {
    setInput((prev) => {
      const newValue = (prev === '0' ? '' : prev) + value;
      return newValue.replace(/^0+(?!\.|$)/, '');
    });
  };

  const handleDelete = () => {
    setInput((prev) => {
      const newInput = prev.slice(0, -1);
      return newInput === '' ? '0' : newInput;
    });
  };

  const handleClear = () => {
    setInput('0');
  };

  function calculateSolarPowerGeneration({ panelArea, panelEfficiency }: CalculateParams): string {
    const solarIrradiance = 1;
    const effectiveIrradiance = solarIrradiance * (1 - cloudPercentage / 100);
    const dailyEnergy = effectiveIrradiance * sunlightHours * panelArea * panelEfficiency;
    return dailyEnergy.toFixed(2)
  }

  const handleSubmit = () => {
    const panelArea = parseFloat(input);
    const panelEfficiency = 0.18;

    const energyGenerated = calculateSolarPowerGeneration({ panelArea, panelEfficiency });
    setResult(energyGenerated);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex items-center justify-between bg-gray-200 p-3 rounded mb-2">
        <p className='opacity-50 text-sm flex-grow min-w-fit'>Panel Area:</p>
        <p className="text-right font-mono w-full overflow-x-auto flex-grow">
        {input || "0"}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-2">
        {[...Array(10).keys()].reverse().map((n) =>
          <button key={n} onClick={() => handleInput(n.toString())} className="bg-gray-300 transition duration-200 active:bg-gray-200 rounded p-3">
            {n}
          </button>
        )}
        <button onClick={handleClear} className="bg-red-500 transition duration-200 active:bg-red-400 text-white rounded p-3 flex-1">Clear</button>
        <button onClick={handleDelete} className="bg-yellow-500 transition duration-200 active:bg-yellow-400 text-white rounded p-3 flex-1">Delete</button>
      </div>
      <div className="flex justify-between space-x-2">
        <button disabled={input === "0"} onClick={handleSubmit} className="bg-blue-500 transition duration-200 active:bg-blue-400 text-white rounded p-3 flex-1">Calculate</button>
      </div>
      <div className="mt-2 bg-green-100 p-3">Sunlight Hours: {sunlightHours}, Cloud Percentage: {cloudPercentage}, Energy: {result}kWh</div>
    </div>
  );
};

export default SolarCalculator;
