const palette = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    light: '#CEEAE7',
    main: '#8fdecb',
    dark: '#8FDDCA',
    contrastText: '#4C4F5A',
    400: '#EDF7F6',
    600: '#68baa6',
  },
  secondary: {
    light: '#FEFCDD',
    main: '#FFEFD2',
    dark: '#ba9147',
    contrastText: '#4C4F5A',
    400: '#fff7e8',
  },
  error: {
    light: '#f47f98',
    main: '#EF4836',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  text: {
    primary: '#4C4F5A',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  action: {
    disabled: 'rgba(0, 0, 0, 0.07)',
    hover: 'rgba(0, 0, 0, 0.04)',
    disabledBackground: 'rgba(0, 0, 0, 0.05)',
  },
};

const spacing = {
  padding: {
    sm: 10,
    md: 20,
    lg: 30,
  },
};

const borderRadius = {
  small: '10px',
  default: '40px',
};

/**
 * Typography
 */
const defaultFontSize: number = 14;
const htmlFontSize: number = 16;
const coefficient: number = defaultFontSize / 14;
const getRemSize = (size: number) =>
  `${(size / htmlFontSize) * coefficient}rem`;

const typography = {
  htmlFontSize: htmlFontSize,
  remSize: (fontSize: number) => getRemSize(fontSize),
  defaultFontSize: defaultFontSize,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  button: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
};

const easing = {
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
};

const shadows = [
  'none',
  '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
];

export const theme = {
  type: 'light',
  palette: palette,
  spacing: spacing,
  borderRadius: borderRadius,
  typography: typography,
  easing: easing,
  shadows: shadows,
};
