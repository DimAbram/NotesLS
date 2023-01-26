export const getMonthNumberOfDays = (monthIndex, yearNamber) =>
  new Date(yearNamber, monthIndex + 1, 0).getDate();
