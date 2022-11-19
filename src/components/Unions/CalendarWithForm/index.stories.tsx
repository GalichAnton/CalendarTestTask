import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import useCalendar from '../../../hooks/useCalendar';
import { ICalendarWithFormProps } from './calendarwithformProps';
import CalendarWithForm from './index';

export default {
  title: 'UI Unions/CalendarWithForm',
  component: CalendarWithForm,
  parameters: {
    docs: {
      description: {
        component: 'Component for rendering calendar with form',
      },
    },
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<ICalendarWithFormProps> = () => {
  const {
    titleCalendar,
    currentCalendar,
    countEmptyBlockStart,
    countEmptyBlockEnd,
    addNewEvents,
    nextMonth,
    prevMonth,
  } = useCalendar();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setDate] = useState<Date | null>(null);

  const disableBtn = !title || !description || !selected;

  const submitForm = () => {
    addNewEvents(selected!, title, description);
    setDate(null);
    setTitle('');
    setDescription('');
  };
  return (
    <CalendarWithForm
      titleCalendar={titleCalendar}
      calendar={currentCalendar}
      countEmptyBlockStart={countEmptyBlockStart}
      countEmptyBlockEnd={countEmptyBlockEnd}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      selected={selected}
      setDate={setDate}
      onSubmit={submitForm}
      disableBtn={disableBtn}
      eventClick={(e) => console.log(e)}
    />
  );
};

export const Default = Template.bind({});
