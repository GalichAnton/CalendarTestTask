import { WeekDay } from '../interfaces/calendarDay';

const countEmptyBlock: Record<WeekDay, number> = {
  Mon: 0,
  Tue: 1,
  Wed: 2,
  Thu: 3,
  Fri: 4,
  Sat: 5,
  Sun: 6,
};

function getCountEmptyBlock(dayName: WeekDay): number {
  return countEmptyBlock[dayName];
}

export default getCountEmptyBlock;
