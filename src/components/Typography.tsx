import React from 'react';
// import styled, { css } from 'styled-components';
// import { GlobalStyle } from '../styles/theme';

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
  $display?: 'inline' | 'block';
  $text: string;
  $gutter?: boolean;
  $textAlign: 'center' | 'left' | 'right' | 'justify';
  $wrapText?: boolean;
  $textParagraph?: boolean;
}

export const Typography = () => {
  return <></>;
};
