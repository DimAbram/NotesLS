import { getWeekNumber } from './getWeekNumber';
import { getGang } from './getGang';

export const createDate = (date) => {
  const d = date ?? new Date();
  const dayNumber = d.getDate();
  const day = d.toLocaleDateString('ru', { weekday: 'long' });
  const dayNumberInWeek = d.getDay();
  const dayShort = d.toLocaleDateString('ru', { weekday: 'short' });
  const year = d.getFullYear();
  const yearShort = d.toLocaleDateString('ru', { year: '2-digit' });
  const month = d.toLocaleDateString('ru', { month: 'long' });
  const monthShort = d.toLocaleDateString('ru', { month: 'short' });
  const monthNamber = d.getMonth() + 1;
  const monthIndex = d.getMonth();
  const timestamp = d.getTime();
  const week = getWeekNumber(d);
  const gang = getGang(d);

  return {
    date: d,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    yearShort,
    month,
    monthShort,
    monthNamber,
    monthIndex,
    timestamp,
    week,
    gang,
  };
};
