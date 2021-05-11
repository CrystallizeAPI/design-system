import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../src';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as Meta;

function Space() {
  return <div style={{ marginRight: '16px' }}></div>;
}

// The args props must be before  the `onChange` or this one will be overwritten
const Template: Story<CheckboxProps> = args => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '10px',
        display: 'flex',
      }}
    >
      <Checkbox
        {...args}
        checked={false}
        disabled={false}
        id="here-goes-your-id"
        name="here-goes-your-name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          window.alert(`The new value would be ${event.target.checked}`)
        }
      />
      <Space />
      <Checkbox
        {...args}
        checked={true}
        disabled={false}
        id="here-goes-your-id"
        name="here-goes-your-name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          window.alert(`The new value would be ${event.target.checked}`)
        }
      />
      <Space />
      <Checkbox
        {...args}
        checked={false}
        disabled={true}
        id="here-goes-your-id"
        name="here-goes-your-name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          window.alert(`The new value would be ${event.target.checked}`)
        }
      />
      <Space />
      <Checkbox
        {...args}
        checked={true}
        disabled={true}
        id="here-goes-your-id"
        name="here-goes-your-name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          window.alert(`The new value would be ${event.target.checked}`)
        }
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  color: 'primary',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  color: 'primary',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  color: 'primary',
  size: 'large',
};
