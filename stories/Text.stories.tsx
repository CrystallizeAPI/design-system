import React from 'react';
import { Text, TextProps } from '../src';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Example/Typography',
  component: Text,
  argTypes: { backgroundColor: { control: 'color' } },
} as Meta;

const Template: Story<TextProps> = args => {
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
      <Text {...args} />
    </div>
  );
};

export const H1 = Template.bind({});
H1.args = {
  children:
    'Welcome to Crystallize Welcome to Crystallize Welcome to Crystallize Welcome to Crystallize',
  size: '1',
  align: 'left',
  gutter: false,
  display: 'block',
  ellipsis: true,
  color: 'primary',
};

export const H2 = Template.bind({});
H2.args = {
  children: 'Welcome to Crystallize',
  size: '2',
  color: 'primary',
};

export const H3 = Template.bind({});
H3.args = {
  children: 'Welcome to Crystallize',
  size: '3',
};

export const H4 = Template.bind({});
H4.args = {
  children: 'Welcome to Crystallize',
  size: '4',
};

export const H5 = Template.bind({});
H5.args = {
  children: 'Welcome to Crystallize',
  size: '5',
};

export const H6 = Template.bind({});
H6.args = {
  children: 'Welcome to Crystallize',
  size: '6',
  color: 'primary',
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: 'Enhances user experience with webhooks',
  size: 'subtitle1',
  color: 'primaryText',
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  children: 'Enhances user experience with webhooks',
  size: 'subtitle2',
  color: 'primaryText',
};

export const Body1 = Template.bind({});
Body1.args = {
  children:
    'Here we share information from programming to case studies and best practice within PIM & headless eCommerce.',
  size: 'body1',
  color: 'primary',
};

export const Body2 = Template.bind({});
Body2.args = {
  children:
    'Our fast headless eCommerce API makes it easy for developers to build fast eCommerce experiences enjoyed by your customers.',
  size: 'body2',
  color: 'secondary',
};

export const Body2Error = Template.bind({});
Body2Error.args = {
  children: 'Oops! something went terribly wrong',
  size: 'body2',
  color: 'error',
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'This is caption text',
  size: 'caption',
};

export const Overline = Template.bind({});
Overline.args = {
  children: 'This is overline text',
  size: 'overline',
  color: 'secondary',
};

export const CaptionUnderlined = Template.bind({});
CaptionUnderlined.args = {
  children: 'This is caption text',
  size: 'caption',
  underline: true,
  color: 'secondary',
};

export const Subtitle1Bold = Template.bind({});
Subtitle1Bold.args = {
  children: 'This is caption text',
  size: 'subtitle1',
  color: 'primary',
  weight: 'bold',
};

export const Body1LightUnderline = Template.bind({});
Body1LightUnderline.args = {
  children: 'Build fast eCommerce experiences with Crystallize',
  size: 'body2',
  color: 'secondary',
  weight: 'lighter',
  underline: true,
};
