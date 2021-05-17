import React from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyle, getRemSize } from '../../styles/theme';
import { Loader } from './Loader';

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'default';
  variant?: 'filled' | 'outlined' | 'text';
  size?: '0' | '1' | '2';
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  icon?: string;
}

/**
 * This is to prevent error TS2339: Property '$color', $variant etc does not exist on type,
 * Styled components suggested using $ prefix with a prop when rendering the component. But we don't want consumers to use $ when using this library
 * https://github.com/styled-components/styled-components/issues/3279#issuecomment-695972483
 **/
interface StyledButtonProps {
  $color?: ButtonProps['color'];
  $variant?: ButtonProps['variant'];
  $size?: ButtonProps['size'];
  $onClick?: () => ButtonProps['onClick'];
  $fullWidth?: ButtonProps['fullWidth'];
  disabled?: boolean;
  $loading?: ButtonProps['loading'];
  $loadingText?: ButtonProps['loadingText'];
  $icon?: ButtonProps['icon'];
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
    border: 1px solid var(--palette-primary-dark);
    background-color: var(--palette-primary-400);
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
    border: 1px solid var(--palette-secondary-dark);
    background-color: var(--palette-secondary-400);
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
    background-color: var(--palette-primary-light);
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
    background-color: var(--palette-secondary-main);
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  border-style: none;
  outline: 0;
  display: inline-block;
  padding: 6px 16px;
  color: var(--palette-text-primary);
  background-color: transparent;
  width: auto;
  
      /* color=primary and variant=text*/
    ${props =>
      props.$color === 'primary' &&
      css`
        color: var(--palette-primary-600);
        &:hover {
          background-color: var(--palette-primary-400);
        }
        &:disabled {
          background-color: var(--palette-primary-400);
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
      props.$size === '0' &&
      css`
        padding: 6px 12px;
        font-size: ${getRemSize(13)}rem;
      `}

      /* size=large*/
    ${props =>
      props.$size === '2' &&
      css`
        padding: 8px 14px;
        font-size: ${getRemSize(15)}rem;
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <>
        <GlobalStyle />
        <StyledButton
          ref={ref}
          $color={props.color || 'default'}
          $size={props.size || '1'}
          $fullWidth={props.fullWidth || false}
          disabled={props.loading || props.disabled}
          $variant={props.variant || 'text'}
          {...props}
        >
          {!props.loading && props.children}
          {props.loading && (
            <Loader bgColor="gray" label={props.loadingText} width={'2px'} />
          )}
          {props.icon && !props.loading && <IconButton icon={props.icon} />}
        </StyledButton>
      </>
    );
  }
);

const StyledIcon = styled.span`
  display: inline-flex;
  align-self: center;
  flex-shrink: 0;
  //margin-right: 0.5em;
`;

interface ButtonIconProps {
  icon: string;
}

const IconButton: React.FC<ButtonIconProps> = ({ icon }: ButtonIconProps) => (
  <StyledIcon>
    <img alt={'test'} src={icon} style={{ height: '5vh', width: '5vw' }} />
  </StyledIcon>
);
