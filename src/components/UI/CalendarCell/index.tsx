import React, { FC } from 'react';

import cn from 'classnames';

import DayEvent from '../DayEvent';
import styles from './calendarcell.module.scss';
import { ICalendarCellProps } from './calendarcellProps';

const CalendarCell: FC<ICalendarCellProps> = (props) => {
  const { dayEvents, eventClick, day, dayType } = props;
  console.log('CalendarCell', eventClick);
  return (
    <div className={styles.calendarCell}>
      <div
        className={cn(styles.numberWrapper, {
          [styles.today]: dayType === 'today',
          [styles.holiday]: dayType === 'holiday',
          [styles.past]: dayType === 'past',
        })}
      >
        <span className={styles.dayNumber}>{day}</span>
      </div>
      <div className={styles.events}>
        {dayEvents?.map((event) => (
          <DayEvent
            key={event.id}
            dayEvent={event}
            isPast={dayType === 'past'}
            onEventClick={eventClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarCell;
