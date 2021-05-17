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
  width: 1em;
  height: 1em;
  display: inline-block;
  border-color: white;
  border-style: solid;
  border-radius: 99999px;
  border-width: ${props => props.width};
  border-bottom-color: ${props => props.bgColor};
  border-left-color: ${props => props.bgColor};
  animation: ${spin} ${props => props.speed} linear infinite;
`;

const LoadingLabel = styled.span`
  border: 0;
  clip: rect(0px, 0px, 0px, 0px);
  margin-left: 0.3em;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0.5;
`;

export const Loader = React.forwardRef<HTMLDivElement, LoadingProps>(
  (props, ref) => {
    const spinnerStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1em',
      lineHeight: 'normal',
    };
    return (
      <div style={spinnerStyles}>
        <StyledLoader
          ref={ref}
          width={props.width || '2px'}
          speed={props.speed || '0.45s'}
          bgColor={props.bgColor || 'transparent'}
          color={props.color}
        />
        {props.label && <LoadingLabel>{props.label}</LoadingLabel>}
      </div>
    );
  }
);
