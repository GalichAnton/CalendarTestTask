import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ICalendarCellProps } from './calendarcellProps';
import CalendarCell from './index';

export default {
  title: 'UI Components/CalendarCell',
  component: CalendarCell,
  parameters: {
    docs: {
      description: {
        component: 'Component for displaying calendar cell',
      },
    },
    layout: 'centered',
  },
} as Meta;

const Template: Story<ICalendarCellProps> = (args) => {
  return (
    <>
      <CalendarCell {...args} />
    </>
  );
};

const baseArgs: ICalendarCellProps = {
  day: 12,
  dayType: 'today',
  dayEvents: [
    {
      id: '1',
      title: 'Long name of the event in calendar',
      description: 'Long name of the event in calendar',
      month: 11,
      year: 2022,
      day: 12,
    },
    {
      id: '2',
      title: 'Long name of the event in calendar',
      description: 'Long name of the event in calendar',
      month: 11,
      year: 2022,
      day: 12,
    },
  ],
};

export const Default = Template.bind({});
Default.args = baseArgs;

export const FutureDay = Template.bind({});
FutureDay.args = { ...baseArgs, dayType: 'future' };
FutureDay.parameters = {
  docs: {
    description: {
      story: 'Day is future',
    },
  },
};

export const PastDay = Template.bind({});
PastDay.args = { ...baseArgs, dayType: 'past' };
PastDay.parameters = {
  docs: {
    description: {
      story: 'Day is past',
    },
  },
};

export const HolyDay = Template.bind({});
HolyDay.args = { ...baseArgs, dayType: 'holiday' };
HolyDay.parameters = {
  docs: {
    description: {
      story: 'Day is holiday',
    },
  },
};
