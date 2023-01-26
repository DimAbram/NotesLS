import { createDate } from './createDate';

export const formateDate = (date, format) => {
  const d = createDate(date);

  return format
    .replace(/\bYYYY\b/, d.year.toString())
    .replace(/\bMM\b/, d.monthNamber.toString().padStart(2, '0'))
    .replace(/\bDD\b/, d.dayNumber.toString().padStart(2, '0'));
};
