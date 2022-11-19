import { IEvent } from '../../../interfaces/event';

export type DayType = 'future' | 'today' | 'holiday' | 'past';

export interface ICalendarCellProps {
  day: number;
  dayType: DayType;
  dayEvents?: IEvent[];
  eventClick?: (event: IEvent) => void;
}
