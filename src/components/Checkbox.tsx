import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../styles/theme';

type ColorType = 'primary' | 'secondary';
export interface CheckboxProps {
  color: ColorType;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
}

export interface CustomCheckboxProps {
  color: ColorType;
  checked: boolean;
  disabled: boolean;
}

const CheckboxRoot = styled.div`
  --size: 24px;
  --inner-size: 75%;
  --border-radius: 4px;
  --opacity-disabled: 0.5;

  display: inline-flex;
  position: relative;
`;

const Box = styled.span<CustomCheckboxProps>`
  align-items: center;
  border: ${props =>
    props.checked
      ? `2px solid ${getColorVariants(props.color).main}`
      : `2px solid ${theme.palette.action.disabled}`};
  border-radius: var(--border-radius);
  display: inline-flex;
  height: var(--size);
  justify-content: center;
  position: relative;
  width: var(--size);
  z-index: 1;

  &[disabled] {
    opacity: var(--opacity-disabled);
  }

  // We create an inner box
  &::after {
    border-radius: var(--border-radius);
    content: '';
    display: inline-block;
    height: var(--inner-size);
    opacity: ${p => (p.checked ? '1' : '0')};
    transform: ${p => (p.checked ? 'none' : 'scale(.35)')};
    transition: transform 100ms, opacity 100ms;
    width: var(--inner-size);

    ${props =>
      props.color && `background-color: ${getColorVariants(props.color).main}`};

    &[disabled] {
      opacity: var(--opacity-disabled);
    }
  }
`;

function getColorVariants(color: ColorType) {
  return theme.palette[color];
}

const Input = styled.input<CheckboxProps>`
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;

  &[disabled] {
    cursor: default;
    pointer-events: none;
  }

  &:hover {
    + ${Box} {
      ${p =>
        p.checked
          ? css`
              border: 2px solid ${getColorVariants(p.color).dark};
              &:after {
                background-color: ${getColorVariants(p.color).dark};
              }
            `
          : css`
              border: 2px solid ${getColorVariants(p.color).main};
            `}
    }
  }
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  color = 'primary',
  checked = false,
  disabled = false,
  id,
  name,
  onChange,
  ...props
}) => {
  const commonProps = {
    'data-checked': checked,
    checked: checked,
    color: color,
    disabled: disabled,
  };
  return (
    <CheckboxRoot>
      <Input
        id={id}
        name={name}
        type="checkbox"
        aria-checked={checked}
        onChange={onChange}
        {...commonProps}
        {...props}
      />
      <Box {...commonProps} />
    </CheckboxRoot>
  );
};
