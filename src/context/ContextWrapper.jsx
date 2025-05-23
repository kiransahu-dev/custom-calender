import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(null);

  useEffect(() => {
    if (smallCalendarMonth !== null) setMonthIndex(smallCalendarMonth);
  }, [smallCalendarMonth]);
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
