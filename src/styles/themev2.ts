import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --palette-common-white: #ffffff;
    --palette-common-black: #000000;
    
    --palette-primary-light: #CEEAE7;
    --palette-primary-main: #8fdecb;
    --palette-primary-dark: #8FDDCA;
    --palette-primary-contrastText: #4C4F5A;
    --palette-primary-400: #EDF7F6;
    --palette-primary-600: #68baa6;
    
    --palette-secondary-light: #FEFCDD;
    --palette-secondary-main: #FFEFD2;
    --palette-secondary-dark: #ba9147;
    --palette-secondary-contrastText: #4C4F5A;
    --palette-secondary-400: #fff7e8;
    
    --palette-error-light: #f47f98;
    --palette-error-main: #EF4836;
    --palette-error-dark: #d32f2f;
    --palette-error-contrastText: #ffffff;
    
    --palette-text-primary: #4C4F5A;
    --palette-text-secondary: rgba(0, 0, 0, 0.54);
    --palette-text-disabled: rgba(0, 0, 0, 0.38);
    --palette-text-hint: rgba(0, 0, 0, 0.38);
    
    --palette-action-disabled: rgba(0, 0, 0, 0.07);
    --palette-action-hover: rgba(0, 0, 0, 0.04);
    --palette-action-disabledBackground: rgba(0, 0, 0, 0.05);
    
    --border-radius-small: 10px;
    --border-radius-default: 40px;

    --html-font-size: 16;
    --default-font-size: 14;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    
    --shadow-none: none;
    --shadow-01: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
    --shadow-02: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    --shadow-03: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
    --shadow-04: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    --shadow-05: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
    --shadow-06: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
    --shadow-07: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
    --shadow-08: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
  }
  
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
  }
`;

export const getRemSize = (fontSize: number): number => {
  const defaultFontSize: number = 14;
  const htmlFontSize: number = 16;
  const coefficient: number = defaultFontSize / 14;
  return (fontSize / htmlFontSize) * coefficient;
};
