import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../src';

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
  color: 'primary',
  label: 'Create a document',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Create a product',
  color: 'secondary'
};

export const Default = Template.bind({});
Default.args = {
  label: 'Add description',
  color: 'default'
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

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'small',
  label: '+ Create webhook',
  disabled: true
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  size: 'medium',
  label: 'ADD TO FAVORITE',
  fullWidth: true,
  color: 'primary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'ADD TO FAVORITE',
};

