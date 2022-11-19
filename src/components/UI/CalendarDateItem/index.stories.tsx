import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { ICalendarDateItemProps } from './calendardateitemProps';
import CalendarDateItem from './index';

export default {
  title: 'Ui Components/CalendarDateItem',
  component: CalendarDateItem,
  parameters: {
    docs: {
      description: {
        component: 'Component for date input',
      },
    },
  },
} as Meta;

const Template: Story<ICalendarDateItemProps> = (args) => {
  const [selectedDate, onChangeDate] = useState<Date | null>(new Date());
  return (
    <div style={{ width: '300px' }}>
      <CalendarDateItem
        {...args}
        selected={selectedDate}
        onChange={onChangeDate}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholderText: 'ДД.ММ.ГГ',
};
