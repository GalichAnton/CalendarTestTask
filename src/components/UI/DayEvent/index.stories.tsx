import React from 'react';

import { Meta, Story } from '@storybook/react';

import { IDayEventProps } from './dayeventProps';
import DayEvent from './index';

export default {
  title: 'UI Components/DayEvent',
  component: DayEvent,
  parameters: {
    docs: {
      description: {
        component: 'Component for displaying event in calendar',
      },
    },
    layout: 'centered',
  },
} as Meta;

const Template: Story<IDayEventProps> = (args) => {
  return (
    <>
      <DayEvent {...args} />
    </>
  );
};

const baseArgs: IDayEventProps = {
  dayEvent: {
    id: `${Date.now()}`,
    title: 'Example event name',
    description: 'Description about event',
    year: 2022,
    month: 11,
    day: 18,
  },
  isPast: false,
};

export const Default = Template.bind({});
Default.args = baseArgs;

export const Past = Template.bind({});
Past.args = {
  ...baseArgs,
  isPast: true,
};

Past.parameters = {
  docs: {
    description: {
      story: 'Event is past',
    },
  },
};
