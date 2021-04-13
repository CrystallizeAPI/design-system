import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/theme';

//TODO: Should we have a separate style for Button?
//TODO: Should text color be inherited from the parent?
export interface TypographyProps {
  $color?:
    | 'primary'
    | 'secondary'
    | 'default'
    | 'primaryText'
    | 'secondaryText'
    | 'error';
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
  $textAlign?: 'center' | 'left' | 'right' | 'justify' | 'inherit';
  $wrapText?: boolean;
  $textParagraph?: boolean;
}

const StyledH1 = styled.h1<TypographyProps>`
  text-align: inherit;
  //overflow: hidden;
  //text-overflow: ellipsis;
  //white-space: nowrap;
  margin: 0;
  display: inherit;
  text-align: ${props => props.$textAlign};
  margin-bottom: ${props => (props.$gutter ? `0.35em` : 0)};
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
