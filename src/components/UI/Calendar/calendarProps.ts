import { ICalendarDay } from '../../../interfaces/calendarDay';
import { ICalendarCellProps } from '../CalendarCell/calendarcellProps';

type CalendarDay = ICalendarDay & Pick<ICalendarCellProps, 'dayType'>;

export interface ICalendarProps extends Pick<ICalendarCellProps, 'eventClick'> {
  titleCalendar?: string;
  nextMonth?: () => void;
  prevMonth?: () => void;
  calendar?: CalendarDay[];
  countEmptyBlockStart?: number;
  countEmptyBlockEnd?: number;
}
