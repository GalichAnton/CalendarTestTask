import React from 'react';

import { actions } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import TextArea from './index';
import { ITextAreaProps } from './textareaProps';

export default {
  title: 'Ui Components/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: 'Component for displaying textarea',
      },
    },
    layout: 'centered',
  },
} as Meta;

const Template: Story<ITextAreaProps> = (args) => {
  const { ...otherArgs } = args;

  return <TextArea {...actions('onChange')} {...otherArgs} />;
};

const baseArgs = {
  name: 'textarea',
};

export const Default = Template.bind({});
Default.args = { ...baseArgs, placeholder: 'Placeholder' };

export const WithValue = Template.bind({});
WithValue.args = {
  ...baseArgs,
  value: 'Lorem ipsum dolores',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...baseArgs,
  value: 'Lorem ipsum dolores',
  disabled: true,
};
