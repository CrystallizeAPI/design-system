import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'default';
  variant?: 'filled' | 'outlined' | 'text';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: #4A4A4A;
  background-color: #F6F7F7;
    ${props =>
      props.color === 'primary' &&
      css`
        background-color: rgb(143, 222, 203);
      `}
    ${props =>
      props.color === 'default' &&
      css`
        //box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `}
    ${props =>
      props.color === 'secondary' &&
      css`
        background-color: #fff4e0;
      `}
    ${props =>
      props.size === 'small' &&
      css`
        font-size: 12px;
        padding: 10px 16px;
      `}
    ${props =>
      props.size === 'medium' &&
      css`
        font-size: 14px;
        padding: 11px 20px;
      `}
    ${props =>
      props.size === 'large' &&
      css`
        font-size: 16px;
        padding: 12px 24px;
      `};
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
  ${props =>
    props.disabled &&
    css`
      background-color: #dddddd;
      color: #9095a8;
    `};
`;

export const Button: React.FC<ButtonProps> = ({
  color = 'default',
  fullWidth = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
}) => {
  return (
    <StyledButton
      color={color}
      size={size}
      style={{ backgroundColor }}
      label={label}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};
