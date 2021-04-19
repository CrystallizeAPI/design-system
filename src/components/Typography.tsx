import React from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyle } from '../styles/theme';

//Add a copyable property. We use that in PIM a lot
//Add a editable property. That would work for mutating entities
//Text could also be underlined
//Its should also be possible to have a bold prop so that any style could be rendered bold as per the requirement.
//TODO: Have all the css props inside the theme for subtitle1,2 Body1 and Body2
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
  display?: 'inline' | 'block' | 'inherit';
  gutter?: boolean;
  align?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  ellipsis?: boolean;
  textParagraph?: boolean;
  children?: React.ReactNode;
}

const withEllipsis = css`
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

const TypographyCss = css`
  font-family: var(--default-font-family);
  margin: 0;
  display: ${props => (props.$display ? props.$display : `inherit`)};
  text-align: ${props => (props.$align ? props.$align : `inherit`)};
  ${props => props.$ellipsis && props.$display === 'block' && withEllipsis}
  ${props => props.$textParagraph && paragraph}
  ${props => props.$gutter && gutterBottom}
  ${props => props.$color === 'primary' && primaryColor}
  ${props => props.$color === 'secondary' && secondaryColor}
  ${props => props.$color === 'secondaryText' && secondaryTextColor}
  ${props => props.$color === 'error' && errorColor}
  ${props =>
    (props.$color === 'primaryText' || !props.$color) && primaryTextColor}
`;

const Caption = css`
  font-weight: var(--caption-font-weight);
  font-size: var(--caption-font-size);
  line-height: var(--caption-line-height);
  letter-spacing: var(--caption-letter-spacing);
`;

const Overline = css`
  font-weight: var(--overline-font-weight);
  font-size: var(--overline-font-size);
  line-height: var(--overline-line-height);
  letter-spacing: var(--overline-letter-spacing);
  text-transform: var(--overline-text-transform);
`;

const Body2 = css`
  font-weight: var(--font-weight-regular);
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;

const Body1 = css`
  font-weight: var(--font-weight-regular);
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

const Subtitle2 = css`
  font-weight: var(--font-weight-medium);
  font-size: 0.875rem;
  line-height: 1.57;
  letter-spacing: 0.00714em;
`;

const Subtitle1 = css`
  font-weight: var(--font-weight-regular);
  font-size: 1rem;
  line-height: 1.75;
  letter-spacing: 0.00938em;
`;

const StyledTypography = styled.p`
  ${TypographyCss};
  ${props => props.$style === 'subtitle1' && Subtitle1}
  ${props => props.$style === 'subtitle2' && Subtitle2}
  ${props => props.$style === 'body1' && Body1}
  ${props => props.$style === 'body2' && Body2}
  ${props => props.$style === 'overline' && Overline}
  ${props => props.$style === 'caption' && Caption}
`;

export const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
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
          $as={props.style}
        >
          {props.children}
        </StyledTypography>
      </>
    );
  }
);
