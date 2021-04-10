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

export const PrimaryTextButton = Template.bind({});
PrimaryTextButton.args = {
  color: 'primary',
  label: 'CREATE A DOCUMENT',
};

export const SecondaryTextButton = Template.bind({});
SecondaryTextButton.args = {
  label: 'Create a product',
  color: 'secondary',
};

export const DefaultTextButton = Template.bind({});
DefaultTextButton.args = {
  label: '+ Add description',
};

export const LargeText = Template.bind({});
LargeText.args = {
  size: 'large',
  label: 'Large text',
  color: 'secondary',
};

export const SmallText = Template.bind({});
SmallText.args = {
  size: 'small',
  label: 'Small text',
  color: 'secondary',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  size: 'small',
  label: 'I am Disabled',
  disabled: true,
};

export const FullWidthButton = Template.bind({});
FullWidthButton.args = {
  size: 'medium',
  label: 'Full Width',
  fullWidth: true,
  color: 'primary',
  variant: 'filled',
};

export const FilledDefault = Template.bind({});
FilledDefault.args = {
  label: 'Filled Default',
  variant: 'filled',
};

export const FilledPrimary = Template.bind({});
FilledPrimary.args = {
  label: 'Filled Primary',
  variant: 'filled',
  color: 'primary',
};

export const FilledSecondaryMedium = Template.bind({});
FilledSecondaryMedium.args = {
  label: 'Filled Secondary',
  variant: 'filled',
  color: 'secondary',
};

export const FilledSecondarySmall = Template.bind({});
FilledSecondarySmall.args = {
  size: 'small',
  label: '+ Create webhook',
  variant: 'filled',
  color: 'secondary',
};

export const FilledSecondaryLarge = Template.bind({});
FilledSecondaryLarge.args = {
  size: 'large',
  label: '+ Create webhook',
  variant: 'filled',
  color: 'secondary',
};

export const OutlinedDefault = Template.bind({});
OutlinedDefault.args = {
  label: 'Outlined',
  variant: 'outlined',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  label: 'Outlined Primary',
  color: 'primary',
  variant: 'outlined',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  label: 'Outlined Secondary',
  color: 'secondary',
  variant: 'outlined',
};

export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {
  label: 'Outlined Disabled',
  variant: 'outlined',
  disabled: true,
};
