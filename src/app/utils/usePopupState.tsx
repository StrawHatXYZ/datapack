import { createContext, useContext, useState } from 'react';
import React from 'react';
const PopupContext = createContext<any>(null);

export const usePopup = useContext(PopupContext);

export function PopupProvider({ children }: any) {
  const [locked, setLocked] = useState(true);
  return (
    <PopupContext.Provider value={{ locked, setLocked }}>
      {children}
    </PopupContext.Provider>
  );
}
