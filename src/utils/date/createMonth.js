import { createDate } from './createDate';
import { getMonthNumberOfDays } from './getMonthNumberOfDays';

export const createMonth = (usedate) => {
  const date = usedate ?? new Date();

  const d = createDate(date);
  const { month: monthName, year, monthNamber, monthIndex } = d;

  const getDay = (dayNamber) =>
    createDate(new Date(year, monthIndex, dayNamber));
  const createMonthDays = () => {
    const days = [];
    for (let i = 0; i <= getMonthNumberOfDays(monthIndex, year) - 1; i++) {
      days[i] = getDay(i + 1);
    }
    return days;
  };

  return {
    getDay,
    monthIndex,
    monthNamber,
    monthName,
    year,
    createMonthDays,
  };
};
