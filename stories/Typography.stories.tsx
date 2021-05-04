import React from 'react';
import { Typography, TypographyProps } from '../src';
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
  children:
    'Welcome to Crystallize Welcome to Crystallize Welcome to Crystallize Welcome to Crystallize',
  style: 'h1',
  align: 'left',
  gutter: false,
  display: 'block',
  ellipsis: true,
  color: 'primary',
};

export const H2 = Template.bind({});
H2.args = {
  children: 'Welcome to Crystallize',
  style: 'h2',
  color: 'primary',
};

export const H3 = Template.bind({});
H3.args = {
  children: 'Welcome to Crystallize',
  style: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  children: 'Welcome to Crystallize',
  style: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
  children: 'Welcome to Crystallize',
  style: 'h5',
};

export const H6 = Template.bind({});
H6.args = {
  children: 'Welcome to Crystallize',
  style: 'h6',
  color: 'primary',
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: 'Enhances user experience with webhooks',
  style: 'subtitle1',
  color: 'primaryText',
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  children: 'Enhances user experience with webhooks',
  style: 'subtitle2',
  color: 'primaryText',
};

export const Body1 = Template.bind({});
Body1.args = {
  children:
    'Here we share information from programming to case studies and best practice within PIM & headless eCommerce.',
  style: 'body1',
  color: 'primary',
};

export const Body2 = Template.bind({});
Body2.args = {
  children:
    'Our fast headless eCommerce API makes it easy for developers to build fast eCommerce experiences enjoyed by your customers.',
  style: 'body2',
  color: 'secondary',
};

export const Body2Error = Template.bind({});
Body2Error.args = {
  children: 'Oops! something went terribly wrong',
  style: 'body2',
  color: 'error',
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'This is caption text',
  style: 'caption',
};

export const Overline = Template.bind({});
Overline.args = {
  children: 'This is overline text',
  style: 'overline',
  color: 'secondary',
};

export const CaptionUnderlined = Template.bind({});
CaptionUnderlined.args = {
  children: 'This is caption text',
  style: 'caption',
  underline: true,
  color: 'secondary',
};

export const Subtitle1Bold = Template.bind({});
Subtitle1Bold.args = {
  children: 'This is caption text',
  style: 'subtitle1',
  color: 'primary',
  bold: true,
};

export const Body1BoldUnderline = Template.bind({});
Body1BoldUnderline.args = {
  children:
      'Build fast eCommerce experiences with Crystallize',
  style: 'body2',
  color: 'secondary',
  bold: true,
  underline: true
};
