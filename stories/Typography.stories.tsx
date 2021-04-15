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
        border: `1px solid rgba(0, 0, 0, 0.04)`,
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

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  $text: 'Enhances user experience with webhooks',
  $style: 'subtitle1',
  $color: 'primaryText',
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  $text: 'Enhances user experience with webhooks',
  $style: 'subtitle2',
  $color: 'primaryText',
};

export const Body1 = Template.bind({});
Body1.args = {
  $text:
    'Here we share information from programming to case studies and best practice within PIM & headless eCommerce.',
  $style: 'body1',
  $color: 'primary',
};

export const Body2 = Template.bind({});
Body2.args = {
  $text:
    'Our fast headless eCommerce API makes it easy for developers to build fast eCommerce experiences enjoyed by your customers.',
  $style: 'body2',
  $color: 'secondary',
};

export const Body2Error = Template.bind({});
Body2Error.args = {
  $text: 'Oops! something went terribly wrong',
  $style: 'body2',
  $color: 'error',
};

export const Caption = Template.bind({});
Caption.args = {
  $text: 'This is caption text',
  $style: 'caption',
};

export const Overline = Template.bind({});
Overline.args = {
  $text: 'This is overline text',
  $style: 'overline',
  $color: 'secondary',
};