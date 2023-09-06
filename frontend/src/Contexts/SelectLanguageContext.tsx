import React, {
  createContext, useMemo, useState, useEffect,
} from 'react';

export const SelectLanguageContext = createContext<{
  isBangla: boolean;
  setIsBangla: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isBangla: false,
  setIsBangla: () => {},
});
const loadedValue = localStorage.getItem('isBangla');
const loadedLanguage = loadedValue ? JSON.parse(loadedValue) : false;

export default function SelectLanguageContextProvider({ children }: { children: React.ReactNode }) {
  const [isBangla, setIsBangla] = useState(loadedLanguage);
  useEffect(() => {
    localStorage.setItem('isBangla', JSON.stringify(isBangla));
  }, [isBangla]);

  const values = useMemo(
    () => ({
      isBangla,
      setIsBangla,
    }),
    [isBangla],
  );

  return <SelectLanguageContext.Provider value={values}>{children}</SelectLanguageContext.Provider>;
}
