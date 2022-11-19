import React from 'react';

import { Meta, Story } from '@storybook/react';

import useCalendar from '../../../hooks/useCalendar';
import { ICalendarProps } from './calendarProps';
import Calendar from './index';

export default {
  title: 'UI Components/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: 'Component for displaying calendar',
      },
    },
    layout: 'centered',
  },
} as Meta;

const Template: Story<ICalendarProps> = () => {
  const {
    titleCalendar,
    currentCalendar,
    countEmptyBlockStart,
    countEmptyBlockEnd,
    nextMonth,
    prevMonth,
  } = useCalendar();

  return (
    <Calendar
      titleCalendar={titleCalendar}
      calendar={currentCalendar}
      countEmptyBlockStart={countEmptyBlockStart}
      countEmptyBlockEnd={countEmptyBlockEnd}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
    />
  );
};

export const Default = Template.bind({});
