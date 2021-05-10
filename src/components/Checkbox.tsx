import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../styles/theme';

const Outer = styled.div`
  display: inline-flex;
  position: relative;
`;

const CheckboxUI = styled.span<CustomCheckboxProps>`
  --size: 24px;
  --border-radius: 4px;
  --opacity-disabled: 0.5

  align-items: center;
  border: ${props =>
    props.checked
      ? `2px solid ${theme.palette.primary.main}`
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
    --size: 75%;

    background: ${theme.palette.primary.main};
    border-radius: var(--border-radius);
    content: '';
    display: inline-block;
    height: var(--size);
    opacity: ${p => (p.checked ? '1' : '0')};
    transform: ${p => (p.checked ? 'none' : 'scale(.35)')};
    transition: transform 100ms, opacity 100ms;
    width: var(--size);

    &[disabled] {
      opacity: var(--opacity-disabled);
    }
  }
`;

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
    + ${CheckboxUI} {
      ${p =>
        p.checked
          ? css`
              border: 2px solid ${theme.palette.primary.dark};
              &:after {
                background-color: ${theme.palette.primary.dark};
              }
            `
          : css`
              border: 2px solid ${theme.palette.primary.main};
            `}
    }
  }
`;

export interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
}

export interface CustomCheckboxProps {
  checked: boolean;
  disabled: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  id,
  name,
  onChange,
  ...props
}) => {
  return (
    <Outer>
      <Input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        data-checked={checked}
        aria-checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <CheckboxUI
        checked={checked}
        disabled={disabled}
        data-checked={checked}
      />
    </Outer>
  );
};
