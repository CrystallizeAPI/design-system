import React from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyle } from '../styles/theme';

type ColorType = 'primary' | 'secondary';
type CheckboxSizeType = 'small' | 'medium' | 'large';
export interface CheckboxProps {
  checked: boolean;
  color?: ColorType;
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: CheckboxSizeType;
}

export interface CustomCheckboxProps {
  color?: ColorType;
  checked: boolean;
  disabled: boolean;
  size: CheckboxSizeType;
}

export enum checkboxColors {
  primary = 'primary',
  secondary = 'secondary',
}

export enum checkboxSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const CheckboxRoot = styled.div`
  --opacity-disabled: 0.5;

  display: inline-flex;
  position: relative;
`;

const smallSize = css`
  width: 14px;
  height: 14px;
`;

const mediumSize = css`
  width: 24px;
  height: 24px;
`;

const largeSize = css`
  width: 32px;
  height: 32px;
`;

const secondaryColor = css`
  --checkbox-color: var(--palette-secondary-main);
  --checkbox-color-dark: var(--palette-secondary-dark);
`;

const Box = styled.span<CustomCheckboxProps>`
  --checkbox-color: var(--palette-primary-main);
  --checkbox-color-dark: var(--palette-primary-dark);

  align-items: center;
  border: ${props =>
    props.checked
      ? '2px solid var(--checkbox-color)'
      : '2px solid var(--palette-action-disabled)'};
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  position: relative;
  z-index: 1;

  ${smallSize}
  ${props => props.size === checkboxSizes.small && smallSize}
  ${props => props.size === checkboxSizes.medium && mediumSize}
  ${props => props.size === checkboxSizes.large && largeSize}
  ${props => props.color === 'secondary' && secondaryColor}
  &[disabled] {
    opacity: var(--opacity-disabled);
  }

  // We create an inner box
  &::after {
    --inner-size: 75%;
    border-radius: 2px;
    content: '';
    display: inline-block;
    height: var(--inner-size);
    opacity: ${p => (p.checked ? '1' : '0')};
    transform: ${p => (p.checked ? 'none' : 'scale(.35)')};
    transition: transform 100ms, opacity 100ms;
    width: var(--inner-size);
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

  ${p =>
    p.checked &&
    css`
      + ${Box} {
        &:after {
          background-color: var(--checkbox-color);
        }
      }
    `}

  &:hover {
    + ${Box} {
      ${p =>
        p.checked
          ? css`
              border: 2px solid var(--checkbox-color-dark);
              &:after {
                background-color: var(--checkbox-color-dark);
              }
            `
          : !p.checked &&
            css`
              border: 2px solid var(--checkbox-color);
            `}
    }
  }
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  color = 'primary',
  disabled = false,
  id,
  name,
  onChange,
  size = 'small',
  ...props
}) => {
  return (
    <>
      <GlobalStyle />
      <CheckboxRoot>
        <Input
          aria-checked={checked}
          checked={checked}
          color={color}
          data-checked={checked}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          type="checkbox"
          {...props}
        />
        <Box
          checked={checked}
          color={color}
          data-checked={checked}
          disabled={disabled}
          size={size}
        />
      </CheckboxRoot>
    </>
  );
};
