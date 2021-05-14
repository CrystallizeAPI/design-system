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
    
    --shadow-none: none;
    --shadow-01: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
    --shadow-02: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    --shadow-03: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
    --shadow-04: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    --shadow-05: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
    --shadow-06: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
    --shadow-07: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
    --shadow-08: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
    
    --ease-out:cubic-bezier(0.0, 0, 0.2, 1); 
    --ease-in:cubic-bezier(0.4, 0, 1, 1); 
    
    --spacing-sm: 10;
    --spacing-md: 20;
    --spacing-lg: 30;

    --html-font-size: 16;
    --default-font-size: 14;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --typography-gutter:0.35em;

    --default-font-family: 'Roboto', sans-serif;

    --caption-font-size: 0.75rem;
    --caption-line-height: 1.66;
    --caption-letter-spacing: 0.03333em;

    --overline-font-size: 0.75rem;
    --overline-line-height: 2.66;
    --overline-letter-spacing: 0.08333em;
    --overline-text-transform: uppercase;
    
    --body1-font-size: 1rem;
    --body1-line-height: 1.5;
    --body1-letter-spacing: 0.00938em;

    --body2-font-size: 0.875rem;
    --body2-line-height: 1.43;
    --body2-letter-spacing: 0.01071em;
    
    --subtitle1-font-size: 1rem;
    --subtitle1-line-height: 1.75;
    --subtitle1-letter-spacing: 0.00938em;

    --subtitle2-font-size: 0.875rem;
    --subtitle2-line-height: 1.57;
    --subtitle2-letter-spacing: 0.00714em;
  }
  
  button {
    font-family: var(--default-font-family);
    font-weight: var(--font-weight-medium);
    font-size: 0.875rem;
    line-height: 1.2;
    letter-spacing: 0.02857em;
    cursor: pointer;
    :disabled{
      cursor: not-allowed;
      pointer-events: all !important;
      color: var(--palette-text-disabled);
      box-shadow: var(--shadow-none);
    }
  }
  
  
  h1 {
    font-weight: var(--font-weight-light);
    font-size: 6rem;
    line-height: 1.167;
    letter-spacing: -0.01562em;
  }
  
  h2 {
    font-weight: var(--font-weight-light);
    font-size: 3.75rem;
    line-height: 1.2;
    letter-spacing: -0.00833em;
  }
  
  h3 {
    font-weight: var(--font-weight-regular);
    font-size: 3rem;
    line-height: 1.167;
    letter-spacing: 0em;
  }

  h4 {
    font-weight: var(--font-weight-regular);
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }

  h5 {
    font-weight: var(--font-weight-regular);
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0;
  }

  h6 {
    font-weight: var(--font-weight-medium);
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
`;

export const getRemSize = (fontSize: number): number => {
  const defaultFontSize: number = 14;
  const htmlFontSize: number = 16;
  const coefficient: number = defaultFontSize / 14;
  return (fontSize / htmlFontSize) * coefficient;
};
