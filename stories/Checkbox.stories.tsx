import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../src';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as Meta;

// The args props must be before  the `onChange` or this one will be overwritten
const Template: Story<CheckboxProps> = args => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
        padding: '10px',
      }}
    >
      <Checkbox
        {...args}
        id="here-goes-your-id"
        name="here-goes-your-name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          window.alert(`The new value would be ${event.target.checked}`)
        }
      />
    </div>
  );
};

export const PrimaryUncheckedEnabled = Template.bind({});
PrimaryUncheckedEnabled.args = {
  checked: false,
  disabled: false,
};

export const PrimaryCheckedEnabled = Template.bind({});
PrimaryCheckedEnabled.args = {
  checked: true,
  disabled: false,
};

export const PrimaryUncheckedDisabled = Template.bind({});
PrimaryUncheckedDisabled.args = {
  checked: false,
  disabled: true,
};

export const PrimaryCheckedDisabled = Template.bind({});
PrimaryCheckedDisabled.args = {
  checked: true,
  disabled: true,
};

export const SecondaryUncheckedEnabled = Template.bind({});
SecondaryUncheckedEnabled.args = {
  checked: false,
  disabled: false,
  color: 'secondary',
};

export const SecondaryCheckedEnabled = Template.bind({});
SecondaryCheckedEnabled.args = {
  checked: true,
  disabled: false,
  color: 'secondary',
};

export const SecondaryUncheckedDisabled = Template.bind({});
SecondaryUncheckedDisabled.args = {
  checked: false,
  disabled: true,
  color: 'secondary',
};

export const SecondaryCheckedDisabled = Template.bind({});
SecondaryCheckedDisabled.args = {
  checked: true,
  disabled: true,
  color: 'secondary',
};
