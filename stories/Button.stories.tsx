import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonProps } from '../src';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = args => {
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
      <Button {...args} onClick={action('Clicked')} />
    </div>
  );
};

export const LoadingFilled = Template.bind({});
LoadingFilled.args = {
  children: 'Primary Text',
  color: 'primary',
  variant: 'filled',
  loading: true,
  size: '2',
};

export const PrimaryTextButton = Template.bind({});
PrimaryTextButton.args = {
  children: 'Primary Text',
  color: 'primary',
};

export const SecondaryTextButton = Template.bind({});
SecondaryTextButton.args = {
  children: 'Secondary Text',
  color: 'secondary',
};

export const DefaultTextButton = Template.bind({});
DefaultTextButton.args = {
  children: '+ Add description',
};

export const LargeText = Template.bind({});
LargeText.args = {
  size: '2',
  children: 'ADD',
  color: 'secondary',
};

export const SmallText = Template.bind({});
SmallText.args = {
  size: '0',
  children: 'Checkout',
  color: 'secondary',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  size: '0',
  children: 'Disabled',
  disabled: true,
};

export const FullWidthButton = Template.bind({});
FullWidthButton.args = {
  size: '1',
  children: 'FullWidth',
  fullWidth: true,
  color: 'primary',
  variant: 'filled',
};

export const FilledDefault = Template.bind({});
FilledDefault.args = {
  children: 'Contact Us',
  variant: 'filled',
};

export const FilledPrimary = Template.bind({});
FilledPrimary.args = {
  children: 'Checkout items',
  variant: 'filled',
  color: 'primary',
};

export const FilledSecondaryMedium = Template.bind({});
FilledSecondaryMedium.args = {
  children: 'Add to cart',
  variant: 'filled',
  color: 'secondary',
};

export const FilledSecondarySmall = Template.bind({});
FilledSecondarySmall.args = {
  size: '0',
  children: '+ Create webhook',
  variant: 'filled',
  color: 'secondary',
};

export const FilledSecondaryLarge = Template.bind({});
FilledSecondaryLarge.args = {
  size: '2',
  children: '+ Create webhook',
  variant: 'filled',
  color: 'secondary',
};

export const OutlinedDefault = Template.bind({});
OutlinedDefault.args = {
  children: 'Cancel',
  variant: 'outlined',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  children: 'Outlined Primary',
  color: 'primary',
  variant: 'outlined',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  children: 'Outlined Secondary',
  color: 'secondary',
  variant: 'outlined',
};

export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {
  children: 'Outlined Disabled',
  variant: 'outlined',
  disabled: true,
};
