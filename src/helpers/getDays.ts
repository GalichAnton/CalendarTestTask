import dayNames from '../constants/weekDays';
import { ICalendarDay } from '../interfaces/calendarDay';

function getDays(year: number, monthIndex: number): ICalendarDay[] {
  const date = new Date(year, monthIndex, 1);
  const result: ICalendarDay[] = [];

  while (date.getMonth() === monthIndex) {
    result.push({
      dayName: dayNames[date.getDay()],
      dayNumber: date.getDate(),
      month: monthIndex,
      year,
      id: `${year}${monthIndex}${date.getDate()}`,
    });
    date.setDate(date.getDate() + 1);
  }
  return result;
}

export default getDays;
