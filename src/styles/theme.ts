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
  },
  secondary: {
    light: '#FEFCDD',
    main: '#FFEFD2',
    dark: '#FEFCDD',
    contrastText: '#4C4F5A',
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

export const theme = {
  type: 'light',
  palette: palette,
  spacing: spacing,
  borderRadius: borderRadius,
  typography: typography,
};
