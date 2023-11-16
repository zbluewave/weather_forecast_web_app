import React, { createContext, PropsWithChildren, useState, useContext } from 'react';
import { Unit } from "@/interfaces/unit";

const UnitContext = createContext({
  unit: 'metric' as Unit,
  setUnit: (unit: Unit) => {},
});

export const UnitProvider = ({ children }: PropsWithChildren<{}>) => {
  const [unit, setUnit] = useState<Unit>('metric');

  return (
      <UnitContext.Provider value={{ unit, setUnit }}>
        {children}
      </UnitContext.Provider>
  );
};

export const useUnitContext = () => {
  const context = useContext(UnitContext);

  if (!context) {
    throw new Error('useUnitContext must be used inside the UnitProvider');
  }

  return context;
};
