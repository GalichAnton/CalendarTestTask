import React, { FC } from 'react';

import cn from 'classnames';

import styles from './dayevent.module.scss';
import { IDayEventProps } from './dayeventProps';

const DayEvent: FC<IDayEventProps> = (props) => {
  const { isPast, dayEvent, onEventClick, ...otherProps } = props;
  console.log('DayEvent', onEventClick);
  const handleClick = () => {
    if (onEventClick) {
      onEventClick(dayEvent);
    }
  };

  return (
    <button
      type="button"
      {...otherProps}
      className={cn(styles.eventWrapper, { [styles.past]: isPast })}
      onClick={handleClick}
    >
      <span className={styles.eventText}>{dayEvent.title}</span>
    </button>
  );
};
export default DayEvent;
