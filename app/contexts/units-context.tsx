'use client';
import { createContext, useContext, ReactNode, useState } from 'react';
import { Units, UnitsContextType } from '../lib/types';

const UnitsContext = createContext<UnitsContextType | undefined>(undefined);

export function UnitsProvider({ children }: { children: ReactNode }) {
  const [units, setUnits] = useState<Units>('metric');

  const toggleUnits = () => {
    setUnits((prevUnits) => (prevUnits === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <UnitsContext.Provider value={{ units, toggleUnits }}>
      {children}
    </UnitsContext.Provider>
  );
}

export function useUnits() {
  const context = useContext(UnitsContext);
  if (context === undefined) {
    throw new Error('useUnits must be used within a UnitProvider');
  }
  return context;
}
