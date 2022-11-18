import React from 'react';

import { actions } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { IButtonProps } from './buttonProps';
import Button from './index';

export default {
  title: 'UI components/Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => {
  const { children, ...otherArgs } = args;

  return (
    <Button {...actions('onClick', 'onMouseOver')} {...otherArgs}>
      {children}{' '}
    </Button>
  );
};

const baseArgs: IButtonProps = {
  children: 'Добавить',
  variant: 'primary',
  width: '282px',
};

export const Primary = Template.bind({});
Primary.args = baseArgs;
Primary.parameters = {
  docs: {
    description: {
      story: 'Button with primary variant',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = { ...baseArgs, variant: 'secondary' };
Secondary.parameters = {
  docs: {
    description: {
      story: 'Button with secondary variant',
    },
  },
};
