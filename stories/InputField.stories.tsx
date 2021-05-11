import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputField, InputFieldProps } from '../src/components/InputField';

export default {
  title: 'Example/TextField',
  component: InputField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputFieldProps> = args => {
  return <InputField {...args} />;
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  aria: 'Full name',
  label: 'Full name',
  value: 'Deeksha Sharma',
};
