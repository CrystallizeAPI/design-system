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
        checked={false}
        disabled={false}
        {...args}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          window.alert(`The new value would be ${event.target.checked}`)
        }
      />
    </div>
  );
};

export const UncheckedEnabledCheckbox = Template.bind({});
UncheckedEnabledCheckbox.args = {};

export const CheckedEnabledCheckbox = Template.bind({});
CheckedEnabledCheckbox.args = {
  checked: true,
};

export const UnheckedDisabledCheckbox = Template.bind({});
UnheckedDisabledCheckbox.args = {
  disabled: true,
};

export const CheckedDisabledCheckbox = Template.bind({});
CheckedDisabledCheckbox.args = {
  checked: true,
  disabled: true,
};
