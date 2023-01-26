import { checkDateIsEquel } from './checkDateIsEquel';

export const checkIsToday = (date) => {
  const today = new Date();
  return checkDateIsEquel(today, date);
};
