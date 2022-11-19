import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { IEventFormProps } from './eventformProps';
import EventForm from './index';

export default {
  title: 'Ui Unions/EventForm',
  component: EventForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Component for adding events',
      },
    },
  },
} as Meta;

const Template: Story<IEventFormProps> = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setDate] = useState<Date | null>(null);

  const disableBtn = !title || !description || !selected;

  return (
    <>
      <EventForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        selected={selected}
        setDate={setDate}
        onSubmit={() => alert(JSON.stringify({ title, description, selected }))}
        disableBtn={disableBtn}
      />
    </>
  );
};

export const Default = Template.bind({});
