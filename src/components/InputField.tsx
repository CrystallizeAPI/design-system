import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/theme';

export interface InputFieldProps {
  aria: string;
  color?: 'primary' | 'secondary' | 'default';
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  variant?: 'filled' | 'outlined' | 'rounded';
  size?: 'normal' | 'compact' | 'large';
  rounded?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hintText?: string;
  label?: string;
  value?: string;
  icon?: string;
  error?: string;
  maxLength?: number;
  defaultValue?: string;
  type?: 'password' | 'text' | 'number' | 'search' | 'email';
  id?: string;
  name?: string;
  autofocus?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  showClear?: boolean;
}

const Input = styled.input<InputFieldProps>`
  ::placeholder {
    color: var(--palette-secondary-dark);
  }
  appearance: none;
  border: none;
  box-sizing: border-box;
  display: block;
  outline: none;
  width: 100%;
  margin: 0;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 3em var(--palette-primary-light) inset;
  }
`;

const Label = styled.label`
  font-weight: bold;
  font-family: var(--default-font-family);
  font-size: var(--body2-font-size);
  color: var(--palette-secondary-contrastText);
  line-height: 20px;
`;

const LabelContainer = styled.label`
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 100%;
  ${Input} {
    position: relative;
    background: var(--palette-primary-light);
    color: var(--palette-text-primary);
    font-size: var(--subtitle1-font-size);
    line-height: 20px;
    padding: 10px 15px;
    border-radius: 3em;
    box-shadow: var(--palette-secondary-main) 0 0 0 1px inset;
    &:focus {
      box-shadow: var(--palette-primary-400) 0 0 0 1px inset;
    }
  }
`;

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ ...props }, ref) => {
    return (
      <>
        <GlobalStyle />
        <div>
          <LabelContainer>
            <Label htmlFor={props.id}>{props.label}</Label>
          </LabelContainer>
          <InputWrapper>
            <Input
              ref={ref}
              aria={props.aria}
              label={props.label}
              value={props.value}
            />
          </InputWrapper>
        </div>
      </>
    );
  }
);
