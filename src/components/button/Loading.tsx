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
  emptyColor?: string;
  color?: string;
  thickness?: string;
  speed?: string;
  label?: string;
}

const StyledLoader = styled.div<LoadingProps>`
  display: inline-block;
  border-color: pink;
  border-style: solid;
  border-radius: 99999px;
  border-width: ${props => props.thickness};
  border-bottom-color: ${props => props.emptyColor};
  border-left-color: ${props => props.emptyColor};
  animation: ${spin} ${props => props.speed} linear infinite;
`;

export const Loader = React.forwardRef<LoadingProps, HTMLDivElement>(
  (props, ref) => {
    return (
      <StyledLoader
        ref={ref}
        label={props.label || 'Loading...'}
        thickness={props.thickness || '2px'}
        speed={props.speed || '0.45s'}
        emptyColor={props.emptyColor || 'transparent'}
      />
    );
  }
);
