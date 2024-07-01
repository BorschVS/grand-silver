import { createContext, useState } from 'react';

export const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  return (
    <DatePickerContext.Provider value={{ year, setYear, month, setMonth }}>
      {children}
    </DatePickerContext.Provider>
  );
};
