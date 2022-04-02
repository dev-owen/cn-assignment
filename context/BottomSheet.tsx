import React, { createContext } from 'react';
import { useBottomSheet } from "../hooks/useBottomSheet";

const BottomSheetContext = createContext<any>(undefined);

export function BottomSheetProvider({ children }: { children: React.ReactNode }) {
  const {toggle, isOpenBottomSheet} = useBottomSheet();

  return (
    <BottomSheetContext.Provider value={{toggle, isOpenBottomSheet}}>
      {children}
    </BottomSheetContext.Provider>
  );
}
