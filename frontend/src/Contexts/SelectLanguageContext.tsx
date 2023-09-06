import React, { createContext, useMemo, useState } from 'react';

export const SelectLanguageContext = createContext<{
  isBangla: boolean;
  setIsBangla: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isBangla: false,
  setIsBangla: () => {},
});

export default function SelectLanguageContextProvider({ children }: { children: React.ReactNode }) {
  const [isBangla, setIsBangla] = useState(false);

  const values = useMemo(
    () => ({
      isBangla,
      setIsBangla,
    }),
    [isBangla],
  );

  return <SelectLanguageContext.Provider value={values}>{children}</SelectLanguageContext.Provider>;
}
