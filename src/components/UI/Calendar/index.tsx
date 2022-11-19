import React, { FC } from 'react';

import InlineSVG from 'react-inlinesvg';

import { LeftArrow, RightArrow } from '../../../assets/icons';
import dayNames from '../../../constants/weekDays';
import { WeekDay } from '../../../interfaces/calendarDay';
import CalendarCell from '../CalendarCell';
import styles from './calendar.module.scss';
import { ICalendarProps } from './calendarProps';

const Calendar: FC<ICalendarProps> = (props) => {
  const {
    titleCalendar,
    calendar = [],
    countEmptyBlockStart = 0,
    countEmptyBlockEnd = 0,
    nextMonth = () => {},
    prevMonth = () => {},
    eventClick = () => {},
  } = props;

  console.log('calendar', eventClick);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <InlineSVG
          src={LeftArrow}
          onClick={prevMonth}
          className={styles.icon}
        />
        <span className={styles.titleCalendar}>{titleCalendar}</span>
        <InlineSVG
          src={RightArrow}
          onClick={nextMonth}
          className={styles.icon}
        />
      </div>
      <div className={styles.calendar}>
        {dayNames.map((name: WeekDay) => (
          <div key={name} className={styles.dayName}>
            {name.toUpperCase()}
          </div>
        ))}
        {Array.from(Array(countEmptyBlockStart).keys()).map((index) => (
          <div key={`${index}-start`} className={styles.emptyBlock} />
        ))}
        {calendar.map(({ id, dayNumber, dayType, events }) => {
          return (
            <CalendarCell
              key={id}
              day={dayNumber}
              dayEvents={events}
              dayType={dayType}
              eventClick={eventClick}
            />
          );
        })}
        {Array.from(Array(countEmptyBlockEnd).keys()).map((index) => (
          <div key={`${index}-end`} className={styles.emptyBlock} />
        ))}
      </div>
    </div>
  );
};
export default Calendar;
