import { IEvent } from './event';

export type WeekDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export interface ICalendarDay {
  id: string;
  dayName: WeekDay;
  dayNumber: number;
  month: number;
  year: number;
  events?: IEvent[];
}
