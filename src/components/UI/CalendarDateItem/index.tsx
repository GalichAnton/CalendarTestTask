import React, { FC } from 'react';

import cn from 'classnames';
import ru from 'date-fns/locale/ru';
import DatePicker, { registerLocale } from 'react-datepicker';

import styles from './calendardateitem.module.scss';
import { ICalendarDateItemProps } from './calendardateitemProps';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);

const CalendarDateItem: FC<ICalendarDateItemProps> = (props) => {
  const { selected, dateFormat = 'dd.MM.yyyy' } = props;

  return (
    <DatePicker
      {...props}
      dateFormat={dateFormat}
      className={cn(styles.textInput, {
        [styles.textInputFull]: Boolean(selected),
      })}
      popperModifiers={[
        {
          name: 'arrow',
          options: {
            padding: 110,
          },
        },
      ]}
      locale="ru"
    />
  );
};

export default CalendarDateItem;
