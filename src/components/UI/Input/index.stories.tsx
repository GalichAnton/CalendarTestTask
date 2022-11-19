import React from 'react';

import { Meta, Story } from '@storybook/react';

import Input from './index';
import { IInputProps } from './inputProps';

export default {
  title: 'UI components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Component for displaying input',
      },
    },
    layout: 'centered',
  },
} as Meta;

const Template: Story<IInputProps> = (args) => {
  const { ...otherArgs } = args;

  return (
    <>
      <Input {...otherArgs} />
    </>
  );
};

const baseArgs: IInputProps = {
  placeholder: 'Email',
  name: 'email',
  value: '',
};

export const Default = Template.bind({});
Default.args = baseArgs;

export const WithLabel = Template.bind({});
WithLabel.args = { ...baseArgs, label: 'Email' };
WithLabel.parameters = {
  docs: {
    description: {
      story: 'Input with label',
    },
  },
};

export const WithError = Template.bind({});
WithError.args = { ...baseArgs, label: 'Email', error: 'Error message' };
WithError.parameters = {
  docs: {
    description: {
      story: 'Input with error',
    },
  },
};
