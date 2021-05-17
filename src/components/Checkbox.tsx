import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../styles/theme';

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

const stylesSmallSize = css`
  width: 14px;
  height: 14px;
`;

const Box = styled.span<CustomCheckboxProps>`
  align-items: center;
  border: ${props =>
    props.checked && props.color
      ? `2px solid ${getColorVariants(props.color).main}`
      : `2px solid ${theme.palette.action.disabled}`};
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  ${stylesSmallSize}

  &[disabled] {
    opacity: var(--opacity-disabled);
  }

  ${props => props.size === checkboxSizes.small && stylesSmallSize}

  ${props =>
    props.size === checkboxSizes.medium &&
    css`
      width: 24px;
      height: 24px;
    `}

  ${props =>
    props.size === checkboxSizes.large &&
    css`
      width: 32px;
      height: 32px;
    `}

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
        p.color && p.checked
          ? css`
              border: 2px solid ${getColorVariants(p.color).dark};
              &:after {
                background-color: ${getColorVariants(p.color).dark};
              }
            `
          : p.color &&
            !p.checked &&
            css`
              border: 2px solid ${getColorVariants(p.color).main};
            `}
    }
  }
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  color = checkboxColors.primary,
  checked = false,
  disabled = false,
  id,
  name,
  onChange,
  size = checkboxSizes.medium,
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
        aria-checked={checked}
        id={id}
        name={name}
        onChange={onChange}
        type="checkbox"
        {...commonProps}
        {...props}
      />
      <Box {...commonProps} size={size} />
    </CheckboxRoot>
  );
};
