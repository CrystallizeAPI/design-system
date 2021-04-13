import React from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyle } from '../styles/theme';

//TODO: Should we have a separate style for Button?
export interface TypographyProps {
  $color?: 'primary' | 'secondary' | 'primaryText' | 'secondaryText' | 'error';
  $style?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline';
  $display?: 'inline' | 'block' | 'inherit';
  $text?: string;
  $gutter?: boolean;
  $align?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  $wrapText?: boolean;
  $textParagraph?: boolean;
}

const wrappedText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const gutterBottom = css`
  margin-bottom: var(--typography-gutter);
`;

const paragraph = css`
  margin-bottom: 16px;
`;

const primaryColor = css`
  color: var(--palette-primary-600);
`;

const secondaryColor = css`
  color: var(--palette-secondary-dark);
`;

const primaryTextColor = css`
  color: var(--palette-text-primary);
`;

const secondaryTextColor = css`
  color: var(--palette-text-secondary);
`;

const errorColor = css`
  color: var(--palette-error-main);
`;

const StyledH1 = styled.h1<TypographyProps>`
  margin: 0;
  display: ${props => (props.$display ? props.$display : `inherit`)};
  text-align: ${props => (props.$align ? props.$align : `inherit`)};
  ${props => props.$wrapText && props.$display === 'block' && wrappedText}
  ${props => props.$textParagraph && paragraph}
  ${props => props.$gutter && gutterBottom}
  ${props => props.$color === 'primary' && primaryColor}
  ${props => props.$color === 'secondary' && secondaryColor}
  ${props => props.$color === 'secondaryText' && secondaryTextColor}
  ${props => props.$color === 'error' && errorColor}
  ${props =>
    (props.$color === 'primaryText' || !props.$color) && primaryTextColor}
`;
const StyledH2 = styled.h2<TypographyProps>`
  color: aquamarine;
`;
const StyledH3 = styled.h3<TypographyProps>`
  color: orange;
`;
const StyledH4 = styled.h4<TypographyProps>`
  color: blueviolet;
`;
const StyledH5 = styled.h5<TypographyProps>`
  color: brown;
`;
const StyledH6 = styled.h6<TypographyProps>`
  color: green;
`;

export const Typography: React.FC<TypographyProps> = ({ ...props }) => {
  return (
    <>
      <GlobalStyle />
      {props.$style === 'h1' && <StyledH1 {...props}>{props.$text}</StyledH1>}
      {props.$style === 'h2' && <StyledH2 {...props}>{props.$text}</StyledH2>}
      {props.$style === 'h3' && <StyledH3 {...props}>{props.$text}</StyledH3>}
      {props.$style === 'h4' && <StyledH4 {...props}>{props.$text}</StyledH4>}
      {props.$style === 'h5' && <StyledH5 {...props}>{props.$text}</StyledH5>}
      {props.$style === 'h6' && <StyledH6 {...props}>{props.$text}</StyledH6>}
    </>
  );
};
