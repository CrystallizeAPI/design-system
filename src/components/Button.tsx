import React from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyle, getRemSize } from '../styles/themev2';

export interface ButtonProps {
  $color?: 'primary' | 'secondary' | 'default';
  $variant?: 'filled' | 'outlined' | 'text';
  $size?: 'small' | 'medium' | 'large';
  $label: string;
  onClick?: () => void;
  $fullWidth?: boolean;
  disabled?: boolean;
}

const outlined = css`
  color: var(--palette-text-primary);
  padding: 5px 15px;
  border: 0.4px solid var(--palette-text-secondary);
  border-radius: var(--border-radius-default);
  &:hover {
    background-color: var(--palette-action-hover);
  }
  &:disabled {
    border: 1px solid var(--palette-action-disabled);
    background-color: var(--palette-action-disabled);
  }
`;

const outlinedPrimary = css`
  color: var(--palette-primary-600);
  background-color: transparent;
  border: 1px solid var(--palette-primary-600);
  &:hover {
    border: 1px solid var(--palette-primary-dark);
    background-color: var(--palette-primary-400);
  }
  &:active {
    box-shadow: var(--shadow-05);
  }
  &:disabled {
    border: 1px solid var(--palette-action-disabled);
    color: var(--palette-text-disabled);
    background-color: var(--palette-action-disabled);
  }
`;

const outlinedSecondary = css`
  color: var(--palette-secondary-dark);
  background-color: transparent;
  border: 1px solid var(--palette-secondary-dark);
  &:hover {
    background-color: var(--palette-secondary-400);
  }
  &:active {
    box-shadow: var(--shadow-02);
  }
  &:disabled {
    border: 1px solid var(--palette-action-disabled);
    color: var(--palette-text-disabled);
    background-color: var(--palette-action-disabled);
  }
`;

const filled = css`
  background-color: var(--palette-common-white);
  color: var(--palette-primary-contrastText);
  border-radius: var(--border-radius-default);
  box-shadow: var(--shadow-02);
  &:hover {
    background-color: var(--palette-action-hover);
    box-shadow: var(--shadow-04);
  }
  &:active {
    box-shadow: var(--shadow-08);
  }
  &:focus-visible {
    box-shadow: var(--shadow-06);
  }
  &:disabled {
    background-color: var(--palette-action-disabled);
    box-shadow: var(--shadow-none);
  }
`;

const filledPrimary = css`
  background-color: var(--palette-primary-main);
  color: var(--palette-primary-contrastText);
  border-radius: var(--border-radius-default);
  &:hover {
    background-color: var(--palette-primary-dark);
  }
  &:disabled {
    background-color: var(--palette-action-disabled);
  }
`;

const filledSecondary = css`
  background-color: var(--palette-secondary-main);
  color: var(--palette-secondary-contrastText);
  border-radius: var(--border-radius-default);
  &:hover {
    background-color: var(--palette-secondary-dark);
  }
  &:disabled {
    background-color: var(--palette-action-disabled);
  }
`;

const StyledButton = styled.button<ButtonProps>`
  border-style: none;
  outline: 0;
  cursor: pointer;
  display: inline-block;
  padding: 6px 16px;
  color: var(--palette-text-primary);
  background-color: transparent;
    
      /* color=primary and variant=text*/
    ${props =>
      props.$color === 'primary' &&
      css`
        color: var(--palette-primary-600);
        &:hover {
          background-color: var(--palette-primary-400);
        }
        &:disabled {
          background-color: transparent;
        }
      `}

      /* color=secondary and variant=text*/
    ${props =>
      props.$color === 'secondary' &&
      css`
        color: var(--palette-secondary-dark);
        &:hover {
          background-color: var(--palette-secondary-400);
        }
        &:disabled {
          background-color: transparent;
        }
      `}
      
      /* size=small*/
    ${props =>
      props.$size === 'small' &&
      css`
        padding: 6px 12px;
        font-size: ${getRemSize(13)}+rem;
      `}
      
      /* size=large*/
    ${props =>
      props.$size === 'large' &&
      css`
        padding: 8px 14px;
        font-size: ${getRemSize(15)}+rem;
      `};

      /*variant=outlined*/
    ${props => props.$variant === 'outlined' && outlined};
  
    /*variant=filled*/
    ${props => props.$variant === 'filled' && filled};   
    ${props =>
      props.$fullWidth &&
      css`
        width: 100%;
      `};
    ${props =>
      props.disabled &&
      css`
        color: var(--palette-text-disabled);
        box-shadow: var(--shadow-none);
      `};
    ${props =>
      props.$variant === 'outlined' &&
      props.$color === 'primary' &&
      outlinedPrimary}; 
    ${props =>
      props.$variant === 'outlined' &&
      props.$color === 'secondary' &&
      outlinedSecondary};
    ${props =>
      props.$variant === 'filled' &&
      props.$color === 'primary' &&
      filledPrimary};
  ${props =>
    props.$variant === 'filled' &&
    props.$color === 'secondary' &&
    filledSecondary};

`;

export const Button: React.FC<ButtonProps> = ({
  $color = 'default',
  $fullWidth = false,
  $size = 'medium',
  $label,
  disabled = false,
  $variant = 'text',
  ...props
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledButton
        $color={$color}
        $size={$size}
        $label={$label}
        $fullWidth={$fullWidth}
        disabled={disabled}
        $variant={$variant}
        {...props}
      >
        {$label}
      </StyledButton>
    </>
  );
};
