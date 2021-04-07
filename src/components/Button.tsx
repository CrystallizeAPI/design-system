import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: rgb(143, 222, 203);
    `}
  ${(props) =>
    !props.primary &&
    css`
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 12px;
      padding: 10px 16px;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      font-size: 14px;
      padding: 11px 20px;
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      font-size: 16px;
      padding: 12px 24px;
    `}
`;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
                                                  primary = false,
                                                  size = "medium",
                                                  backgroundColor,
                                                  label,
                                                  ...props
                                              }) => {
    return (
        <StyledButton
            primary={primary}
            size={size}
            style={{ backgroundColor }}
            label={label}
        >
            {label}
        </StyledButton>
    );
};
