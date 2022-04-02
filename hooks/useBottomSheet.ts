import { useState } from 'react';

export function useBottomSheet() {
  const [isOpenBottomSheet, setIsBottomSheet] = useState(false);

  const toggle = (flag: boolean) => {
    setIsBottomSheet(flag);
  };

  return { isOpenBottomSheet, toggle };
}
