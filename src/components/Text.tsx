import React from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyle } from '../styles/theme';

export interface TextProps {
  color?: 'primary' | 'secondary' | 'primaryText' | 'secondaryText' | 'error';
  size:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline';
  underline?: boolean;
  weight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 'number';
  display?: 'inline' | 'block' | 'inherit';
  gutter?: boolean;
  align?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  ellipsis?: boolean;
  textParagraph?: boolean;
  children?: React.ReactNode;
}

/**
 * This is to prevent error TS2339: Property '$color', $variant etc does not exist on type,
 * Styled components suggested using $ prefix with a prop when rendering the component. But we don't want consumers to use $ when using this library
 * https://github.com/styled-components/styled-components/issues/3279#issuecomment-695972483.
 **/
interface StyledTextProps {
  $color?: TextProps['color'];
  $size?: TextProps['size'];
  $underline?: TextProps['underline'];
  $weight?: TextProps['weight'];
  $display?: TextProps['display'];
  $gutter?: TextProps['gutter'];
  $align?: TextProps['align'];
  $ellipsis?: TextProps['ellipsis'];
  $textParagraph?: TextProps['textParagraph'];
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

const StyledText = styled.span<StyledTextProps>`
  font-family: var(--default-font-family);
  margin: 0;
  display: ${props => (props.$display ? props.$display : `inherit`)};
  text-align: ${props => (props.$align ? props.$align : `inherit`)};
  text-decoration-line: ${props => props.$underline && `underline`};
  font-weight: ${props => (props.$weight ? props.$weight : `normal`)};
  ${props => props.$ellipsis && props.$display === 'block' && withEllipsis}
  ${props => props.$textParagraph && paragraph}
  ${props => props.$gutter && gutterBottom}
  ${props => props.$color === 'primary' && primaryColor}
  ${props => props.$color === 'secondary' && secondaryColor}
  ${props => props.$color === 'secondaryText' && secondaryTextColor}
  ${props => props.$color === 'error' && errorColor}
  ${props =>
    (props.$color === 'primaryText' || !props.$color) && primaryTextColor}
  ${props => props.$size === 'subtitle1' && Subtitle1}
  ${props => props.$size === 'subtitle2' && Subtitle2}
  ${props => props.$size === 'body1' && Body1}
  ${props => props.$size === 'body2' && Body2}
  ${props => props.$size === 'overline' && Overline}
  ${props => props.$size === 'caption' && Caption}
`;

const sizeToHeading: Record<string, React.ElementType> = {
  '0': 'p',
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
  '5': 'h5',
  '6': 'h6',
};

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ ...props }, ref) => {
    return (
      <>
        <GlobalStyle />
        <StyledText
          ref={ref}
          $color={props.color || 'primaryText'}
          $size={props.size || '6'}
          $display={props.display || 'inherit'}
          $gutter={props.gutter || false}
          $align={props.align || 'inherit'}
          $ellipsis={props.ellipsis || false}
          $textParagraph={props.textParagraph || false}
          $underline={props.underline || false}
          $weight={props.weight || 'normal'}
          as={props.size ? sizeToHeading[props.size] : 'p'}
        >
          {props.children}
        </StyledText>
      </>
    );
  }
);
