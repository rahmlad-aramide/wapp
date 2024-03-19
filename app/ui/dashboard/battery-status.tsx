'use client';
import { BoltIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const BatteryStatus: React.FC = () => {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);
  const [isCharging, setIsCharging] = useState<boolean>(false);

  useEffect(() => {
    const fetchBattery = async () => {
      const battery = await (
        (navigator as Navigator) || undefined
      ).getBattery?.();
      setBatteryLevel(battery.level);
      setIsCharging(battery.charging);

      const updateBatteryInfo = () => {
        setBatteryLevel(battery.level);
        setIsCharging(battery.charging);
      };

      battery.addEventListener('levelchange', updateBatteryInfo);
      battery.addEventListener('chargingchange', updateBatteryInfo);

      return () => {
        battery.removeEventListener('levelchange', updateBatteryInfo);
        battery.removeEventListener('chargingchange', updateBatteryInfo);
      };
    };

    fetchBattery();
  }, []);

  const getBatteryColor = (level: number): string => {
    if (level > 0.75) return 'bg-primary-400';
    if (level > 0.5) return 'bg-primary-300';
    if (level > 0.25) return 'bg-primary-200';
    return 'bg-primary-500';
  };

  return (
    <div
      className="relative h-6 w-10 rounded border bg-gray-400 p-0.5"
      title={`${batteryLevel * 100}%`}
    >
      <div className="absolute -left-1.5 top-1 ml-0 h-3.5 w-1.5 rounded-l border border-r-0 bg-gray-400"></div>
      <div
        className={`ml-auto flex h-full items-center justify-end rounded text-xs ${getBatteryColor(
          batteryLevel,
        )} transition-all duration-300 ease-out`}
        style={{ width: `${batteryLevel * 100}%` }}
      ></div>
      {isCharging ? (
        <div className="absolute right-0 top-0 mr-2 flex h-full items-center">
          <BoltIcon width={20} className="text-green-900" />
        </div>
      ) : (
        <span className="absolute left-1.5 top-0.5 text-center text-xs">{`${Math.round(
          batteryLevel * 100,
        )}%`}</span>
      )}
    </div>
  );
};

export default BatteryStatus;
