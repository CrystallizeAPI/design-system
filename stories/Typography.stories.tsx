import React from 'react';
import { Typography, TypographyProps } from '../src/components/Typography';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Example/Typography',
  component: Typography,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta;

const Template: Story<TypographyProps> = args => {
  return (
    <div
      style={{
        background: 'rgba(0, 0, 0, 0.04)',
        width: '100%',
        height: '100%',
        display: 'inline-block',
        padding: '10px',
      }}
    >
      <Typography {...args} />
    </div>
  );
};

export const H1 = Template.bind({});
H1.args = {
  $text: 'Welcome to Crystallize',
  $style: 'h1',
  $align: 'center',
  $gutter: true,
  $display: 'block',
  $wrapText: true,
  $color: 'secondary',
};

export const H2 = Template.bind({});
H2.args = {
  $text: 'Welcome to Crystallize',
  $style: 'h2',
  $color: 'primary',
};

export const H3 = Template.bind({});
H3.args = {
  $text: 'Welcome to Crystallize',
  $style: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  $text: 'Welcome to Crystallize',
  $style: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
  $text: 'Welcome to Crystallize',
  $style: 'h5',
};

export const H6 = Template.bind({});
H6.args = {
  $text: 'Welcome to Crystallize',
  $style: 'h6',
  $color: 'primary',
};
