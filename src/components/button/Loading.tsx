import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface LoadingProps {
  bgColor?: string;
  color?: string;
  width?: string;
  speed?: string;
  label?: string;
}

const StyledLoader = styled.div<LoadingProps>`
  display: inline-block;
  border-color: pink;
  border-style: solid;
  border-radius: 99999px;
  border-width: ${props => props.width};
  border-bottom-color: ${props => props.bgColor};
  border-left-color: ${props => props.bgColor};
  animation: ${spin} ${props => props.speed} linear infinite;
`;

export const Loader = React.forwardRef<HTMLDivElement, LoadingProps>(
  (props, ref) => {
    return (
      <StyledLoader
        ref={ref}
        label={props.label || 'Loading...'}
        width={props.width || '2px'}
        speed={props.speed || '0.45s'}
        bgColor={props.bgColor || 'transparent'}
      />
    );
  }
);
