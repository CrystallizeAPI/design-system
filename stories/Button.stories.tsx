import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../src/components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Create a document',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Create a product',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Create a shape',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: '+ Create webhook',
};
