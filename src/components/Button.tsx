import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../styles/theme';

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'default';
  variant?: 'filled' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

const outlinedPrimary = css`
  color: ${theme.palette.primary.dark};
  background-color: transparent;
  border: 1px solid ${theme.palette.primary.light};
  &:hover {
    border: 1px solid ${theme.palette.primary.dark};
    background-color: ${theme.palette.primary[400]};
    opacity: 0.6;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  font-family: ${theme.typography.button.fontFamily};
  font-weight: ${theme.typography.button.fontWeight};
  font-size: ${theme.typography.button.fontSize};
  border-style: none;
  outline: 0;
  border-radius: ${theme.borderRadius.default};
  cursor: pointer;
  display: inline-block;
  padding: 6px 16px;
  line-height: ${theme.typography.button.lineHeight};;
  color: ${theme.palette.text.primary};
  text-transform: ${theme.typography.button.textTransform};
  letter-spacing: ${theme.typography.button.letterSpacing};
    ${props =>
      props.color === 'primary' &&
      props.variant === 'filled' &&
      css`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.primary.contrastText};
      `}
    ${props =>
      props.color === 'secondary' &&
      css`
        background-color: ${theme.palette.secondary.main};
        color: ${theme.palette.primary.contrastText};
      `}
    ${props =>
      props.size === 'small' &&
      css`
        padding: 6px 12px;
        font-size: ${theme.typography.remSize(13)};
      `}
    ${props =>
      props.size === 'large' &&
      css`
        padding: 8px 14px;
        font-size: ${theme.typography.remSize(15)};
      `};
    ${props =>
      props.variant === 'filled' &&
      props.size === 'small' &&
      css`
        padding: 5px 45px;
        background-color: ${theme.palette.primary.main};
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
    ${props =>
      props.variant === 'outlined' &&
      props.color === 'primary' &&
      outlinedPrimary};
`;

export const Button: React.FC<ButtonProps> = ({
  color = 'default',
  fullWidth = false,
  size = 'medium',
  label,
  disabled = false,
  variant = 'filled',
}) => {
  return (
    <StyledButton
      color={color}
      size={size}
      label={label}
      fullWidth={fullWidth}
      disabled={disabled}
      variant={variant}
    >
      {label}
    </StyledButton>
  );
};
