import React, { FC } from 'react';

import Calendar from '../../UI/Calendar';
import EventForm from '../EventForm';
import styles from './calendarwithform.module.scss';
import { ICalendarWithFormProps } from './calendarwithformProps';

const CalendarWithForm: FC<ICalendarWithFormProps> = (props) => {
  const {
    titleCalendar,
    calendar,
    countEmptyBlockStart,
    countEmptyBlockEnd,
    nextMonth,
    prevMonth,
    eventClick,

    title,
    setTitle,
    description,
    setDescription,
    selected,
    setDate,
    onSubmit,
    disableBtn,
  } = props;
  console.log('calendarWithForm', eventClick);

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Календарь</span>
      <div className={styles.innerWrapper}>
        <Calendar
          titleCalendar={titleCalendar}
          calendar={calendar}
          countEmptyBlockStart={countEmptyBlockStart}
          countEmptyBlockEnd={countEmptyBlockEnd}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
          eventClick={eventClick}
        />
        <div className={styles.formWrapper}>
          <EventForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            selected={selected}
            setDate={setDate}
            onSubmit={onSubmit}
            disableBtn={disableBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarWithForm;
