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
  }
  &:active {
    box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2),
      0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
  }
  &:disabled {
    border: 1px solid ${theme.palette.action.disabled};
    color: ${theme.palette.text.disabled};
  }
`;

const outlinedSecondary = css`
  color: ${theme.palette.secondary.dark};
  background-color: transparent;
  border: 2px solid ${theme.palette.secondary.main};
  &:hover {
    border: 1px solid ${theme.palette.secondary.main};
    background-color: ${theme.palette.secondary.light};
  }
  &:active {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  &:disabled {
    border: 1px solid ${theme.palette.action.disabled};
    color: ${theme.palette.text.disabled};
  }
`;

const outlined = css`
  color: ${theme.palette.text.primary};
  padding: 5px 15px;
  border: 0.4px solid ${theme.palette.text.secondary};
  border-radius: ${theme.borderRadius.default};
  &:disabled {
    border: 1px solid ${theme.palette.action.disabled};
  }
`;

const filled = css`
  background-color: ${theme.palette.common.white};
  color: ${theme.palette.primary.contrastText};
  border-radius: ${theme.borderRadius.default};
  box-shadow: ${theme.shadows[2]};
  &:disabled {
    background-color: 1px solid ${theme.palette.action.disabled};
    color: ${theme.palette.text.disabled};
    box-shadow: ${theme.shadows[0]};
  }
  &:hover {
    background-color: ${theme.palette.action.hover};
    box-shadow: ${theme.shadows[4]};
  }
  &:active {
    box-shadow: ${theme.shadows[8]};
  }
  &:focus-visible {
    box-shadow: ${theme.shadows[6]};
  }
`;

const filledPrimary = css`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};
  border-radius: ${theme.borderRadius.default};
  &:hover {
    background-color: ${theme.palette.primary.dark};
  }
`;

const filledSecondary = css`
  background-color: ${theme.palette.secondary.main};
  color: ${theme.palette.secondary.contrastText};
  border-radius: ${theme.borderRadius.default};
  &:hover {
    background-color: ${theme.palette.secondary.dark};
  }
`;

const StyledButton = styled.button<ButtonProps>`
  font-family: ${theme.typography.button.fontFamily};
  font-weight: ${theme.typography.button.fontWeight};
  font-size: ${theme.typography.button.fontSize};
  border-style: none;
  outline: 0;
  cursor: pointer;
  display: inline-block;
  padding: 6px 16px;
  line-height: ${theme.typography.button.lineHeight};;
  color: ${theme.palette.text.primary};
  text-transform: ${theme.typography.button.textTransform};
  letter-spacing: ${theme.typography.button.letterSpacing};
  background-color: transparent;
    
      /* color=primary and variant=text*/
    ${props =>
      props.color === 'primary' &&
      css`
        color: ${theme.palette.primary.main};
      `}

      /* color=secondary and variant=text*/
    ${props =>
      props.color === 'secondary' &&
      css`
        color: ${theme.palette.secondary.dark};
      `}
      
      /* size=small*/
    ${props =>
      props.size === 'small' &&
      css`
        padding: 6px 12px;
        font-size: ${theme.typography.remSize(13)};
      `}
      
      /* size=large*/
    ${props =>
      props.size === 'large' &&
      css`
        padding: 8px 14px;
        font-size: ${theme.typography.remSize(15)};
      `};

      /*variant=outlined*/
    ${props => props.variant === 'outlined' && outlined};
  
    /*variant=filled*/
    ${props => props.variant === 'filled' && filled};   
    ${props =>
      props.fullWidth &&
      css`
        width: 100%;
      `};
    ${props =>
      props.disabled &&
      css`
        //background-color: ${theme.palette.action.disabledBackground};
        color: ${theme.palette.text.disabled};
        //border-radius: ${theme.borderRadius.default};
      `};
    ${props =>
      props.variant === 'outlined' &&
      props.color === 'primary' &&
      outlinedPrimary}; 
    ${props =>
      props.variant === 'outlined' &&
      props.color === 'secondary' &&
      outlinedSecondary};
    ${props =>
      props.variant === 'filled' && props.color === 'primary' && filledPrimary};
  ${props =>
    props.variant === 'filled' &&
    props.color === 'secondary' &&
    filledSecondary};

`;

export const Button: React.FC<ButtonProps> = ({
  color = 'default',
  fullWidth = false,
  size = 'medium',
  label,
  disabled = false,
  variant = 'text',
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
