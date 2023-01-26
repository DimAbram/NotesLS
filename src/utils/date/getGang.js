export const getGang = (date) => {
  const dateDefault = new Date(1970, 0, 0);
  const dToday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return (((dToday.getTime() - dateDefault.getTime()) / 86400000 + 2) % 3) + 1;
};
