import React from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyle } from '../styles/theme';

export interface TypographyProps {
  color?: 'primary' | 'secondary' | 'primaryText' | 'secondaryText' | 'error';
  style?:
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
  underline?: boolean;
  bold?: boolean;
  display?: 'inline' | 'block' | 'inherit';
  gutter?: boolean;
  align?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  ellipsis?: boolean;
  textParagraph?: boolean;
}

/**
 * This is to prevent error TS2339: Property '$color', $variant etc does not exist on type,
 * Styled components suggested using $ prefix with a prop when rendering the component. But we don't want consumers to use $ when using this library
 * https://github.com/styled-components/styled-components/issues/3279#issuecomment-695972483.
 **/
interface StyledTypographyProps {
  $color?: TypographyProps['color'];
  $style?: TypographyProps['style'];
  $underline?: TypographyProps['underline'];
  $bold?: TypographyProps['bold'];
  $display?: TypographyProps['display'];
  $gutter?: TypographyProps['gutter'];
  $align?: TypographyProps['align'];
  $ellipsis?: TypographyProps['ellipsis'];
  $textParagraph?: TypographyProps['textParagraph'];
  $children?: React.ReactNode;
}

const withEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const gutterBottom = `margin-bottom: var(--typography-gutter);`;

const paragraph = `margin-bottom: 16px;`;

const primaryColor = `color: var(--palette-primary-600);`;

const secondaryColor = `color: var(--palette-secondary-dark);`;

const primaryTextColor = `color: var(--palette-text-primary);`;

const secondaryTextColor = `color: var(--palette-text-secondary);`;

const errorColor = `color: var(--palette-error-main);`;

const Caption = css`
  font-size: var(--caption-font-size);
  line-height: var(--caption-line-height);
  letter-spacing: var(--caption-letter-spacing);
`;

const Overline = css`
  font-size: var(--overline-font-size);
  line-height: var(--overline-line-height);
  letter-spacing: var(--overline-letter-spacing);
  text-transform: var(--overline-text-transform);
`;

const Body2 = css`
  font-size: var(--body2-font-size);
  line-height: var(--body2-line-height);
  letter-spacing: var(--body2-letter-spacing);
`;

const Body1 = css`
  font-size: var(--body1-font-size);
  line-height: var(--body1-line-height);
  letter-spacing: var(--body1-letter-spacing);
`;

const Subtitle2 = css`
  font-weight: var(--font-weight-medium);
  font-size: var(--subtitle2-font-size);
  line-height: var(--subtitle2-line-height);
  letter-spacing: var(--subtitle2-letter-spacing);
`;

const Subtitle1 = css`
  font-size: var(--subtitle1-font-size);
  line-height: var(--subtitle1-line-height);
  letter-spacing: var(--subtitle1-letter-spacing);
`;

const StyledTypography = styled.span<StyledTypographyProps>`
  font-family: var(--default-font-family);
  margin: 0;
  display: ${props => (props.$display ? props.$display : `inherit`)};
  text-align: ${props => (props.$align ? props.$align : `inherit`)};
  text-decoration-line: ${props => props.$underline && `underline`};
  font-weight: ${props =>
    props.$bold ? `bold` : `var(--font-weight-regular)`};
  ${props => props.$ellipsis && props.$display === 'block' && withEllipsis}
  ${props => props.$textParagraph && paragraph}
  ${props => props.$gutter && gutterBottom}
  ${props => props.$color === 'primary' && primaryColor}
  ${props => props.$color === 'secondary' && secondaryColor}
  ${props => props.$color === 'secondaryText' && secondaryTextColor}
  ${props => props.$color === 'error' && errorColor}
  ${props =>
    (props.$color === 'primaryText' || !props.$color) && primaryTextColor}
  ${props => props.$style === 'subtitle1' && Subtitle1}
  ${props => props.$style === 'subtitle2' && Subtitle2}
  ${props => props.$style === 'body1' && Body1}
  ${props => props.$style === 'body2' && Body2}
  ${props => props.$style === 'overline' && Overline}
  ${props => props.$style === 'caption' && Caption}
`;

export const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>(
  ({ ...props }, ref) => {
    return (
      <>
        <GlobalStyle />
        <StyledTypography
          ref={ref}
          $color={props.color || 'primaryText'}
          $style={props.style || 'subtitle1'}
          $display={props.display || 'inherit'}
          $gutter={props.gutter || false}
          $align={props.align || 'inherit'}
          $ellipsis={props.ellipsis || false}
          $textParagraph={props.textParagraph || false}
          $underline={props.underline || false}
          $bold={props.bold || false}
          as={props.style}
        >
          {props.children}
        </StyledTypography>
      </>
    );
  }
);
